"""
Scrape Airbnb property listings for

- property name
- property type (e.g Apartment)
- number of bedrooms
- number of bathrooms
-  list of the amenities

We do this by grabbing JSON from the page.
Could potentially also do via the human readable rendered HTML
looking for things by style attributes e.g.

```python
MAGIC_AMEN_CLASS = 'col-sm-6'
MAGIC_ATTR = 'data-reactid'
# ...
divs = soup.find_all('div', attrs={MAGIC_ATTR: True, 'class': MAGIC_CLASS})
```
but that is likely to be more brittle.

## Deliberate compromises

1. Getting the JSON is potentilly brittle: but then so is scraping in general.
   There is probably an, undocumented, API that we might get the JSON from...
   maybe that would be less likely to change

2. I'm writing tests 1st this, an personal preference, leads to lots of small
   functions. Each function owns its 'state' (e.g. the url template string).
   This means lots of moving parts to mentally juggle, but _should_
   be loosly coupled and therefore more flexible.
"""
import warnings

from bs4 import BeautifulSoup

def airbnb_url_for(listing_number):
    return f'https://www.airbnb.co.uk/rooms/{listing_number}'

def script_tags(soup):
    """grab tags with json data from soupified page"""
    tags = soup.find_all('script', attrs={'type': 'application/json'})
    return tags

def listing_info_tag(tags):
    infos = [t for t in tags if 'listingInfo' in t.text]
    if len(infos) > 1:
        mess = 'multiple script tags with "listingInfo" data found: using 1st one found'
        warnings.warn(mess)
    try:
        info = infos[0]
    except IndexError:
        mess = 'no script tags with "listingInfo" data found, did the Airbnb API change?'
        raise ValueError(mess)
    return info


def sanitize_for_json(tag):
    """eugh the tags text is in comment strings"""
    return tag.text.replace('<!--', '').replace('-->', '')


def nested_get(dict_, *nested_keys):
    for key in nested_keys:
        try:
            dict_ = dict_[key]
        except KeyError:
            return {}
    return dict_

def number_of_bathrooms(listing_data):
    label = 'bathroom_label'
    numbers = [int(s) for s in listing_data[label].split() if s.isdigit()]
    return numbers[0]

def scrape(url):
    return url


def results_for(properties):
    """
    Print results of scraping for each property.
    `properties` is an iterable of airbnb
    property numbers
    """
    urls = (airbnb_url_for(num) for num in properties)
    results = (scrape(url) for url in urls)
    return results


