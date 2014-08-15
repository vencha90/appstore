Appstore.AppView = Ember.View.extend({
  didInsertElement: function() {
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
  },
  afterRenderEvent : function(){
    this.get('controller').scrollToAnchor();
  }
});
