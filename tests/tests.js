// in order to see the app running inside the QUnit runner
App.rootElement = '#ember-testing';

// Common test setup
App.setupForTesting();
App.injectTestHelpers();

// common QUnit module declaration
module("Integration tests", {
  setup: function() {
    // before each test, ensure the application is ready to run.
    Ember.run(App, App.advanceReadiness);
  },

  teardown: function() {
    // reset the application state between each test
    App.reset();
  }
});

// QUnit test case
test("/", function() {
  visit("/");

  andThen(function() {
    equal(find("a").text(), "Posts", "Links to posts page");
  });

  find('a').click();
  andThen(function() {
    equal(currentPath(), 'posts.index', "Link to posts page is working");
  });
});
