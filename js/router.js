Appstore.Router.map(function() {
  this.resource('platform', { path: '/platforms/:platform_id' }, function() {
    this.route('app', { path: 'apps/:app_id' });
  });
  this.resource('apps', { path: '/apps' });
  this.route('app', { path: 'apps/:app_id' });
});

Appstore.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('platform');
  }
});

Appstore.PlatformRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('platform', params.platform_id);
  }
});

Appstore.AppsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('app');
  }
});

Appstore.AppRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('app', params.app_id);
  }
});
