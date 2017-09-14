# Airbnb listing report

 Airb                                                                                                                                  nb report scrapes listing data from Airbnb property pages


# Installation
You'll need a python 3.6 interpreter in your path (I recommend a virtual environment).

Then
Simply run:

    $ pip install .

We're using python 3.6 only as I want to use some new string interpolation features.

# Usage

To use it:

    $ airbnb_report --help

# Development

Install in development mode

    $ pip install -e .

Install the test/development dependencies

    $ pip install -r requirements_dev.txt

Run the tests and get a coverage report

    $ pytest --cov-report term-missing --cov airbnb_report

Was created from my cookiecutter command line app template

```shell
cookiecutter https://github.com/lbillingham/cookiecutter-python-cli.git
full_name [Laurence Billingham]:
email [lbillingham@users.noreply.github.com]:
github_username [lbillingham]:
project_name [My Tool]: Airbnb listing report
repo_name [python-mytool]: airbnb_report
pypi_name [mytool]: airbnb_report
script_name [my-tool]: airbnb_report
package_name [my_tool]: airbnb_report
project_short_description [My Tool greets <name>, optionally as a cowboy.]:  Airbnb report scrapes listing data from Airbnb property pages
release_date [2017-02-25]: 2017-09-14
year [2017]:
version [0.1.0]:
```
