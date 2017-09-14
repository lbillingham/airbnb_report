import pytest
from click.testing import CliRunner
from airbnb_report import cli


@pytest.fixture
def runner():
    return CliRunner()


def test_cli(runner):
    result = runner.invoke(cli.main)
    assert result.exit_code == 0
    assert not result.exception
    assert result.output.strip() == ''


def test_cli_with_arg(runner):
    result = runner.invoke(cli.main, ['42'])
    assert result.exit_code == 0
    assert not result.exception
    assert '42' in result.output.strip()
    assert 'airbnb' in result.output.strip()
