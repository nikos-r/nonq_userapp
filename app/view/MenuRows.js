Ext.define('nonq_userapp.view.MenuRows',{
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.MenuRow'],
	xtype:'menurowsview',
	config:{
      	layout:'vbox',
		scrollable: true,
		items:[
			{
				xtype:'menurowview',
				height:'5em'
			},
			{
				xtype:'menurowview',
				height:'5em'
			},
			{
				xtype:'menurowview',
				height:'5em'
			},
			{
				xtype:'menurowview',
				height:'5em'
			}
		]		       
	}


});