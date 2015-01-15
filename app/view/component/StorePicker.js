Ext.define('nonq_userapp.view.component.StorePicker',{
	extend: 'Ext.Picker',
	xtype: 'storepickercomponent',
	config:{
		toolbar:{
			hidden: true
		},
		height: '100%',
		cls: 'storePicker',
		doneButton: false,
		cancelButton: false,
		itemId: 'storePickerItemId',
		slots:[
			{
		       name: 'store',
		       title: 'Store',
		       data:[
			       {
			    	   text:'ΠΑΝΕΠΙΣΤΗΜΙΟΥ 31, ΑΘΗΝΑ',
			    	   value: 1			    	   
			       },
			       {
			    	   text:'ΗΡΟΔΟΤΟΥ 14, ΚΟΛΩΝΑΚΙ',
			    	   value: 2			    	   
			       },
			       {
			    	   text:'ΑΘΗΝΑΣ 61, ΑΘΗΝΑ',
			    	   value: 3			    	   
			       },
			       {
			    	   text:'ΜΙΧΑΛΑΚΟΠΟΥΛΟΥ 31-33, ΑΘΗΝΑ',
			    	   value: 4			    	   
			       },
			       {
			    	   text:'ΠΑΝΕΠΙΣΤΗΜΙΟΥ 31, ΑΘΗΝΑ',
			    	   value: 5			    	   
			       },
			       {
			    	   text:'ΗΡΟΔΟΤΟΥ 14, ΚΟΛΩΝΑΚΙ',
			    	   value: 6			    	   
			       },
			       {
			    	   text:'ΑΘΗΝΑΣ 61, ΑΘΗΝΑ',
			    	   value: 7			    	   
			       },
			       {
			    	   text:'ΜΙΧΑΛΑΚΟΠΟΥΛΟΥ 31-33, ΑΘΗΝΑ',
			    	   value: 8			    	   
			       }
		       ]
			}	       
		]
	},


	initialize: function() {
		this.callParent();
		
		this.addListener({
			pick : this.onPick,
			scope: this
		})
	},
	
	onPick: function(){
		var valueSelected = this.getValues()['store']; 
		var me = this;
		me.fireEvent('selectBranch', valueSelected);
	}
});