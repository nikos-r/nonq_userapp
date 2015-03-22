Ext.define('nonq_userapp.controller.TicketController',{
	extend: 'Ext.app.Controller',
	config:{
		selectedBranchId: -1,
		isTicketOpen: false,
		isTicketSelected: false,
		ticketSelectedImage:'resources/icons/main_button_active.png',
		ticketUnselectedImage: 'resources/icons/main_button.png',
		refs:{
			mainButton: '#mainButtonId',
			nextAvailableTicket : '#nextAvailableTicketId',
			currentTicket: '#currentTicketId',
			timeRemaining: '#timeRemainingId',
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
				ticketClosed : 'ticketClosed',
				ticketOpen : 'ticketOpen',
				mainButtonTap : 'mainButtonTap'
//					,
//				backButtonTap : 'backButtonTap'
			},
			menuOption : {
				selectCustomer : 'selectCustomer'
			}
		}
	},
	
	selectCustomer: function(){
		this.selectedBranchId = -1;
		this.isTicketOpen = false;
		this.isTicketSelected = false;
	},
	
	selectBranch: function(branchId){
		this.selectedBranchId = branchId;
		
		var nextAvailableTicketContainer = this.getNextAvailableTicket();
		var currentTicketContainer = this.getCurrentTicket();
		var timeRemainingContainer = this.getTimeRemaining();
		
		nextAvailableTicketContainer.setHtml(100*branchId+10);
		currentTicketContainer.setHtml(100*branchId);
		timeRemainingContainer.setHtml(''+(10+branchId)+'\'');
	},
	
	mainButtonTap : function(){
		if(this.selectedBranchId > 0 && this.isTicketOpen){
			console.log("selected branch "+this.selectedBranchId);
			this.isTicketSelected = !this.isTicketSelected;
			this.updateSelection();
		}
	},
	
	ticketOpen: function(){
		this.isTicketOpen = true;
	},
	
	ticketClosed: function(){
		this.isTicketOpen = false;
		this.isTicketSelected = false;
		this.updateSelection();
	},
	
	updateSelection : function(){
		var mainButtonContainer = this.getMainButton();
		var nextAvailableTicketContainer = this.getNextAvailableTicket();
		
		if(this.isTicketSelected){
			mainButtonContainer.setSrc(this.getTicketSelectedImage());
			nextAvailableTicketContainer.addCls('fontColorOrange');
		}
		else{
			mainButtonContainer.setSrc(this.getTicketUnselectedImage());
			nextAvailableTicketContainer.removeCls('fontColorOrange');
		}
	}
	

})