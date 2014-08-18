Appstore.AppsController = Ember.ArrayController.extend({
  itemController: 'app',
  sortProperties: ['likes'],
  sortAscending: false,
  needs: ['platform'],
  isPlatformRoute: Ember.computed.alias('controllers.platform.isPlatformRoute')
});
