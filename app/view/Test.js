Ext.define('nonq_userapp.view.Test',{
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.component.MenuRows'],
	xtype:'testview',
	config:{
      	layout:{
			type:'hbox',
			pack:'center'
		},
		items:[
			{
				xtype:'menurowscomponent',
				minWidth: '60%'
			}
		]		       
	}


});