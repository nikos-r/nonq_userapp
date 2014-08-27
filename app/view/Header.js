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
				height:'2em'
			},
			{
				xtype:'headerinfoview',
				height:'4em'
			}
			
		]
	}
});
