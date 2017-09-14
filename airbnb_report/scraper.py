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
"""

def airbnb_url_for(listing_number):
    return f'https://www.airbnb.co.uk/rooms/{listing_number}'

def script_tags(soup):
    tags = soup.find_all('script', attrs={'type': 'application/json'})
    return tags

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


