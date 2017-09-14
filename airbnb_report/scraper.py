"""
Scrape Airbnb property listings for

- property name
- property type (e.g Apartment)
- number of bedrooms
- number of bathrooms
-  list of the amenities
"""

def airbnb_url_for(listing_number):
    return f'https://www.airbnb.co.uk/rooms/{listing_number}'

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


