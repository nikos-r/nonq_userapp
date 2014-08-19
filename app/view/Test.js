Ext.define('nonq_userapp.view.Test', {
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.Header','nonq_userapp.view.Footer','nonq_userapp.view.StorePicker'],
	xtype: 'testview',
	config:{
		layout: 'vbox',
		items:[
		       {
	    		xtype:'headerview',
	    		flex:1
		       },
		       {
	    		xtype:'storepickerview',
	    		flex:2
		       }
//,
//		       {
//	    		xtype:'footerview',
//	    		flex:1
//		       }
		]
	}
});