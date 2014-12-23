Ext.define('nonq_userapp.view.MainView',{
	extend:'nonq_userapp.ux.Drawer',
	xtype:'mainview',
	requires:[
      'nonq_userapp.view.component.MenuRows',
      'nonq_userapp.view.FooterView',
      'nonq_userapp.view.component.StorePickerWrapper'
    ],
	config:{
	  direction: 'vertical',
	  drawerOpen: true,
	  openDrawerLength: 0.8, 
	  backgroundItem:{
		  xtype:'footerview'
      },
      drawerItem:{
    	  xtype: 'menurowscomponent',
//    	  xtype:'storepickerwrappercomponent',
//    	  xtype: 'container'
    	  itemId: 'middlePane'
      }
      

    }

	
});