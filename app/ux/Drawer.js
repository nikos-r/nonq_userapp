Ext.define('nonq_userapp.ux.Drawer', {
  extend: 'Ext.Carousel',
  xtype: 'drawer',
  config:{
	backgroundItem: null,
	drawerItem: null, //drawer is the item that is either fully open or fully closed.
	drawerClosedCallback: null,
	drawerOpenedCallback: null,
//	animationOpenedCallback: null,
	drawerOpen: false,
	openDrawerLength: 1, // float from 0 -> 1, as a proportion from the window width/height
	indicator: false,
	drawerEnabled: true
  },
  
  
  isDrawerOpen: function(){
	  if(this.getActiveIndex() == 0)
		  return true;
	  
	  return false;
  },
  
  beforeInitConfig: function(){
	  this.callParent(arguments);  
  },
  
  beforeInitialize: function(){
    this.callParent(arguments);
    
	var drawerLength;
	
	if(this.getDirection()==='horizontal'){
		drawerLength = this.getOpenDrawerLength() * Ext.Viewport.getWindowWidth();
	}
	if(this.getDirection()==='vertical'){
		drawerLength = this.getOpenDrawerLength() * Ext.Viewport.getWindowHeight();
	}
	
	this.setItemLength(drawerLength);    

	var drawerIndex;
	var backgroundIndex;
	if(this.getDirection()==='horizontal'){
		//drawer is on the left
		this.setItems([this.getDrawerItem(), this.getBackgroundItem()]);
		drawerIndex = 0;
		backgroundIndex = 1;
	}
	if(this.getDirection()==='vertical'){
		//drawer is on the top
		this.setItems([this.getDrawerItem(), this.getBackgroundItem()]);
		drawerIndex = 0;
		backgroundIndex = 1;
	}
	
	if(this.getDrawerOpen()){
		this.setActiveItem(drawerIndex);
	}
	else{
		this.setActiveItem(backgroundIndex);
	}
	
	this.drawerClosedCallback = this.getDrawerClosedCallback();
	this.drawerOpenedCallback = this.getDrawerOpenedCallback();
  },
  
  initialize:function(){
	  this.callParent(arguments);
  },
  constructor: function(config){
	  this.callParent(arguments);
  },
  
  
  onDrag: function(e) {
      if (!this.isDragging) {
          return;
      }
      
      if(!this.getDrawerEnabled()){
    	  return;
      }
      
      var startOffset = this.dragStartOffset,
          direction = this.getDirection(),
          delta = direction === 'horizontal' ? e.deltaX : e.deltaY,
          lastOffset = this.offset,
          flickStartTime = this.flickStartTime,
          dragDirection = this.dragDirection,
          now = Ext.Date.now(),
          currentActiveIndex = this.getActiveIndex(),
          maxIndex = this.getMaxItemIndex(),
          lastDragDirection = dragDirection,
          offset;

      if ((currentActiveIndex === 0 && delta > 0) || (currentActiveIndex === maxIndex && delta < 0)) {
          delta *= 0.5;
      }

      offset = startOffset + delta;

      if (offset > lastOffset) {
          dragDirection = 1;
      }
      else if (offset < lastOffset) {
          dragDirection = -1;
      }

      if (dragDirection !== lastDragDirection || (now - flickStartTime) > 300) {
          this.flickStartOffset = lastOffset;
          this.flickStartTime = now;
      }

      this.dragDirection = dragDirection;

      // cannot drag further 
      if(currentActiveIndex == 0 ){
    	  if(offset < -this.itemLength)
    	    return;
    	  if(offset > 0)
    		return;  
      }
      if(currentActiveIndex == 1 ){
    	  if(offset < 0)
    	    return;
    	  if(offset > this.itemLength)
    	    return;
      }
      /////

      this.setOffset(offset);
  },
  
  
  onDragStart: function(e){
      var direction = this.getDirection(),
      absDeltaX = e.absDeltaX,
      absDeltaY = e.absDeltaY,
      directionLock = this.getDirectionLock();
      
      // disable swiping for first and last card
      // leave to catch early dragstart, even if it's better caught drag
      var deltaY = e.deltaY,
          deltaX = e.deltaX,
          currentActiveIndex=this.getActiveIndex();
      
      if(direction==='vertical'){    
	      if(e.deltaY < 0 && currentActiveIndex == 1){
	          this.isDragging = false;
	          return;
	      }
	      if(e.deltaY > 0 && currentActiveIndex == 0){
	          this.isDragging = false;
	          return;
	      }
      }
      if(direction==='horizontal'){    
	      if(deltaX < 0 && currentActiveIndex == 1){
	          this.isDragging = false;
	          return;
	      }
	      if(deltaX > 0 && currentActiveIndex == 0){
	          this.isDragging = false;
	          return;
	      }
      }
      ////
      
	  this.isDragging = true;
	
	  if (directionLock) {
	      if ((direction === 'horizontal' && absDeltaX > absDeltaY)
	          || (direction === 'vertical' && absDeltaY > absDeltaX)) {
	          e.stopPropagation();
	      }
	      else {
	          this.isDragging = false;
	          return;
	      }
	  }
	
	  this.getTranslatable().stopAnimation();
	
	  this.dragStartOffset = this.offset;
	  this.dragDirection = 0;
	
	  this.beforeActionActiveIndex = this.getActiveIndex();
  },
  
  
  refreshSizing: function() {
    var element = this.element,
        itemLength = this.getItemLength(),
        translatableItemLength = {
            x: 0,
            y: 0
        },
        itemOffset, containerSize;

    if (this.getDirection() === 'horizontal') {
        containerSize = element.getWidth();
    }
    else {
        containerSize = element.getHeight();
    }

    this.hiddenTranslation = -containerSize;

    if (itemLength === null) {
        itemLength = containerSize;
        itemOffset = 0;
    }
    else {
    	itemOffset=0;
    }

    this.itemLength = itemLength;
    this.itemOffset = itemOffset;
    translatableItemLength[this.currentAxis] = itemLength;
    this.getTranslatable().setItemLength(translatableItemLength);
  },
  
  
  refreshCarouselItems: function() {
      var items = this.carouselItems,
          i, ln, item;

          
      for (i = 0,ln = items.length; i < ln; i++) {
      	item = items[i];
      	var component = item.getComponent();
      	// drawer should have full height
      	var direction = this.getDirection();
      	if(i==1 && direction==='vertical'){
      	  item.setHeight(this.element.getHeight());
      	}
      	if(i==1 && direction==='horizontal'){
      	  item.setWidth(this.element.getWidth());
      	}
      	/////
      	
      	item.getTranslatable().refresh();
      }

      this.refreshInactiveCarouselItems();
  },
  
  
  
  changeDrawerItem: function(drawerItem){
	  this.setItems([drawerItem, this.getBackgroundItem()]);
	  this.refreshCarouselItems();
  },
  
  
  refreshDrawerItem: function(newDrawerItem){
	  if(this.isDrawerOpen()){
		  this.changeDrawerItem(newDrawerItem);
		  return;
	  }
	  
	  var me = this;
	  var oldDrawerOpenedCallback = this.getDrawerOpenedCallback();
	  this.drawerOpenedCallback = function(){
		  me.changeDrawerItem(newDrawerItem);
		  me.drawerOpenedCallback = oldDrawerOpenedCallback;
	  }
	  this.beforeActionActiveIndex = this.getActiveIndex();
	  this.previous();
  },
  
  
  onAnimationEnd: function() {
	  this.callParent(arguments);  
	  
	  var afterActionActiveIndex = this.getActiveIndex();
	  
	  if(afterActionActiveIndex != this.beforeActionActiveIndex){
		  if(this.getDirection()==='vertical'){
			  if(afterActionActiveIndex===0){
				  this.onDrawerOpened();
			  }
			  else{
				  this.onDrawerClosed();
			  }
		  }
		  if(this.getDirection()==='horizontal'){
			  if(afterActionActiveIndex===0){
				  this.onDrawerOpened();
			  }
			  else{
				  this.onDrawerClosed();
			  }
		  }
	  }
  },
  
  onDrawerClosed: function(){
	  var drawerClosedCallback = this.drawerClosedCallback;
	  if(drawerClosedCallback != null){
		  drawerClosedCallback.call();
	  }
  },
  
  onDrawerOpened: function(){
	  var drawerOpenedCallback = this.drawerOpenedCallback;
	  if(drawerOpenedCallback != null){
		  drawerOpenedCallback.call();
	  }
  }

});
