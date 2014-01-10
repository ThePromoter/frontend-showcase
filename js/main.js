require.config({
    locale: 'en_us',
    
    // Specify the base JS directory
    baseUrl: 'js/',
    
    // Default plugin settings, listed here as a reference
    hbs: {
        templateExtension : 'hbs',
        disableI18n : true,
        disableHelpers: false,
        helperDirectory: 'templates/helpers/',
        i18nDirectory: 'templates/i18n/',
        debug: false
    },
    
    // Create aliases to commonly used modules
    paths: {
        // Libraries
        'backbone'            : 'lib/backbone',
        'underscore'          : 'lib/underscore',
        'json2'               : 'lib/json2',
        
        // jQuery plugins
        'jquery'              : 'lib/jquery',
        
        // Templating
        'hbs'                 : 'lib/hbs',
        'handlebars'          : 'lib/handlebars',
        'i18nprecompile'      : 'lib/i18nprecompile'
    },
    
    // Define dependencies manually if the library doesn't support AMD
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquery': {
            exports: '$'
        },
        'json2': {
            exports: 'JSON'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require([
	'BasicModel',
	'HelloView',
	'backbone'
], function(BasicModel, HelloView, Backbone) {
	var model = new BasicModel();
	model.set({ name: 'World' });

	var view = new HelloView({
		el: $('#main'),
		model: model
	});
	view.render();
});