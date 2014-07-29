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
			    	   value: 1			    	   
			       },
			       {
			    	   text:'ΜΙΧΑΛΑΚΟΠΟΥΛΟΥ 31-33, ΑΘΗΝΑ',
			    	   value: 1			    	   
			       },
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
			    	   value: 1			    	   
			       },
			       {
			    	   text:'ΜΙΧΑΛΑΚΟΠΟΥΛΟΥ 31-33, ΑΘΗΝΑ',
			    	   value: 1			    	   
			       }
		       ]
			}	       
		]
	}
});