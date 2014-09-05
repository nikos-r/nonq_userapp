Ext.define('nonq_userapp.view.component.TicketDetails',{
	extend: 'Ext.Container',
	xtype:'ticketdetailscomponent',
	requires:['nonq_userapp.view.component.TransportOption','nonq_userapp.ux.ImageButton'],
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
				style:'font-size:5em'
			},
			{
				xtype:'container',
				html:'serving now'
			},
			{
				xtype:'container',
				html:'335',
				style:'font-size:5em'
			},
			{
				xtype:'container',
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
				style:'margin-top:1em; margin-bottom:1em',
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
				xtype:'container',
				layout: {
					type:'hbox',
					pack: 'center'
				},
				items:[
					{
//						xtype:'container',
//						html:'test'
						xtype:'imagebutton',
						toggleButton: true,
						style:'margin-left:auto; margin-right:auto;',
						disabledImageSrc:'resources/icons/heart_available.png',
						activeImageSrc:'resources/icons/heart_available.png',
						pressedImageSrc:'resources/icons/heart_selected.png',
//						imageSize:'3em',
						width:'3em',
						height:'3em',
						text:'test'
					}
				
				]
			}
			
			
			
		]
	}
});

