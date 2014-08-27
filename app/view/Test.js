Ext.define('nonq_userapp.view.Test',{
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.MenuRows'],
	xtype:'testview',
	config:{
      	layout:{
			type:'hbox',
			pack:'center'
		},
		items:[
			{
				xtype:'menurowsview',
				minWidth: '60%'
			}
		]		       
	}


});