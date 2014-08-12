App.Platform = DS.Model.extend({
  title: DS.attr('string')
});

App.Platform.FIXTURES = [
 { id: 'android', title: 'Android' },
 { id: 'windows', title: 'Windows' },
 { id: 'ios', title: 'iOS' }
];
