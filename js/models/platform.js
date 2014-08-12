Appstore.Platform = DS.Model.extend({
  title: DS.attr('string')
});

Appstore.Platform.FIXTURES = [
 { id: 'android', title: 'Android' },
 { id: 'windows', title: 'Windows' },
 { id: 'ios', title: 'iOS' }
];
