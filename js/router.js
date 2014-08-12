App.Router.map(function() {
  this.route('index', { path: '/'} );
  this.resource('platform', { path: '/platforms/:id' } );
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('platform');
  }
})

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
