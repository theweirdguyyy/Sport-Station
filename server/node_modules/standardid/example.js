const standardID  = require('./index') // Require the module

// Create a new generator
// This will generator an ID of 3 uppercase alphabets followed by 3 digits
let generator = new standardID("AAA000");

// Generate a new ID
let newID = generator.generate();
console.log(newID);

// Set blueprint after generator is created
generator.blueprint = "aaaa";
newID = generator.generate();
console.log(newID);

// Placeing a ! will now select from the given string
generator.specifiers["!"] = ".!><?";
generator.blueprint = "!!!";
newID = generator.generate();
console.log(newID)
