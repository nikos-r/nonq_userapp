Ext.define('nonq_userapp.controller.BranchController',{
	extend: 'Ext.app.Controller',
	config:{
		refs:{
			storePicker: 'storepickercomponent',
			header : 'headerinfocomponent',
			viewWithFooter : 'viewwithfooter'
		},
		control:{
			viewWithFooter : {
				backButtonTap : 'backButtonTap'
			}
		}
	},
	
	
	backButtonTap : function(){
		this.getViewWithFooter().refreshDrawerItem(
				{
					itemId : 'customersPaneId',
					xtype : 'menurowscomponent'
				}
		);
		
		var backButton = this.getViewWithFooter().down("#backButtonId");
		backButton.setDisabled(true);
	}
	
});