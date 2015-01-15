Ext.define('nonq_userapp.view.component.TicketStatus',{
	extend: 'Ext.Container',
	xtype: 'ticketstatuscomponent',
	config:{
		style:'text-align:center; color:white',
		cls:'backgroundGreen',
		layout:'vbox',
		items:[
			{
				xtype:'container',
				html:'your number'
			},
			{
				xtype:'container',
				html:'345',
				style:'font-size:2em; padding-bottom: 0.2em'		
			},
			{
				xtype:'container',
				html:'serving now'
			},
			{
				xtype:'container',
				html:'335',
				style:'font-size:2em; padding-bottom: 0.2em'
			}
		]
	}
	
});