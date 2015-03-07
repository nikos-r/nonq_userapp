Ext.define('nonq_userapp.view.LoginScreen',{
	extend: 'Ext.Container',
	xtype: 'loginscreen',
	requires:['Ext.Img', 'Ext.form.FieldSet', 'Ext.Button', 'Ext.util.DelayedTask'],
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
	        	        	cls:'loginScreenText centerAlign textOnlyButton',
	        	        	xtype: 'button',
	        	        	itemId: 'enterButton',
	        	            text: 'ENTER'
	        	        }
	        	 ]
	        		
	         }
	  ],
	  listeners: [{
	        delegate: '#enterButton',
	        event: 'tap',
	        fn: 'onEnterButtonTap'
	  }]
    },
    onEnterButtonTap: function(){
    	var me = this;
    	var task = Ext.create('Ext.util.DelayedTask', function () {
    	    me.fireEvent('signInCommand', me);
    	});
    	
    	task.delay(10);
    }

    
});