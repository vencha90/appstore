Appstore.App = DS.Model.extend({
  title: DS.attr('string'),
  platform: DS.belongsTo('platform')
});

Appstore.App.FIXTURES = [
	{ id: 1, platform: 'android', title: 'Angry Birds' },
	{ id: 2, platform: 'windows', title: 'Fruit Ninja' },
	{ id: 3, platform: 'ios', title: '2048' },
	{ id: 4, platform: 'android', title: 'Google Now' },
	{ id: 5, platform: 'windows', title: 'Bing' },
	{ id: 6, platform: 'ios', title: 'Siri' },
	{ id: 7, platform: 'android', title: 'GMail' },
	{ id: 8, platform: 'windows', title: 'Outlook' },
	{ id: 9, platform: 'ios', title: 'Mail' },
	{ id: 10, platform: 'android', title: 'Hangouts' },
	{ id: 11, platform: 'windows', title: 'Skype' },
	{ id: 12, platform: 'ios', title: 'iMessage' }
];
