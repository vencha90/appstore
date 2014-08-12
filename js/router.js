App.Router.map(function() {
  this.resource('platforms', { path: '/' });
  this.resource('platform', { path: '/platform/:id' });
});

App.PlatformsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('platform');
  }
});

App.PlatformRoute = Ember.Route.extend({
  model: function(params) {
  	return this.store.find('platform', params.platform_id);
  }
});
