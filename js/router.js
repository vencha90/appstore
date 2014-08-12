Appstore.Router.map(function() {
  this.resource('platform', { path: '/platforms/:platform_id' }, function() {
    this.route('app', { path: 'apps/:app_id' });
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
    return this.store.find('platform', params.platform_id);
  }
});

Appstore.PlatformAppRoute = Ember.Route.extend({

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
