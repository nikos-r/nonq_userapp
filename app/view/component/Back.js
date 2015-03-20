Ext.define('nonq_userapp.view.component.Back', {
	extend: 'Ext.Container',
	requires:['Ext.Button'],
	xtype: 'backcomponent',
	config:{
	  items:[
		  {
			  
			  xtype: 'button',
			  cls:'textOnlyButton internalTextAlignLeft',
			  text: 'back',
			  itemId: 'backButtonId',
			  disabled: true
		  }	  
	  ]
    }
});
	