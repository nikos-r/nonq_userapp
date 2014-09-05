Ext.define('nonq_userapp.view.component.Header', {
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.component.HeaderInfo'],
	xtype: 'headercomponent',
	config:{
		layout: 'vbox',
		items:[
			{
				xtype:'container',
				cls: 'menuButton',
				height:'2em'
			},
			{
				xtype:'headerinfocomponent',
				height:'4em'
			}
			
		]
	}
});
