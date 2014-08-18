Appstore.Router.map(function() {
  this.route('search', { path: '/search/:query' });
  this.resource('platform', { path: '/platforms/:platform_id' }, function() {
    this.resource('platformApp', { path: '/apps/:app_id' });
  });
  this.resource('apps', { path: '/apps' }, function() {
    this.resource('app', { path: '/:app_id' });
  });
});

Appstore.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('apps');
  }
});

Appstore.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('platform');
  }
});

Appstore.SearchRoute = Ember.Route.extend({
  model: function(params) {
    if (!params.query) {
      return []; // no results;
    }
    var string = params.query.toLowerCase();
    var appPromise = this.store.find('app');
    var filteredApps = appPromise.then(function(apps) {
      return apps.filter(function(app) {
        if (app.get('title').toLowerCase().indexOf(string) >= 0) {
          return app;
        }
        if (app.get('description').toLowerCase().indexOf(string) >= 0) {
          return app;
        }
      });  
    })
    
    return filteredApps;
  },

  setupController: function(controller, model, context) {
    this._super(controller, model);
    this.controllerFor('application').set('query', context.params.search.query);
    this.controllerFor('application').set('queryField', context.params.search.query);
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
    return this.store.find('platform');
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
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('anchor', 'app-details');
  },
  renderTemplate: function() {
    this.render({ outlet: 'appDetails'});
  }
});

Appstore.PlatformAppRoute = Ember.Route.extend({
  controllerName: 'app',
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('anchor', 'app-details');
  },
  renderTemplate: function() {
    this.render({ outlet: 'platformAppDetails'});
  }
});

