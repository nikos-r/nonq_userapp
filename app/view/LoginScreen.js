Ext.define('nonq_userapp.view.LoginScreen',{
	extend: 'Ext.Container',
	xtype: 'loginscreen',
	requires:['Ext.Img', 'Ext.form.FieldSet'],
	config:{
	  cls: 'backgroundGreen',
	  layout: 'vbox',
	  items:[
	         {
	        	 xtype:'container',
	        	 flex:2,
	        	 layout: {
	        	   type: 'vbox',
	        	   pack:'center'
	             },
	        	 items:[
	        	        {
	        	        	xtype:'image',	   	        	 
	        	        	src: 'resources/icons/logo_long.png',
	        	        	height:'5em'
	        	        },
	        	        {
	        	        	html:'No more queues, no more drama',
	        	        	cls:'loginScreenText centerAlign'	        	        		
	        	        }
	        	 ]
	         },
	         {
	        	 xtype: 'container',
	        	 flex:1,
	        	 items:[
	        	        {
	        	        	xtype: 'fieldset',
		        	        width: '50%',
		        	        cls: 'centerAlign',
							style: 'margin-bottom: 1em',
	        	        	items:[
	        	        	       {
										xtype: 'textfield',
										placeHolder: 'email'
	        	        	       }
	        	        	]
	        	        },
	        	        {
	        	        	xtype: 'fieldset',
	        	        	width: '50%',
	        	        	cls: 'centerAlign',
	        	        	style: 'margin-bottom: 1em;',
	        	        	items:[
	        	        	       {
	        	        	    	   xtype: 'textfield',
	        	        	    	   placeHolder: 'password'
	        	        	       }
	        	        	]
	        	        },
	        	        {
	        	        	html: 'ENTER',
	        	        	cls:'loginScreenText centerAlign',
	        	        	itemId: 'enterButton',
	        	      	    listeners:[
	        	      	              {
				     	            	 element: 'element',
				     	            	 event: 'tap',
				     	            	 fn: 'onEnterButtonTap'
	        	      	              }
	        	      	    
	      	               ]
	        	        }
	        	 ]
	        		
	         }
	  ]
    },
    onEnterButtonTap: function(){
    	console.log('test');
    }

    
});