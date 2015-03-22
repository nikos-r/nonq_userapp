Ext.define('nonq_userapp.controller.LoginController', {
	extend: 'Ext.app.Controller',
	config:{
		refs: {
			loginScreen: 'loginscreen',
			hiddenMenuScreen: 'hiddenmenuscreen'
		},
		control:{
			loginScreen : {
				signInCommand : 'signInCommand'
			} 
		}
	},
	
	signInCommand : function(view){
		var menuScreen = this.getHiddenMenuScreen();
		Ext.Viewport.animateActiveItem(menuScreen, { type: 'slide', direction: 'left'  });
	}
});
