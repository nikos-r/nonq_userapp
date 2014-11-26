Ext.define('nonq_userapp.view.component.HeartLine',{
	extend: 'Ext.Container',
	xtype:'heartlinecomponent',
	requires:['nonq_userapp.ux.ImageButton'],
	config:{
		layout:{
			type:'hbox',
			pack:'center'
		},
		items:[
			{
				flex:1,
				xtype:'container',
				layout: 'vbox',
				items:[
			      {
			    	  cls:'backgroundGreen',
			    	  flex: 1
			      }, 
			      {
			    	  cls:'backgroundGrey',
			    	  flex: 1
			      }
				]
			},
			{
				cls:'backgroundGreen',
				xtype:'imagebutton',
				toggleButton: true,
//				style:'margin-left:auto; margin-right:auto;',
				disabledImageSrc:'resources/icons/heart_available.png',
				activeImageSrc:'resources/icons/heart_available.png',
				pressedImageSrc:'resources/icons/heart_selected.png',
				width:'3em',
				height:'3em',
				text:'test'
			},
			{
				flex:1,
				xtype:'container',
				layout: 'vbox',
				items:[
			      {
			    	  cls:'backgroundGreen',
			    	  height:'1.5em'
			    		 
			      }, 
			      {
			    	  cls:'backgroundGrey',
			    	  height:'1.5em'
			      }
				]
			}
		]
	}	
});