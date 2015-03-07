Ext.define('nonq_userapp.view.HiddenMenuScreen', {
	extend: 'nonq_userapp.ux.Drawer',
	requires: ['nonq_userapp.view.ViewWithHeader'],
	xtype: 'hiddenmenuscreen',
	config:{
    	direction: 'horizontal',
		drawerOpen: false,
	    openDrawerLength: 0.5,
		backgroundItem:{
			xtype: 'viewwithheader'
		},
		drawerItem:{
            html : 'Drawer',
            style: 'background-color: grey'
		}
	}
});
