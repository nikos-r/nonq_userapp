Ext.define('nonq_userapp.controller.TicketController',{
	extend: 'Ext.app.Controller',
	config:{
		selectedBranchId: -1,
		refs:{
			menuOption : 'menuoptioncomponent',
			storePicker: 'storepickercomponent',
			viewWithFooter : 'viewwithfooter',
			ticketDetailsComponent : 'ticketdetailscomponent'
		},
		control:{
			storePicker: {
				selectBranch : 'selectBranch'
			},
			viewWithFooter:{
				ticketOpen : 'ticketOpen'
			},
			menuOption : {
				selectCustomer : 'selectCustomer'
			}
		}
	},
	
	selectCustomer: function(){
		this.selectedBranchId = -1;
	},
	
	selectBranch: function(branchId){
		this.selectedBranchId = branchId;
		
		var nextAvailableTicketContainer = this.getTicketDetailsComponent().down("#nextAvailableTicketId");
		var currentTicketContainer = this.getTicketDetailsComponent().down("#currentTicketId");
		var timeRemainingContainer = this.getTicketDetailsComponent().down("#timeRemainingId");
		
		nextAvailableTicketContainer.setHtml(100*branchId+10);
		currentTicketContainer.setHtml(100*branchId);
		timeRemainingContainer.setHtml(''+(10+branchId)+'\'');
	},
	
	ticketOpen: function(){
		if(this.selectedBranchId > 0){
			console.log("selected branch "+this.selectedBranchId);
		}
	}
})