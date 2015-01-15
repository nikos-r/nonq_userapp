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
//        	 html: 'Î¤Î¡Î‘Î Î•Î–Î‘ Î Î•Î™Î¡Î‘Î™Î©Î£',
        	 html: 'where do you want to go?',
        	 itemId: 'headerTitleItemId'
         },
         {
        	 xtype:'container',
        	 itemId: 'headerDetailsItemId',
        	 cls: [
    	       'headerInfoText',
    	       'headerDetails'
        	 ]
//	         html: 'Î‘Î˜Î—Î�Î‘Î£ 61, Î‘Î˜Î—Î�Î‘<br/>15234, 210 6850440'	         
         }
	  ],
	  //TODO remove
	  //test how to catch tap events on container
	  listeners: [{
//	        delegate: '#headerTitleItemId',
		  	element:'element',
	        event: 'tap',
	        fn: 'onHeaderTitleTap'
	  }]
    },
    onHeaderTitleTap: function(){
    	var headerTitleItem = this.down("#headerTitleItemId");
    	console.log(headerTitleItem.getHtml());
    }

});

	
