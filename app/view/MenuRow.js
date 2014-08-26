Ext.define('nonq_userapp.view.MenuRow',{
	extend: 'Ext.Container',
	requires:['nonq_userapp.view.component.MenuOption'],
	xtype: 'menurowview',
	config:{
		layout: 'hbox',
		items:[
			{
				xtype:'menuoptioncomponent',
				disabledImageSrc:'resources/icons/bank1_available.png',
				activeImageSrc:'resources/icons/bank1_available.png',
				pressedImageSrc:'resources/icons/bank1_selected.png',
				imageSize:'4em',
				flex: 1
			},
			{
				xtype:'menuoptioncomponent',
				disabledImageSrc:'resources/icons/bank1_available.png',
				activeImageSrc:'resources/icons/bank1_available.png',
				pressedImageSrc:'resources/icons/bank1_selected.png',
				imageSize:'4em',
				flex: 1
			},
			{
				xtype:'menuoptioncomponent',
				disabledImageSrc:'resources/icons/bank1_available.png',
				activeImageSrc:'resources/icons/bank1_available.png',
				pressedImageSrc:'resources/icons/bank1_selected.png',
				imageSize:'4em',
				flex: 1
			}
		]
	}
});