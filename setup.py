"""
 Airb                                                                                                                                  nb report scrapes listing data from Airbnb property pages
"""
from setuptools import find_packages, setup

dependencies = [i.strip() for i in open("requirements.txt").readlines()]

setup(
    name='airbnb_report',
    version='0.1.0',
    url='https://github.com/lbillingham/airbnb_report',
    license='BSD',
    author='Laurence Billingham',
    author_email='lbillingham@users.noreply.github.com',
    description=' Airb                                                                                                                                  nb report scrapes listing data from Airbnb property pages',
    long_description=__doc__,
    packages=find_packages(exclude=['tests']),
    include_package_data=True,
    zip_safe=False,
    platforms='any',
    install_requires=dependencies,
    entry_points={
        'console_scripts': [
            'airbnb_report = airbnb_report.cli:main',
        ],
    },
    classifiers=[
        # As from http://pypi.python.org/pypi?%3Aaction=list_classifiers
        # 'Development Status :: 1 - Planning',
        # 'Development Status :: 2 - Pre-Alpha',
        # 'Development Status :: 3 - Alpha',
        'Development Status :: 4 - Beta',
        # 'Development Status :: 5 - Production/Stable',
        # 'Development Status :: 6 - Mature',
        # 'Development Status :: 7 - Inactive',
        'Environment :: Console',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Operating System :: POSIX',
        'Operating System :: MacOS',
        'Operating System :: Unix',
        'Operating System :: Microsoft :: Windows',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Topic :: Software Development :: Libraries :: Python Modules',
    ]
)
