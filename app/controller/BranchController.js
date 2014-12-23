Ext.define('nonq_userapp.controller.BranchController',{
	extend: 'Ext.app.Controller',
	config:{
		refs:{
			storePicker: 'storepickercomponent',
			header : 'headerinfocomponent'
		},
		control:{
			storePicker:{
				selectBranch : 'selectBranch'
			}
		}
		
	},
	
	selectBranch: function(branchId){
//		console.log(branchId);
		var header = this.getHeader();
//		var headerTitleContainer = header.down("#headerTitleItemId");
		var headerSubTitleContainer = this.getHeader().down("#headerDetailsItemId");
		
//		headerTitleContainer.setHtml('ΠΕΙΡΑΙΩΣ');
		if(branchId % 2 == 0){
			headerSubTitleContainer.setHtml('Ζυγού 24<br/> 24680, ΑΘΗΝΑ');
		}
		else{
			headerSubTitleContainer.setHtml('Μονού 17<br/> 13579, ΑΘΗΝΑ');
		}
	}
	
});