Ext.define('nonq_userapp.ux.ImageButton',{
	extend: 'Ext.Img',
	xtype:'imagebutton',
	config: {
		disabledImageSrc: null,
		activeImageSrc: null,
		pressedImageSrc: null,
		disabledFontColor: null,
		activeFontColor:null,
		pressedFontColor:null,
		height: null,
		width: null,
		disabled: false,
		toggleButton: false
	},
	initialize: function(){
		this.callParent();
		this.setSrcOverride();
		
		this.setHeight(this.getHeight());
		this.setWidth(this.getWidth());
		
		this.available=true;

		this.element.on({ 
        	scope: this,
            touchstart : 'onPress',
            touchend   : 'onRelease'
        });
	},
	
	setHeight: function(args){
		this.callParent(arguments);
		if(args==null)
			return;
		this.setStyle(this.getStyle()+"line-height:"+args);
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

	makeActive: function(){
		this.setSrc(this.getActiveImageSrc());
		this.available = !this.available;
	},
	
	makeSelected: function(){
		this.setSrc(this.getPressedImageSrc());
		this.available = !this.available;
	},

	toggle: function(){
		if(this.available){
			this.makeSelected();
		}
		else{
			this.makeActive();
		}
	},

	onPress : function() {
		if(this.getDisabled()){
			return;
		}
		if(this.getToggleButton()){
			this.toggle();
		}
		else{
			this.makeSelected();
		}
	},
	onRelease : function(){
		if(this.getDisabled() || this.getToggleButton()){
			return;
		}
		this.makeActive();
	}
});
	