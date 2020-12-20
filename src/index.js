import dashboard from './dashboard/dashboard.html';
import managecustomer from './manage-customer/manage-customer.html';
import manageitem from './manage-items/manage-item.html';
import placeorder from './place-orders/place-orders.html';
import searchorder from './search-orders/search-orders.html';
import settings from './settings/settings.html';

$('#container').append(dashboard,managecustomer,manageitem,placeorder,searchorder,settings);

import '../node_modules/admin-lte/plugins/jquery/jquery.min.js';
import '../node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js';
// $.widget.bridge('uibutton', $.ui.button)
import '../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
import '../node_modules/admin-lte/dist/js/adminlte.js';
import './js/menu.js';

import './scss/style.scss';
