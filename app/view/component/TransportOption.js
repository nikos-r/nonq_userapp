Ext.define('nonq_userapp.view.component.TransportOption',{
	extend: 'Ext.Container',
	requires:['nonq_userapp.ux.ImageButton'],
	xtype: 'transportoptioncomponent',
	config:{
		disabledImageSrc:null,
		activeImageSrc:null,
		pressedImageSrc:null,
		imageSize:null,
		disabled:null,
		text: null,
		items:[
			{
				xtype:'imagebutton',
				itemId:'transportOptionItemId',
				toggleButton: true,
				style:'margin-left:auto; margin-right:auto;'
			}				
		]
	},

	initialize: function(){
		this.callParent();
		var menuItem = this.down('#transportOptionItemId');
		menuItem.setDisabledImageSrc(this.getDisabledImageSrc());
		menuItem.setActiveImageSrc(this.getActiveImageSrc());
		menuItem.setPressedImageSrc(this.getPressedImageSrc());
		menuItem.setHeight(this.getImageSize());
		menuItem.setWidth(this.getImageSize());
		menuItem.setDisabled(this.getDisabled());
		menuItem.setHtml(this.getText());
	},
	
	doDeselect: function(){
		var menuItem = this.down('#transportOptionItemId');
		menuItem.makeActive();
	},

	doSelect: function(){
		var menuItem = this.down('#transportOptionItemId');
		menuItem.makeSelected();
	}
});