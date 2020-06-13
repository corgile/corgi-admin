#!/bin/bash
PACKAGE_VERSION=$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' package.json)
echo "Corgi admin version $PACKAGE_VERSION"
zip -r dist/corgi-admin-$PACKAGE_VERSION.zip dist

export PACKAGE_VERSION
