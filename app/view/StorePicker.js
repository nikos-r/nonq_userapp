Ext.define('nonq_userapp.view.StorePicker',{
	extend: 'Ext.Picker',
	xtype: 'storepickerview',
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
			    	   text:'ΗΡΟΔΟΤΟΥ 24, ΚΟΛΩΝΑΚΙ',
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
			    	   text:'ΗΡΟΔΟΤΟΥ 24, ΚΟΛΩΝΑΚΙ',
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
//		,
//		listeners: [{
//		    delegate: '#storePickerItemId',
//		    event: 'tap',
//		    fn: 'onTap'
//		}]
	},


	initialize: function() {
		this.callParent();
		this.element.on({ 
	    	scope: this,
	        tap: 'onTap'
	    });
	},
	onTap: function(){
		
	  console.log('button tapped inside list ');
	  console.log(this);
	  console.log(this.getActiveItem());
//	  this.getActiveItem().setCls('testCls');
	}
});