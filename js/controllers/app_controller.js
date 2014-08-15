Appstore.AppController = Ember.ObjectController.extend({
  needs: ['platform'],
  queryParams: ['anchor'],
  anchor: null,

	showAnchor: function() {
    this.scrollToAnchor();
  }.observes('anchor'),

  scrollToAnchor: function() {
    var $elem = $('#' + this.get('anchor'));
    if ($elem.length) {
      $scrollTo = $('body').scrollTop($elem.offset().top);
      this.set('anchor', null); 
    }
  }
});
