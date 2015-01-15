Ext.define('nonq_userapp.controller.HeaderController', {
	extend: 'Ext.app.Controller',
	config:{
		refs:{
			storePicker: 'storepickercomponent',
			menuOption : 'menuoptioncomponent',
			headerInfoComponent: 'headerinfocomponent'
		},
		control:{
			menuOption : {
				selectCustomer : 'selectCustomer'
			},
			storePicker:{
				selectBranch : 'selectBranch'
			}
		}
	},

	
	selectCustomer: function(customerId){
		console.log(customerId);
		
		var headerTitleContainer = this.getHeaderInfoComponent().down("#headerTitleItemId");
		var headerSubTitleContainer = this.getHeaderInfoComponent().down("#headerDetailsItemId");
		
		headerTitleContainer.setHtml('ΠΕΙΡΑΙΩΣ');
		headerSubTitleContainer.setHtml('First selection');
	},
	
	selectBranch: function(branchId){
//		console.log(branchId);
//		var header = this.headerInfoComponent();
//		var headerTitleContainer = header.down("#headerTitleItemId");
		var headerSubTitleContainer = this.getHeaderInfoComponent().down("#headerDetailsItemId");
		
//		headerTitleContainer.setHtml('ΠΕΙΡΑΙΩΣ');
		if(branchId % 2 == 0){
			headerSubTitleContainer.setHtml('Ζυγού 24<br/> 24680, ΑΘΗΝΑ');
		}
		else{
			headerSubTitleContainer.setHtml('Μονού 17<br/> 13579, ΑΘΗΝΑ');
		}
	}
});