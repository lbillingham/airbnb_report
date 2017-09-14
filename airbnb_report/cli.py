import sys

import click

from .scraper import results_for

_ASKED_FOR_LISTINGS = [14531512, 19278160, 19292873]

def check_python_version():
    if sys.version_info < (3, 6):
        mess = 'we require python 3.6 or greater (I wanted to use f-strings (PEP 498))'
        raise click.UsageError(mess)

@click.command()
@click.option('--test_properties', '-t', is_flag=True, help='Run for the 3 specified test properties.')
@click.argument('listing_number', default=None, required=False, type=int, metavar='<listing_number>')
def main(listing_number, test_properties):
    """
     Airbnb report scrapes listing data from Airbnb property pages.
     Specify a property using its <listing number>.

     These are part of the property's URL: e.g. the
     <listing_number> for https://www.airbnb.co.uk/rooms/14531512
     is 14531512
    """
    check_python_version()
    properties = []
    if listing_number:
        properties.append(listing_number)
    if test_properties:
        properties += _ASKED_FOR_LISTINGS
    results = results_for(properties)
    for prop, result in zip(properties, results):
        click.echo(f'Results for property number {prop}:')
        click.echo(result)
        click.echo()
