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
        	 cls: 'headerInfoText',
        	 html: 'ΤΡΑΠΕΖΑ ΠΕΙΡΑΙΩΣ'
//        	 style: 'font-size: '
        
         },
         {
        	 xtype:'container',
        	 cls: 'headerInfoText',
	         html: 'ΑΘΗΝΑΣ 61, ΑΘΗΝΑ<br/>15234, 210 6850440'	         
         }
	  ]
    }
});

	
