Ext.define('nonq_userapp.view.Header', {
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.HeaderInfo'],
	xtype: 'headerview',
	config:{
		layout: 'vbox',
		items:[
			{
				xtype:'container',
				cls: 'menuButton',
				flex:1
			},
			{
				xtype:'headerinfoview',
				flex:1
			}
			
		]
	}
});
