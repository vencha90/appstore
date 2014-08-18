Appstore.ApplicationController = Ember.ArrayController.extend({
  query: null,
  queryField: Ember.computed.oneWay('query'),
  
  actions: {
    search: function() {
      this.set('query', this.get('queryField'));
      this.transitionToRoute('search', this.get('query'));
    }
  }
})