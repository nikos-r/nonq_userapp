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
			}
			,
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
						itemId: 'timeRemainingId',
						cls:'backgroundOrange fontColorGreen'
							
						
					}
				]
			},
			{
				xtype:'container',
//				height: '3em',
				layout:{
					type:'hbox',
					pack:'center'
				},
				cls:'backgroundGreen',
				style:'padding-top:0.5em;padding-bottom:0.5em;',
				items:[
					{
						xtype:'transportoptioncomponent',
						disabledImageSrc:'resources/icons/TransportMeans_active.png',
						activeImageSrc:'resources/icons/TransportMeans_available.png',
						pressedImageSrc:'resources/icons/TransportMeans_active.png',
						imageSize:'2em',
						style:'margin-left:0.1em;margin-right:0.1em;',
//						width:'em',
//						flex: 1,
						text: 'bus'
					},
					{
						xtype:'transportoptioncomponent',
						disabledImageSrc:'resources/icons/TransportMeans_active.png',
						activeImageSrc:'resources/icons/TransportMeans_available.png',
						pressedImageSrc:'resources/icons/TransportMeans_active.png',
						imageSize:'2em',
//						width:'1.4em',
//						flex: 1,
						style:'margin-left:0.1em;margin-right:0.1em;',
						text:'foot'
					},
					{
						xtype:'transportoptioncomponent',
						disabledImageSrc:'resources/icons/TransportMeans_active.png',
						activeImageSrc:'resources/icons/TransportMeans_available.png',
						pressedImageSrc:'resources/icons/TransportMeans_active.png',
						imageSize:'2em',
//						width:'1.4em',
//						flex: 1,
						style:'margin-left:0.1em;margin-right:0.1em;',
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

