Ext.define('nonq_userapp.view.Test',{
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.MenuRow'],
	xtype:'testview',
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