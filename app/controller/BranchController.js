Ext.define('nonq_userapp.controller.BranchController',{
	extend: 'Ext.app.Controller',
	config:{
		refs:{
			backButton : '#backButtonId',
//			storePicker: 'storepickercomponent',
//			header : 'headerinfocomponent',
			viewWithFooter : 'viewwithfooter'
		},
		control:{
			viewWithFooter : {
				backButtonTap : 'goBack'
			}
		}
	},
	
	
	goBack : function(){
		if(this.getViewWithFooter().isDrawerOpen()){
			this.showCustomers();
		}
		else{
			this.getViewWithFooter().openDrawer();
		}
	},
	
	showCustomers : function(){
		this.getViewWithFooter().changeDrawerItem(
				{
					itemId : 'customersPaneId',
					xtype : 'menurowscomponent'
				}
		);
		
		this.getBackButton().setDisabled(true);
	}
	
});