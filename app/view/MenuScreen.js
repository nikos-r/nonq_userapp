Ext.define('nonq_userapp.view.MenuScreen', {
	extend: 'nonq_userapp.ux.Drawer',
	xtype: 'menuscreen',
	config:{
    	direction: 'horizontal',
		drawerOpen: false,
	    openDrawerLength: 0.9,
		backgroundItem:{
	        html : 'menu',
	        style: 'background-color: red'
		},
		drawerItem:{
            html : 'Drawer',
            style: 'background-color: grey'
		}
	}
});
