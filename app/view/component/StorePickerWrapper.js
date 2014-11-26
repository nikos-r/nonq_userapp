Ext.define('nonq_userapp.view.component.StorePickerWrapper',{
	extend:'Ext.Container',
	requires:['nonq_userapp.view.component.StorePicker'],
	xtype:'storepickerwrappercomponent',
	config:{
		layout:'vbox',
//		cls: 'storePickerMargin',
		items:[
			{
				xtype:'storepickercomponent'
			}
		]
	}
});