Ext.define('nonq_userapp.view.ViewWithHeader',{
	extend: 'Ext.Container',
	requires:['nonq_userapp.view.ViewWithFooter',
	          'nonq_userapp.view.component.Header'],
	xtype:'viewwithheader',
	config:{
		layout: 'vbox',
		items:[
		       {
		    	   xtype:'headercomponent',
		    	   flex: 1
		       },	
		       {
		    	   xtype:'viewwithfooter',
		    	   flex: 4
		       }
        ]
	},
	
	onMenuButtonTap: function(){
		console.log('menu button (top left) tap');
		this.fireEvent('toggleHiddenMenu');
	},
	
	
	initialize: function(){
		this.callParent(arguments);
		
		var menuButton = this.down('#menuButtonId');
		
		menuButton.addListener({
			element: 'element',
			scope: this,
			tap: 'onMenuButtonTap'
		});
	}
	
	
});