Ext.define('nonq_userapp.controller.CustomerController',{
	extend: 'Ext.app.Controller',
	config:{
		refs:{
			menuOption : 'menuoptioncomponent',
			viewWithFooter : 'viewwithfooter'
		},
		
		control:{
			menuOption : {
				selectCustomer : 'selectCustomer'
			}
		}
	},
	
	selectCustomer: function(customerId){
		this.getViewWithFooter().changeDrawerItem({
			itemId : 'branchPaneId',
			xtype : 'storepickerwrappercomponent'
		});
		
		this.getViewWithFooter().attachMiddlePaneListeners("branchPaneId");
		
		this.getViewWithFooter().attachBackButtonListeners("backButtonId");
		
//		var backButton = this.getViewWithFooter().down("#backButtonId");
//		backButton.setDisabled(false);
	},

	
});