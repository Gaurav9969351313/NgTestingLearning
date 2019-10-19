var Hello = require("../hello-testing");

describe("Hello module", function() {
  it("should return a message", function() {
   // expect(Hello.testing()).toEqual('Hello, testing!');
   expect(Hello.testing()).not.toEqual('Hello, testing!');
  });
});