Ext.define('nonq_userapp.view.ViewWithFooter',{
	extend:'nonq_userapp.ux.Drawer',
	xtype:'viewwithfooter',
	requires:[
      'nonq_userapp.view.component.MenuRows',
      'nonq_userapp.view.FooterView',
//      'nonq_userapp.view.component.StorePickerWrapper'
    ],
	config:{
	  direction: 'vertical',
//	  enabled: true,
	  drawerOpen: true,
	  openDrawerLength: 0.6,
	  itemId: 'viewWithFooter',
	  backgroundItem:{
		  xtype:'footerview'
      },
      drawerItem:{
    	  xtype: 'menurowscomponent',
//    	  xtype:'storepickerwrappercomponent',
    	  id: 'middlePane'
    	  
      },
      listeners:{
    	  touchstart:{
    		  fn: 'onMiddlePaneTouchStart',
    		  element: 'element'
    	  },
    	  tap:{
    		  fn: 'onMiddlePaneTap',
    		  element: 'element'
    	  }
    	  ,
    	  swipe:{
    		  fn: 'onMiddlePaneSwipe',
    		  element: 'element'
    	  }
      }
    },


    
    onMiddlePaneTouchStart: function() {
		var me = this;
		me.fireEvent('touchStartCustomers');
    },
    
    onMiddlePaneTap: function() {
		var me = this;
		me.fireEvent('tapCustomers');
    },
    
    onMiddlePaneSwipe:function(){
		var me = this;
		me.fireEvent('swipeCustomer');
    }

});