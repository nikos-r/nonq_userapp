Ext.define('nonq_userapp.view.MenuScreen', {
	extend: 'nonq_userapp.ux.Drawer',
	xtype: 'menuscreen',
	config:{
    	direction: 'horizontal',
//		defaultActive: 'drawer',
//	    openDrawerLength: 0.1,
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
