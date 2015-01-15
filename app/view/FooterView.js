Ext.define('nonq_userapp.view.FooterView',{
	extend: 'Ext.Container',
	requires: [
	           'nonq_userapp.view.component.TicketDetails',
	           'nonq_userapp.view.component.FooterTop',
	           'nonq_userapp.view.component.FooterBottom'
    ],
	xtype:'footerview',
	config:{
		layout:'vbox',
		items:[
			{
			   xtype:'footertopcomponent',
			   height: '7em' //2.5 x height(headerinfocomponent)
			},
			{
				xtype: 'footerbottomcomponent',
				cls: 'backgroundGrey',
				flex: 1
			}
        ]
	}


});