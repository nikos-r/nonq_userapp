Ext.define('nonq_userapp.controller.HiddenMenuController',{
	extend: 'Ext.app.Controller',
	config:{
		refs:{
			viewWithHeader : 'viewwithheader',
			viewWithFooter : 'viewwithfooter',
			menuScreen : 'hiddenmenuscreen'
		},
		control:{
			viewWithFooter:{
				swipeCustomer : 'swipeCustomer',
				touchStartCustomers : 'touchStartCustomers',
				tapCustomers : 'tapCustomers'
			},
			viewWithHeader:{
				toggleHiddenMenu : 'toggleHiddenMenu'
			}
		
		}
		
	},

	
	tapCustomers: function(){
		console.log('controller listened to tap');
		this.getMenuScreen().setDrawerEnabled('yes');
	},

	
	swipeCustomer: function(){
		console.log('controller listened to customer swipe');
		this.getMenuScreen().setDrawerEnabled('yes');
	},
	
	touchStartCustomers : function(){
		console.log('controller listened touch start');
		this.getMenuScreen().setDrawerEnabled('no');
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