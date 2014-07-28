Ext.define('nonq_userapp.view.HeaderInfo',{
	extend: 'Ext.Container',
	xtype: 'headerinfoview',
	config:{
	  cls: 'headerInfo',
	  layout:{
	    type: 'vbox',
	    pack: 'center'	    
	  },
	  items:[
         {
        	 xtype:'container',
        	 cls: [ 
    	        'headerInfoText',
    	        'headerTitle'
        	 ],
        	 html: 'ΤΡΑΠΕΖΑ ΠΕΙΡΑΙΩΣ'
        		 
         },
         {
        	 xtype:'container',
        	 cls: [
    	       'headerInfoText',
    	       'headerDetails'
        	 ],
	         html: 'ΑΘΗΝΑΣ 61, ΑΘΗΝΑ<br/>15234, 210 6850440'	         
         }
	  ]
    }
});

	
