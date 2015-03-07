Ext.define('nonq_userapp.view.component.FooterTop', {
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.component.Back', 'Ext.Img'],
	xtype: 'footertopcomponent',
	config:{
	    layout: 'vbox',
	    items:[
		    {
		    	xtype: 'container',		    	
				layout: 'hbox',
				height: '6em',
				items:[
					{
						xtype:'container',
						flex: 1,
						layout: 'vbox',
						cls: 'footer2ColorBackground',
						items:[
							{
							  xtype: 'container',
							  flex: 5
							},
							{
							  xtype: 'backcomponent',
							  flex: 1
							}
						],
						height: '6em'
					},
					{
						xtype:'container',
						cls: 'mainButtonBackground',
						items:[
							{
								xtype:'image',
								src: 'resources/icons/main_button.png',
								height:'100%',
								width:'100%',
								itemId: 'mainButtonId'
							}
						],
						height: '6em',
						flex:2	
					},
					{
						xtype:'container',
						flex: 1,
						height: '6em',
						cls: 'footer2ColorBackground'	
					}
				]
	
		    },
		    {
		      xtype: 'container',
		      height: '1em',
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
					}
				]
		    }
		    
	    
	    
	    ]
	}
});
