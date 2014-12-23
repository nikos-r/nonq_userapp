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
			    	   text:'Î Î‘Î�Î•Î Î™Î£Î¤Î—ÎœÎ™ÎŸÎ¥ 31, Î‘Î˜Î—Î�Î‘',
			    	   value: 1			    	   
			       },
			       {
			    	   text:'Î—Î¡ÎŸÎ”ÎŸÎ¤ÎŸÎ¥ 24, ÎšÎŸÎ›Î©Î�Î‘ÎšÎ™',
			    	   value: 2			    	   
			       },
			       {
			    	   text:'Î‘Î˜Î—Î�Î‘Î£ 61, Î‘Î˜Î—Î�Î‘',
			    	   value: 3			    	   
			       },
			       {
			    	   text:'ÎœÎ™Î§Î‘Î›Î‘ÎšÎŸÎ ÎŸÎ¥Î›ÎŸÎ¥ 31-33, Î‘Î˜Î—Î�Î‘',
			    	   value: 4			    	   
			       },
			       {
			    	   text:'Î Î‘Î�Î•Î Î™Î£Î¤Î—ÎœÎ™ÎŸÎ¥ 31, Î‘Î˜Î—Î�Î‘',
			    	   value: 5			    	   
			       },
			       {
			    	   text:'Î—Î¡ÎŸÎ”ÎŸÎ¤ÎŸÎ¥ 24, ÎšÎŸÎ›Î©Î�Î‘ÎšÎ™',
			    	   value: 6			    	   
			       },
			       {
			    	   text:'Î‘Î˜Î—Î�Î‘Î£ 61, Î‘Î˜Î—Î�Î‘',
			    	   value: 7			    	   
			       },
			       {
			    	   text:'ÎœÎ™Î§Î‘Î›Î‘ÎšÎŸÎ ÎŸÎ¥Î›ÎŸÎ¥ 31-33, Î‘Î˜Î—Î�Î‘',
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
		
		this.addListener({
			pick : this.onPick,
			scope: this
		})
	},
	
	onPick: function(){
		var valueSelected = this.getValues()['store']; 
//		console.log(this.getValues()['store']);
		var me = this;
		me.fireEvent('selectBranch', valueSelected);
	},
	
	onTap: function(){
		
//	  console.log('button tapped inside list ');
//	  console.log(this.getValue(true));
//	  console.log(this.getActiveItem());
//	  this.getActiveItem().setCls('testCls');
	}
});