'use strict'
module.exports = {
  "tags": {
      "allowUnknownTags": true,
      "dictionaries": ["jsdoc"]
  },
  "source": {
      "include": ["src", "package.json", "README.md"],
      "includePattern": ".js$",
      "excludePattern": "(node_modules/|docs)"
  },
  "plugins": [
      "plugins/markdown"
  ],
  "templates": {
      "referenceTitle": "My SDK Name",
      "disableSort": false,
      "collapse": true,
      "resources": {
          "google": "https://www.google.com/"
      }
  },
  "opts": {
      "destination": "./public/documentation/",
      "encoding": "utf8",
      "private": true,
      "recurse": true,
      "template": "./node_modules/docdash"
  }
}