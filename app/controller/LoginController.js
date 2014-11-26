Ext.define('nonq_userapp.controller.LoginController', {
	extend: 'Ext.app.Controller',
	config:{
		refs: {
			loginScreen: 'loginscreen',
			menuScreen: 'menuscreen'
		},
		control:{
			loginScreen : {
				signInCommand : 'signInCommand'
			} 
		}
	},
	
	signInCommand : function(view){
		menuScreen = this.getMenuScreen();
		Ext.Viewport.animateActiveItem(menuScreen, { type: 'slide', direction: 'left' });
	}
});
