Ext.define('nonq_userapp.view.Test', {
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.Header','nonq_userapp.view.Footer','nonq_userapp.view.StorePickerWrapper'],
	xtype: 'testview',
	config:{
		layout: 'vbox',
		items:[
		       {
	    		xtype:'headerview',
	    		flex:1
		       },
		       {
	    		xtype:'storepickerwrapperview',
	    		flex:3
		       },
		       {
	    		xtype:'footerview',
	    		flex:1
		       }
		]
	}
});