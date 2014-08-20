Ext.define('nonq_userapp.view.StorePickerWrapper',{
	extend:'Ext.Container',
	requires:['nonq_userapp.view.StorePicker'],
	xtype:'storepickerwrapperview',
	config:{
		layout:'vbox',
		cls: 'storePickerMargin',
		items:[
			{
				xtype:'storepickerview'
			}
		]
	}
});