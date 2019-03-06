// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by methods-coupons.js.
import { name as packageName } from "meteor/methods-coupons";

// Write your tests here!
// Here is an example.
Tinytest.add('methods-coupons - example', function (test) {
  test.equal(packageName, "methods-coupons");
});
