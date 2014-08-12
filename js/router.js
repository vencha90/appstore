Appstore.Router.map(function() {
  this.route('index', { path: '/'} );
  this.resource('platform', { path: '/platforms/:id' } );
});

Appstore.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('platform');
  }
})

Appstore.PlatformsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('platform');
  }
});

Appstore.PlatformRoute = Ember.Route.extend({
  model: function(params) {
  	return this.store.find('platform', params.platform_id);
  }
});
