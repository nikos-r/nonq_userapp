Ext.define('nonq_userapp.controller.HiddenMenuController',{
	extend: 'Ext.app.Controller',
	config:{
		refs:{
			viewWithHeader : 'viewwithheader',
			viewWithFooter : 'viewwithfooter',
			menuScreen : 'hiddenmenuscreen',
			menuOption : 'menuoptioncomponent'
		},
		control:{
			menuOption : {
				selectCustomer : 'enableHiddenMenuDrawer'
			},
			viewWithFooter:{
				middleSwipe : 'enableHiddenMenuDrawer',
				middleTouchStart : 'disableHiddenMenuDrawer',
				middleTap : 'enableHiddenMenuDrawer',
				mainButtonSwipe : 'enableHiddenMenuDrawer',
				mainButtonTouchStart : 'disableHiddenMenuDrawer',
				mainButtonTap : 'enableHiddenMenuDrawer',
				drawerDragEnd: 'enableHiddenMenuDrawer'
			},
			viewWithHeader:{
				toggleHiddenMenu : 'toggleHiddenMenu'
			}
		
		}
		
	},

	
	enableHiddenMenuDrawer : function(){
		console.log('hidden menu enable');
		this.getMenuScreen().setDrawerEnabled(true);
	},
	
	disableHiddenMenuDrawer : function(){
		console.log('hidden menu disable');
		this.getMenuScreen().setDrawerEnabled(false);
	},
	
	toggleHiddenMenu : function(){
		var menuScreen = this.getMenuScreen() 
		var open = menuScreen.isDrawerOpen();
		
		if(open){
			menuScreen.next();
		}
		else{
			menuScreen.previous();
		}
	}

	
	
});