Ext.define('nonq_userapp.controller.HeaderController', {
	extend: 'Ext.app.Controller',
	config:{
		refs:{
			headerTitle : '#headerTitleItemId',
			headerSubTitle : '#headerDetailsItemId',
			storePicker: 'storepickercomponent',
			menuOption : 'menuoptioncomponent',
//			headerInfoComponent: 'headerinfocomponent',
			viewWithFooter : 'viewwithfooter'
		},
		control:{
			menuOption : {
				selectCustomer : 'selectCustomer'
			},
			storePicker:{
				selectBranch : 'selectBranch'
			},
			viewWithFooter : {
				backButtonTap : 'backButtonTap'
			}
			
			
		}
	},

	
	backButtonTap : function(){
		if(this.getViewWithFooter().isDrawerOpen()){
			this.getHeaderTitle().setHtml('where do you want to go?');
			this.getHeaderSubTitle().setHtml('');
		}
		
	},
	
	selectCustomer: function(customerId){
		this.getHeaderTitle().setHtml('ΠΕΙΡΑΙΩΣ');
		this.getHeaderSubTitle().setHtml('First selection');
	},
	
	selectBranch: function(branchId){
//		console.log(branchId);
//		var header = this.headerInfoComponent();
//		var headerTitleContainer = header.down("#headerTitleItemId");
//		var headerSubTitleContainer = this.getHeaderInfoComponent().down("#headerDetailsItemId");
		
//		headerTitleContainer.setHtml('ΠΕΙΡΑΙΩΣ');
		if(branchId % 2 == 0){
			this.getHeaderSubTitle().setHtml('Ζυγού 24<br/> 24680, ΑΘΗΝΑ');
		}
		else{
			this.getHeaderSubTitle().setHtml('Μονού 17<br/> 13579, ΑΘΗΝΑ');
		}
	}
});