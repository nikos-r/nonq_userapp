Ext.define('nonq_userapp.view.MainScreen',{
	extend:'nonq_userapp.ux.Drawer',
	xtype:'mainscreen',
	requires:['nonq_userapp.view.component.Footer'],
	config:{
	  direction: 'vertical',
	  drawerOpen: true,
	  openDrawerLength: 0.8, 
	  backgroundItem:{
//	    xtype:'footercomponent',
	    cls: 'backgroundGrey'
      },
      drawerItem:{
    	 html:'drawer'
      }
      

    }

	
});