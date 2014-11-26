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
				cls: 'backgroundGrey',
				layout: 'hbox',
				flex: 3,
				items:[
					{
						xtype:'container',
						flex:1
					},
					{
						xtype:'ticketdetailscomponent',
						flex:2,
					},
					{
						xtype:'container',
						flex:1
					}
					
				]		       
			},
			{
				xtype:'container',
				cls: 'backgroundGrey',
				flex: 1
			}
        ]
	}


});