Ext.define('nonq_userapp.controller.FooterController',{
	extend: 'Ext.app.Controller',
	config:{
		drawerSwipeable: false,
		refs:{
			viewWithFooter : 'viewwithfooter',
			menuOption : 'menuoptioncomponent'
		},
		control:{
			viewWithFooter:{
				mainButtonSwipe : 'mainButtonFocusEnd',
				mainButtonTouchStart : 'mainButtonFocusStart',
				mainButtonTap : 'mainButtonFocusEnd',
				drawerDragEnd: 'mainButtonFocusEnd'
					
			},
			menuOption : {
				selectCustomer : 'selectCustomer'
			}
		}
		
	},


	selectCustomer : function(customerId){
		this.drawerSwipeable = true;
		console.log('drawer swipeable '+ this.drawerSwipeable);
		this.getViewWithFooter().attachMainButtonListeners("mainButtonId");
	},
		
	mainButtonFocusStart: function(){
		console.log('enable footer');
		if(this.drawerSwipeable){
			this.getViewWithFooter().setDrawerEnabled(true);
		}
	},

	
	mainButtonFocusEnd: function(){
		console.log('disable footer');
		if(this.drawerSwipeable){
			this.getViewWithFooter().setDrawerEnabled(false);
		}
	}
	
});