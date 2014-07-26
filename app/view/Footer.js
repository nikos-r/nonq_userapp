Ext.define('nonq_userapp.view.Footer', {
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.Back'],
	xtype: 'footerview',
	config:{
	    layout: 'vbox',
	    items:[
		    {
		    	xtype: 'container',
		    	flex: 4,
				layout: 'hbox',
				items:[
					{
						xtype:'container',
						flex: 1,
						layout: 'vbox',
						cls: 'footer2ColorBackground',
						items:[
							{
							  xtype: 'container',
							  flex : 5
							},
							{
							  xtype: 'backview',
							  flex : 1
							}
						]
					},
					{
						xtype:'container',
						flex: 1,
						cls: 'mainButtonBackground',
						html: '<img src="resources/icons/main_button.png" style="display: block; margin-left: auto; margin-right: auto; max-height: 100%; max-width: 100%;"/>'
					},
					{
						xtype:'container',
						flex: 1,
						cls: 'footer2ColorBackground'	
					},
				]
	
		    },
		    {
		      xtype: 'container',
		      flex: 1,
		      layout: 'hbox',
		      items:[
					{
						xtype:'container',
						flex: 1,
						cls: 'backgroundGrey'
					},
					{
						xtype:'container',
						flex: 1,
						cls: 'backgroundGreen'
					},
					{
						xtype:'container',
						flex: 1,
						cls: 'backgroundGrey'	
					},
				]
		    }
		    
	    
	    
	    ]
	}
});
