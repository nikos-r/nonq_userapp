Ext.define('nonq_userapp.view.TestTicketDetails',{
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.component.TicketDetails'],
	xtype:'testticketdetailsview',
	config:{
		cls: 'backgroundGrey',
		layout: 'hbox',
		items:[
			{
				xtype:'container',
				flex:1
			},
			{
				xtype:'ticketdetailscomponent',
				flex:2,
				height: '20em'
			},
			{
				xtype:'container',
				flex:1
			}
			
		]		       
	}


});