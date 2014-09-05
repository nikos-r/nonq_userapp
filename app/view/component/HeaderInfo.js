Ext.define('nonq_userapp.view.component.HeaderInfo',{
	extend: 'Ext.Container',
	xtype: 'headerinfocomponent',
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
        	 html: 'Î¤Î¡Î‘Î Î•Î–Î‘ Î Î•Î™Î¡Î‘Î™Î©Î£'
        		 
         },
         {
        	 xtype:'container',
        	 cls: [
    	       'headerInfoText',
    	       'headerDetails'
        	 ],
	         html: 'Î‘Î˜Î—Î�Î‘Î£ 61, Î‘Î˜Î—Î�Î‘<br/>15234, 210 6850440'	         
         }
	  ]
    }
});

	
