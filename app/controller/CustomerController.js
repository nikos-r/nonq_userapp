Ext.define('nonq_userapp.controller.CustomerController',{
	extend: 'Ext.app.Controller',
	config:{
		refs:{
			menuOption : 'menuoptioncomponent',
			viewWithFooter : 'viewwithfooter',
			headerInfoComponent: 'headerinfocomponent'
		},
		control:{
			menuOption : {
				selectCustomer : 'selectCustomer'
			}
		}
	},
	
	selectCustomer: function(customerId){
		console.log(customerId);
		
		var headerTitleContainer = this.getHeaderInfoComponent().down("#headerTitleItemId");
		var headerSubTitleContainer = this.getHeaderInfoComponent().down("#headerDetailsItemId");
		
		headerTitleContainer.setHtml('ΠΕΙΡΑΙΩΣ');
		headerSubTitleContainer.setHtml('First selection');

		this.getViewWithFooter().setDrawerEnabled('yes');

		this.getViewWithFooter().
				changeDrawerItem({xtype: 'storepickerwrappercomponent'});
	}
	
	
});