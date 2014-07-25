Ext.define('nonq_userapp.view.Test', {
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.MenuScreen'],
	xtype: 'testview',
	config:{
		layout:{
        	type:'hbox'
		},
		items:[
		       {
	    		xtype:'container',
	    		html: 'left',
	    		style: 'background-color: grey;',
	    		flex:1
		       },
		       {
	    		xtype:'menuscreen',
	    		html: 'bottom',
	    		style: 'background-color: white;',
	    		drawerClosedCallback: 
	    			function(){
		    	   		console.log('drawer closed callback');
		       		},		     
	    		flex:3
		       }		       
		]
	}
});