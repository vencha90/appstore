Appstore.Router.map(function() {
  this.resource('platform', { path: '/platforms/:platform_id' }, function() {
    this.resource('platformApp', { path: '/apps/:app_id' });
  });
  this.resource('apps', { path: '/apps' }, function() {
    this.resource('app', { path: '/:app_id', queryParams: ['anchor'] });
  });
});

Appstore.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('apps');
  }
});

Appstore.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('platform');
  }
});

Appstore.PlatformRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('platform', params.platform_id);
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('isPlatformRoute', true);
  }
});

Appstore.AppsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('platform');
  },
  controllerName: 'platforms',
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('platform').set('isPlatformRoute', false);
  },
  renderTemplate: function() {
    this.render('platforms');
  }
});

Appstore.AppRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('app', params.app_id);
  },
  setupController: function(controller, model, queryParams) {
    this._super(controller, model);
    controller.set('anchor', 'app-details');
  },
  renderTemplate: function() {
    this.render({ outlet: 'appDetails'});
  }
});

Appstore.PlatformAppRoute = Ember.Route.extend({
  controllerName: 'app',
  renderTemplate: function() {
    this.render({ outlet: 'platformAppDetails'});
  }
});

