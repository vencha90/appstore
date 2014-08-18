Appstore.AppController = Ember.ObjectController.extend({
  anchor: null,

  actions: {
    like: function() {
      var model = this.get('model');
      if (this.get('liked')) {
        model.decrementProperty('likes');
      } else {
        model.incrementProperty('likes');
      }
      model.save();
    }
  },

  liked: function() {
    return (this.get('model').get('likes') > 0);
  }.property('model.likes'),

	showAnchor: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.scrollToAnchor();
    });
  }.observes('anchor'),

  scrollToAnchor: function() {
    var $elem = $('#' + this.get('anchor'));
    if ($elem.length) {
      $scrollTo = $('body').scrollTop($elem.offset().top);
      this.set('anchor', null); 
    }
  }
});
