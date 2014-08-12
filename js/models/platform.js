Appstore.Platform = DS.Model.extend({
  title: DS.attr('string'),
  apps:  DS.hasMany('app', {async: true})
});

Appstore.Platform.FIXTURES = [
 { id: 'android', title: 'Android', apps: [1, 4, 7, 10] },
 { id: 'windows', title: 'Windows', apps: [2, 5, 8, 11] },
 { id: 'ios', title: 'iOS', apps: [3, 6, 9, 12] }
];
