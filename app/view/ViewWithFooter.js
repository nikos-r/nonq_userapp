Ext.define('nonq_userapp.view.ViewWithFooter',{
	extend:'nonq_userapp.ux.Drawer',
	xtype:'viewwithfooter',
	requires:[
      'nonq_userapp.view.component.MenuRows',
      'nonq_userapp.view.FooterView'
//      'nonq_userapp.view.component.StorePickerWrapper'
    ],
	config:{
	  direction: 'vertical',
	  drawerEnabled: false,
	  drawerOpen: true,
	  openDrawerLength: 0.6,
	  itemId: 'viewWithFooter',
	  backgroundItem:{
		  xtype:'footerview'
      },
      drawerItem:{
    	  xtype: 'menurowscomponent',
//    	  xtype:'storepickerwrappercomponent',
    	  itemId: 'customersPaneId'
      }            
    },

    initialize : function() {
		this.callParent(arguments);

		// this.attachMainButtonListeners("mainButtonId")
		//  	  
		this.attachMiddlePaneListeners("customersPaneId");
		this.on({
			element : 'element',
			scope : this,
			dragend : 'onDrawerDragEnd'
		});
	},
    
    attachMainButtonListeners : function(itemId){
    	var mainButton = this.down("#"+itemId);
    	
    	console.log(mainButton);
    	
    	mainButton.addListener({
    		element : 'element',
			scope : this,
			touchstart : 'onMainButtonTouchStart'
    	});

    	mainButton.addListener({
    		element : 'element',
			scope : this,
			touchstart : 'onMainButtonTouchEnd'
    	});
    	
		mainButton.addListener({
			element : 'element',
			scope : this,
			tap : 'onMainButtonTap'
		});

		mainButton.addListener({
			element : 'element',
			scope : this,
			swipe : 'onMainButtonSwipe'
		});
    },
    
    attachMiddlePaneListeners : function(itemId){
    	var middlePane = this.down("#"+itemId);

		middlePane.addListener({
			element : 'element',
			scope : this,
			touchstart : 'onMiddlePaneTouchStart'
		});

		middlePane.addListener({
			element : 'element',
			scope : this,
			tap : 'onMiddlePaneTap'
		});

		middlePane.addListener({
			element : 'element',
			scope : this,
			swipe : 'onMiddlePaneSwipe'
		});
    },
    
    onDrawerDragEnd: function(){
    	var me = this;
    	me.fireEvent('drawerDragEnd');
    },
    
    onMiddlePaneTouchStart: function() {
		var me = this;
		me.fireEvent('middleTouchStart');
    },
    
    onMiddlePaneTap: function() {
		var me = this;
		me.fireEvent('middleTap');
    },
    
    onMiddlePaneSwipe:function(){
		var me = this;
		me.fireEvent('middleSwipe');
    },
    
    onMainButtonTouchStart: function() {
    	console.log('main button touch');
		var me = this;
		me.fireEvent('mainButtonTouchStart');
    },
    
    
    onMainButtonTouchEnd: function() {
    	console.log('main button touch end');
		var me = this;
		me.fireEvent('mainButtonTouchEnd');
    },
    
    onMainButtonTap: function() {
		var me = this;
		me.fireEvent('mainButtonTap');
    },
    
    onMainButtonSwipe:function(){
		var me = this;
		me.fireEvent('mainButtonSwipe');
    }


});