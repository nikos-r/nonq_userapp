Ext.define('nonq_userapp.ux.ImageButton',{
	extend: 'Ext.Container',
	requires: ['Ext.Img'],
	xtype:'imagebutton',
	config: {
		disabledImageSrc: null,
		activeImageSrc: null,
		pressedImageSrc: null,
		height: null,
		width: null,
		disabled: false,
		imageItem: null,
		layout: 'fit',
		items:[
	       {	
			xtype:'image',
			itemId: 'imageButtonItemId',
			mode: 'element'
	       }
		]
	},
	initialize: function(){
		this.callParent();
		var imageItem = this.down('#imageButtonItemId');
		this.imageItem = imageItem;
		
		if(this.getDisabled()){
			imageItem.setSrc(this.getDisabledImageSrc());
		}
		else{
			imageItem.setSrc(this.getActiveImageSrc());
		}
		
//		imageItem.setHeight(this.getHeight());
//		imageItem.setWidth(this.getWidth());
//		

		
		
		this.element.on({ 
        	scope: this,
            touchstart : 'onPress',
            touchend   : 'onRelease'
        });
	},
	onPress : function() {
		console.log('pressed');
		console.log(this.imageItem);
		console.log('height :'+this.imageItem.getHeight());
		console.log(+this);
//		console.log('width :'+this.imageItem.getWidth())
		if(this.getDisabled()){
			return;
		}
		this.imageItem.setSrc(this.getPressedImageSrc());
	},
	onRelease : function(){
		if(this.getDisabled()){
			return;
		}
		this.imageItem.setSrc(this.getActiveImageSrc());
	}
	
	
});
	