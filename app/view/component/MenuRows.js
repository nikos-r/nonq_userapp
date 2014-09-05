Ext.define('nonq_userapp.view.component.MenuRows',{
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.component.MenuRow'],
	xtype:'menurowscomponent',
	config:{
      	layout:'vbox',
		scrollable: true,
		items:[
			{
				xtype:'menurowcomponent',
				height:'5em'
			},
			{
				xtype:'menurowcomponent',
				height:'5em'
			},
			{
				xtype:'menurowcomponent',
				height:'5em'
			},
			{
				xtype:'menurowcomponent',
				height:'5em'
			}
		]		       
	}


});