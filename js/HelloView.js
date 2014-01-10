define([
	'hbs!templates/hello',
	'backbone'
], function(helloTemplate, Backbone) {
	return Backbone.View.extend({
		render: function() {
			this.$el.empty();
			this.$el.append(helloTemplate(this.model.toJSON()));

			return this;
		}
	});
});