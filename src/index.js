import dashboard from './dashboard/dashboard.html';
import managecustomer from './manage-customer/manage-customer.html';

$('#container').append(dashboard,managecustomer);

import '../node_modules/admin-lte/plugins/jquery/jquery.min.js';
import '../node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js';
// $.widget.bridge('uibutton', $.ui.button)
import '../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
import '../node_modules/admin-lte/dist/js/adminlte.js';
import './js/menu.js';

import './scss/style.scss';