# StandardID [![Build Status](https://travis-ci.org/gavinhenderson/StandardID.svg?branch=master)](https://travis-ci.org/gavinhenderson/StandardID)

> Generate IDs using the same format

This can be useful if you have user facing IDs that you want to be consitently formatted

## Install

```
$ npm install standardid
```

## Usage

```js
const standardID  = require('standardid') // Require the module

// Create a new generator
// This will generator an ID of 3 uppercase alphabets followed by 3 digits
let generator = new standardID("AAA000");

// Generate a new ID
let newID = generator.generate();

// Set blueprint after generator is created
generator.blueprint = "aaaa";
newID = generator.generate();

// Placeing a ! will now select from the given string
generator.specifiers["!"] = ".!><?";
generator.blueprint = "!!!";
newID = generator.generate();

```

By default the specifiers are:
```js
  "A":"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "a":"abcdefghijklmnopqrstuvwxyz",
  "0":"0123456789"

```
