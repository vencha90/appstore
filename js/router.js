Appstore.Router.map(function() {
  this.route('index', { path: '/' });
  this.resource('platform', { path: '/platforms/:id' }, function() {
    this.route('app', { path: 'apps/:id' });
  });
});

Appstore.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('platform');
  }
});

// Appstore.PlatformsRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.findAll('platform');
//   }
// });

Appstore.PlatformRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('platform', params.id);
  }
});

// Appstore.AppsRoute = Ember.Route.extend({
//   model: function(params) {
//     return this.store.filter('app', function(app) {
//       return app.get('platform') === params.platform_id;
//     });
//   },
//   setupController: function(controller, model) {
//     this._super(controller, model);
//     controller.set('platform', this.modelFor('platform'));
//   }
// });

// Appstore.AppRoute = Ember.Route.extend({
//   model: function(params) {
//     return this.store.filter('app', function(app) {
//       return app.get('id') === params.app_id;
//     });
//   }
// });
