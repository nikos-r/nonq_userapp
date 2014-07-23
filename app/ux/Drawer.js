Ext.define('nonq_userapp.ux.Drawer', {
  extend: 'Ext.Carousel',
  xtype: 'drawer',
  config:{
	backgroundItem: null,
	drawerItem: null,
	defaultActive: null,
	backgroundItemLength: null,
	openDrawerLength: 0,
	parentContainerItemId: null,
	indicator: false
  },
  beforeInitConfig: function(){
	  this.callParent(arguments);  
	  console.log('before ini');
  },
  
  beforeInitialize: function(){
    this.callParent(arguments);
    
console.log(this.getDirection());
	var itemLength;

	if(this.getDirection()==='horizontal'){
		itemLength = (1-this.getOpenDrawerLength()) * Ext.Viewport.getWindowWidth();
		console.log(this.getOpenDrawerLength() + ' '+ Ext.Viewport.getWindowWidth() + ' '+ itemLength);
	}
	if(this.getDirection()==='vertical'){
		itemLength = (1-this.getOpenDrawerLength()) * Ext.Viewport.getWindowHeight();
		console.log(this.getOpenDrawerLength() + ' '+ Ext.Viewport.getWindowHeight() + ' '+ itemLength);
	}
	
	this.setItemLength(itemLength);    

	
	this.setItems([this.getBackgroundItem(), this.getDrawerItem()]);
	if(this.getDefaultActive()==='drawer'){
	  this.setActiveItem(1);
	}
	
	
	
	
console.log('beforeinit '+this.getItemLength());
  },
  initialize:function(){
	  this.callParent(arguments);
	  console.log('init');
  },
  constructor: function(config){
	  this.callParent(arguments);
  },
  
  
  onDrag: function(e) {
      if (!this.isDragging) {
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
//    	itemOffset = (containerSize - itemLength) / 2;
    	// always start at 0
    	itemOffset=0;
    }

//console.log('containerSize : '+containerSize);
//    itemLength = (1-this.getOpenDrawerLength()) * containerSize;
//	
//	this.itemLength = Math.floor(itemLength);
//	
//console.log(this.getOpenDrawerLength()+ ' '+this.itemLength);

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
//console.log('i: '+i +' component: '+ component);      	
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
  }

});
