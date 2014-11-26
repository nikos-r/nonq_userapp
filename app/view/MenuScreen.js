Ext.define('nonq_userapp.view.MenuScreen', {
	extend: 'nonq_userapp.ux.Drawer',
	requires: ['nonq_userapp.view.MainView'],
	xtype: 'menuscreen',
	config:{
    	direction: 'horizontal',
		drawerOpen: false,
	    openDrawerLength: 0.5,
		backgroundItem:{
//	        html : 'menu',
//	        style: 'background-color: red'
			xtype: 'mainview'
		},
		drawerItem:{
            html : 'Drawer',
            style: 'background-color: grey'
		}
	}
});
