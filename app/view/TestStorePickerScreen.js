Ext.define('nonq_userapp.view.TestStorePickerScreen', {
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.Header','nonq_userapp.view.Footer','nonq_userapp.view.StorePickerWrapper'],
	xtype: 'teststorepickerscreen',
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