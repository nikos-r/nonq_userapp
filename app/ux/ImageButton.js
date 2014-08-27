Ext.define('nonq_userapp.ux.ImageButton',{
	extend: 'Ext.Img',
	xtype:'imagebutton',
	config: {
		disabledImageSrc: null,
		activeImageSrc: null,
		pressedImageSrc: null,
		height: null,
		width: null,
		disabled: false
	},
	initialize: function(){
		this.callParent();
		this.setSrcOverride();
		
		this.setHeight(this.getHeight());
		this.setWidth(this.getWidth());
		
		this.element.on({ 
        	scope: this,
            touchstart : 'onPress',
            touchend   : 'onRelease'
        });
	},
	
	setActiveImageSrc: function(newSrc){
		this.activeImageSrc = newSrc;
		this.setSrcOverride();
	},

	setDisabledImageSrc: function(newSrc){
		this.disabledImageSrc = newSrc;
		this.setSrcOverride();
	},
	
	setDisabled: function(isDisabled){
		this.disabled = isDisabled;
		this.setSrcOverride();
	},

	//private method
	setSrcOverride: function(){
		if(this.getDisabled()){
			this.setSrc(this.getDisabledImageSrc());
		}
		else{
			this.setSrc(this.getActiveImageSrc());
		}
	},

	getActiveImageSrc: function(){
		return this.activeImageSrc;
	},

	getDisabledImageSrc: function(){
		return this.disabledImageSrc;
	},

	getDisabled: function(){
		return this.disabled;
	},

	onPress : function() {
		if(this.getDisabled()){
			return;
		}
		this.setSrc(this.getPressedImageSrc());
	},
	onRelease : function(){
		if(this.getDisabled()){
			return;
		}
		this.setSrc(this.getActiveImageSrc());
	}
});
	