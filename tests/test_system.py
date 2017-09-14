"""
full system test that hits the internet
for data looked up on a particlar property
therefore liable to break

verified against rendered page by LB on
commit datetime
"""
import pytest
from click.testing import CliRunner
from airbnb_report import cli


@pytest.fixture
def runner():
    return CliRunner()

def test_1_of_the_required_properties(runner):
    propert_number = '19278160'
    result = runner.invoke(cli.main, [propert_number])
    assert result.exit_code == 0
    assert not result.exception
    assert propert_number in result.output.strip()
    assert 'Laptop friendly workspace' in result.output.strip()
    assert 'property_type: Entire flat' in result.output.strip()
    assert 'bedrooms: 1' in result.output.strip()
    assert 'York Place' in result.output.strip()
