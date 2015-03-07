Ext.define('nonq_userapp.view.component.MenuOption',{
	extend: 'Ext.Container',
	requires:['nonq_userapp.ux.ImageButton'],
	xtype: 'menuoptioncomponent',
	config:{
		disabledImageSrc:null,
		activeImageSrc:null,
		pressedImageSrc:null,
		imageSize:null,
		disabled:null,
		customerId: null,
		items:[
			{
				xtype:'imagebutton',
				itemId:'menuOptionItemId',
				style:'margin-left:auto; margin-right:auto'
			}				
		]
,
		listeners:[
		           {
		        	   element: 'element',
		        	   event:'tap',
		        	   fn:'onMenuOptionTap'
		           }
        ]
	},
	
	
	initialize: function(){
		this.callParent();
		var menuItem = this.down('#menuOptionItemId');
		menuItem.setDisabledImageSrc(this.getDisabledImageSrc());
		menuItem.setActiveImageSrc(this.getActiveImageSrc());
		menuItem.setPressedImageSrc(this.getPressedImageSrc());
		menuItem.setHeight(this.getImageSize());
		menuItem.setWidth(this.getImageSize());
		menuItem.setDisabled(this.getDisabled());

	},
	
	
	onMenuOptionTap: function(){
		console.log('menu option tap');
		var me = this;
		if(this.getCustomerId()!=null){
	    	me.fireEvent('selectCustomer', this.getCustomerId());
		}
	}
});