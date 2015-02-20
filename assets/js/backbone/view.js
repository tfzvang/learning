var homeView = Backbone.View.extend({
	el: "#mainContainer",
	initialize: function() {
		this.render();
	},
	render: function() {
		var compiledView = Handlebars.compile(home_Template);
		this.$el.html(compiledView);
	}
});

var aboutView = Backbone.View.extend({
	el: "#mainContainer",
	initialize: function() {
		this.render();
	},
	render: function() {
		var compiledView = Handlebars.compile(aboutTemplate);
		this.$el.html(compiledView);
	}
});

var tennisView = Backbone.View.extend({
	el: "#mainContainer",
	initialize: function() {
		this.render();
	},
	render: function() {
		var compiledView = Handlebars.compile(tennisTemplate);
		this.$el.html(compiledView);
	}
});

var gamingView = Backbone.View.extend({
	el: "#mainContainer",
	initialize: function() {
		this.render();
	},
	render: function() {
		var compiledView = Handlebars.compile(gamingTemplate);
		this.$el.html(compiledView);
	}
});

var developmentView = Backbone.View.extend({
	el: "#mainContainer",
	initialize: function() {
		this.render();
	},
	render: function() {
		var compiledView = Handlebars.compile(developmentTemplate);
		this.$el.html(compiledView);
	}
});