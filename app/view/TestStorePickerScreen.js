Ext.define('nonq_userapp.view.TestStorePickerScreen', {
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.component.Header',
	           'nonq_userapp.view.FooterView',
	           'nonq_userapp.view.component.StorePickerWrapper'],
	xtype: 'teststorepickerscreen',
	config:{
		layout: 'vbox',
		items:[
		       {
	    		xtype:'headercomponent',
	    		flex:1
		       },
		       {
	    		xtype:'storepickerwrappercomponent',
	    		flex:3
		       },
		       {
	    		xtype:'footerview',
	    		flex:1
		       }
		]
	}
});