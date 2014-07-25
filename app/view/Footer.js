Ext.define('nonq_userapp.view.Footer', {
	extend: 'Ext.Container',
	xtype: 'footerview',
	config:{
		layout: 'hbox',
		items:[
			{
				xtype:'container',
				layout: 'vbox',
				flex: 2,
				items:[
					{
						xtype:'container',
						style: 'background-color: white;',
						flex: 1	
					},
					{
						xtype:'container',
						style: 'background-color: #5e8c82;',
						flex: 1	
					}
				]
			},
			{
				xtype:'container',
				layout: 'vbox',
				flex: 1,
//				html: 'middle',
//				style: 'background-color: #5e8c82;'	
				html: '<img src="resources/icons/footerbutton.png" style="max-height: 100%; max-width: 100%;"/>'
			},
			{
				xtype:'container',
				layout: 'vbox',
				flex: 2,
				items:[
					{
						style: 'background-color: white;',
						xtype: 'container',
						flex: 1
					},
					{
						style: 'background-color: #5e8c82;',
						xtype: 'container',
						flex: 1
					}
				]
			},
		]
	}
});
