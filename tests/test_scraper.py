"""
tests for our airbnb property scraper
"""
from io import StringIO

from bs4 import BeautifulSoup
import pytest


from airbnb_report.scraper import (
    airbnb_url_for, listing_info_tag,
    nested_get, number_of_bathrooms,
    sanitize_for_json, script_tags,
)

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


def test_getting_listing_info_tags_golden_path():
    golden = """\
        <html>
        <script type="application/json">{"listingInfo": "Wanted"}</script>
        </html>"""
    golden_tags = script_tags(_soupify(golden))
    assert 'listingInfo' in listing_info_tag(golden_tags).text
    assert 'Wanted' in listing_info_tag(golden_tags).text


def test_more_than_one_listing_tag_warns():
    too_many = """<html>
        <script type="application/json">{"listingInfo": "1st"}</script>
        <script type="application/json">{"listingInfo": "2nd"}</script>
        </html>"""
    too_many_tags = script_tags(_soupify(too_many))
    with pytest.warns(UserWarning):
        first_tag = listing_info_tag(too_many_tags)
    assert '1st' in first_tag.text
    assert '2nd' not in first_tag.text


def test_sane_fail_if_no_listing_tag():
    """
    if the page does not have a listingInfo tag
    do we raise a non-surprising error?
    i.e. not something like an IndexError
    """
    not_enough = """\
        <html>
        <script type="application/json">{"NonRequiredInfo": "Should not get"}</script>
        </html>"""
    not_enough_tags = script_tags(_soupify(not_enough))
    with pytest.raises(ValueError):
        listing_info_tag(not_enough_tags)


def test_sanitise_for_json():
    class FakeTag:
        text = '<!--We want this middle bit-->'
    got = sanitize_for_json(FakeTag())
    assert got == 'We want this middle bit'

def test_denesting():
    """
    JSON data comes back as nested dicts
    can we get it out?
    """
    im_nested = {'1st': {'2nd': {'3rd': 'level of nesting', 'superflous_key': 5}}}
    got_full = nested_get(im_nested, '1st', '2nd', '3rd')
    assert got_full == 'level of nesting'

    got_partial = nested_get(im_nested, '1st', '2nd')
    assert got_partial == {'3rd': 'level of nesting', 'superflous_key': 5}

    got_bad = nested_get(im_nested, '1st', '2nd', 'bad inner key')
    assert got_bad == {}

def test_number_of_bathrooms():
    data = {'bathroom_label':'42 baths and other bathing devices'}
    assert number_of_bathrooms(data) == 42