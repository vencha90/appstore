Appstore.AppController = Ember.ObjectController.extend({
  needs: ['platform'],
  queryParams: ['anchor'],
  anchor: null,
	showAnchor: function() {
    $elem = $('#' + this.get('anchor'));
    if ($elem.length) {
	    $scrollTo = $('body').scrollTop($elem.offset().top);	
    }
  }.observes('anchor')
});
