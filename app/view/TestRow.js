Ext.define('nonq_userapp.view.TestRow',{
	extend: 'Ext.Container',
	requires: ['nonq_userapp.ux.ImageButton'],
	xtype: 'testrowview',
	config:{
		layout:'hbox',
		items:[
			{
				xtype:'imagebutton',
				disabledImageSrc:'resources/icons/bank1_available.png',
				activeImageSrc:'resources/icons/bank1_available.png',
				pressedImageSrc:'resources/icons/bank1_selected.png',
				height: '3em',
				width: '3em'
			}
			,
			{
				xtype:'imagebutton',
				disabledImageSrc:'resources/icons/bank1_available.png',
				activeImageSrc:'resources/icons/bank1_available.png',
				pressedImageSrc:'resources/icons/bank1_selected.png',
				flex: 1
			}
						,
			{
				xtype:'imagebutton',
				disabledImageSrc:'resources/icons/bank1_available.png',
				activeImageSrc:'resources/icons/bank1_available.png',
				pressedImageSrc:'resources/icons/bank1_selected.png',
				flex: 1
			}
		]
	}


});