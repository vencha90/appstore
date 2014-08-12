App.Router.map(function() {
  this.resource('posts', { path: '/posts' }, function() {
  	this.route('new');
  });

  this.resource('post', { path: '/post:id' }, function() {
  	this.route('edit');
  })
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return;
  }
});

App.PostsRoute = Ember.Route.extend({
  model: function(params) {
  	return this.modelFor('posts');
  }
});

App.PostsNewRoute = Ember.Route.extend({
	model: function(params) {
		console.log('IMPLEMENTATION PENDING');
		return;
	}
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
  	return this.store.find('post', params.post_id);
  }
});

App.PostEditRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('post', params.post_id);
	}
});
