import { Tinytest } from "meteor/tinytest";

import { init } from "meteor/simonsimcity:client-session-timeout";

Tinytest.add('client-session-timeout - returns false if no expiry time is given', function (test) {
  test.equal(init(), false);
});

Tinytest.add('client-session-timeout - returns true if an expiry time is given', function (test) {
  test.equal(init(), true);
});
