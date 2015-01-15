Ext.define('nonq_userapp.view.component.FooterBottom',{
	extend: 'Ext.Container',
	requires: [
	           'nonq_userapp.view.component.TicketDetails'
    ],
	xtype:'footerbottomcomponent',
	config:{
		layout:'vbox',
		
		items:[
			{
				xtype:'container',
				layout: 'hbox',
				items:[
					{
						xtype:'container',
						flex:1
					},
					{
						xtype:'ticketdetailscomponent',
						cls: 'backgroundGrey',
						flex:2
					},
					{
						xtype:'container',
						flex:1
					}					
				]		       
			}
        ]
	}


});