"""
tests for our airbnb property scraper
"""
from io import StringIO

from bs4 import BeautifulSoup
import pytest


from airbnb_report.scraper import airbnb_url_for

def _soupify(fake_page):
    """utility to make bs4 soup for test cases"""
    return BeautifulSoup(StringIO(fake_page), 'lxml')

def test_making_airbnb_urls():
    got_url = airbnb_url_for(999)
    assert '999' in got_url
    assert 'airbnb.co.uk' in got_url


def test_getting_script_tags():
    fake_page = """\
        <html>
        <p>Not a script tag</p>
        <script type="application/json">Wanted tag</script>
        <script type="text/javascript">Wrong type of script</script>
        </html>"""
    tags = script_tags(_soupify(fake_page))
    assert len(tags) == 1
    tag = tags[0]
    assert 'Wanted tag' in tag.text
    assert 'Wrong' not in tag.text
