console.log('webpack');

// FAVICONS & IMAGES
require.context('./components', true, /^\.\//);
require.context('./favicons', true, /^\.\//);
require.context('./views', true, /^\.\//);
require.context('./images', true, /^\.\//);

// TEMPLATES
require.context('./', true, /\.html$/);

// JSON Data
require.context('./', true, /\.json$/);


//CSS & SCSS
require("!style!css!sass!./index.scss");

//JS NODE_MODULES
require('../node_modules/angular/angular.js')
require('../node_modules/angular-ui-router/release/angular-ui-router.min.js')
require('../node_modules/angular-ui-bootstrap/index.js')

//JS APP SCRIPTS
require('./index.js')
require('./index.routes.js')

// JS COMPONENTS
require('./components/Footer/Footer.js');

//JS VIEW CONTROLLERS
require('./views/Home/index.js')
require('./views/Agenda/index.js')
require('./views/Login/index.js')
require('./views/Register/index.js')
require('./views/Admin/index.js')

//JS FILTERS
require('./views/Agenda/sessionFilter.js')

//JS SERVICES
require('./services/auth.service.js')

//JS CONSTANTS
require('./constants/auth.constant.js')