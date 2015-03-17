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
		console.log("going back");

		this.getViewWithFooter().refreshDrawerItem(
//				function(){
//				this.getViewWithFooter().changeDrawerItem(
				{
					itemId : 'customersPaneId',
					xtype : 'menurowscomponent'
				}
//				)
//		}
		);
	}
	
});