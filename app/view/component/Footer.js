Ext.define('nonq_userapp.view.component.Footer', {
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.component.Back', 'Ext.Img'],
	xtype: 'footercomponent',
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
							  xtype: 'backcomponent',
							  flex : 1
							}
						]
					},
					{
						xtype:'container',
						cls: 'mainButtonBackground',
						items:[
							{
								xtype:'image',
								src: 'resources/icons/main_button.png',
								height:'100%',
								width:'100%'
							}
						],
						flex:2	
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
						flex: 2,
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
