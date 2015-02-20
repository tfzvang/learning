var AppRouter = Backbone.Router.extend({
	routes: {
		"" : "home",
		"about" : "about",
		"tennis" : "tennis",
		"gaming" : "gaming",
		"development" : "development"
	},
	
	home: function() {
		new homeView();
	},
	about: function() {
		new aboutView();
	},
	tennis: function() {
		new tennisView();
	},
	gaming: function() {
		new gamingView();
	},
	development: function() {
		new developmentView();
	}
	
});