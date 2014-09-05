Ext.define('nonq_userapp.view.component.MenuRow',{
	extend: 'Ext.Container',
	requires:['nonq_userapp.view.component.MenuOption'],
	xtype: 'menurowcomponent',
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
				disabledImageSrc:'resources/icons/bank2_available.png',
				activeImageSrc:'resources/icons/bank2_available.png',
				pressedImageSrc:'resources/icons/bank2_selected.png',
				imageSize:'4em',
				disabled: true,
				flex: 1
			},
			{
				xtype:'menuoptioncomponent',
				disabledImageSrc:'resources/icons/bank2_available.png',
				activeImageSrc:'resources/icons/bank2_available.png',
				pressedImageSrc:'resources/icons/bank2_selected.png',
				imageSize:'4em',
				disabled: true,
				flex: 1
			}
		]
	}
});