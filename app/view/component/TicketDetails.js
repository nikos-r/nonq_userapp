Ext.define('nonq_userapp.view.component.TicketDetails',{
	extend: 'Ext.Container',
	xtype:'ticketdetailscomponent',
	requires:[
	          'nonq_userapp.view.component.TransportOption',
	          'nonq_userapp.view.component.TicketStatus',
	          'nonq_userapp.view.component.HeartLine'
    ],
	config:{
		layout:'vbox',
		items:[
			{
				xtype:'ticketstatuscomponent'
			},
			{
				xtype:'container',
				style:'text-align:center; color:white',
				cls:'backgroundGreen',
				layout: {
					type:'hbox',
					pack:'center'
				},
				items:[
					{
						xtype:'container',
						html:'be there in',
						cls:'backgroundDefault fontColorGreen'
					},
					{
						xtype:'container',
						html: '15\'',
						cls:'backgroundOrange fontColorGreen'
						
					}
				]
			},
			{
				xtype:'container',
				layout:{
					type:'hbox',
					pack:'center'
				},
				cls:'backgroundGreen',
				style:'padding-top:1em; padding-bottom:1em',
				items:[
					{
						xtype:'transportoptioncomponent',
						disabledImageSrc:'resources/icons/TransportMeans_active.png',
						activeImageSrc:'resources/icons/TransportMeans_available.png',
						pressedImageSrc:'resources/icons/TransportMeans_active.png',
						imageSize:'3em',
						width:'4em',
						text: 'bus'
					},
					{
						xtype:'transportoptioncomponent',
						disabledImageSrc:'resources/icons/TransportMeans_active.png',
						activeImageSrc:'resources/icons/TransportMeans_available.png',
						pressedImageSrc:'resources/icons/TransportMeans_active.png',
						imageSize:'3em',
						width:'4em',
						text:'foot'
					},
					{
						xtype:'transportoptioncomponent',
						disabledImageSrc:'resources/icons/TransportMeans_active.png',
						activeImageSrc:'resources/icons/TransportMeans_available.png',
						pressedImageSrc:'resources/icons/TransportMeans_active.png',
						imageSize:'3em',
						width:'4em',
						text: 'car'
					}
				]
			},
			{
				xtype:'heartlinecomponent'
			}	
			
		]
	}
});

