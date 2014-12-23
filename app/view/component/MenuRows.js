Ext.define('nonq_userapp.view.component.MenuRows',{
	extend: 'Ext.Container',
	requires: ['nonq_userapp.view.component.MenuRow'],
	xtype:'menurowscomponent',
	config:{
      	layout:'vbox',
		scrollable: true,
		items:[
			{
				xtype:'menurowcomponent',
				height:'5em'
			},
			{
				xtype:'menurowcomponent',
				height:'5em'
			},
			{
				xtype:'menurowcomponent',
				height:'5em'
			},
			{
				xtype:'menurowcomponent',
				height:'5em'
			}
		]
//,
//		listeners:[
//		           {
//		        	   element: 'element',
//		        	   event: 'swipe',
//		        	   fn: 'onMenuRowsSwipe'
//		           },
//   		           {
//		        	   element: 'element',
//		        	   event: 'touchstart',
//		        	   fn: 'onMenuRowsTouchStart'
//		           },
//		           {
//		        	   element: 'element',
//		        	   event: 'touchend',
//		        	   fn: 'onMenuRowsTouchEnd'
//		           }
//        ]
	}

//,
//	
//	onMenuRowsTapStart: function(){
//		console.log('tapStartCustomers');
//		var me = this;
//		me.fireEvent('tapStartCustomers');
//	},
//	
//	onMenuRowsTapEnd: function(){
//		console.log('tapEndCustomers');
//		var me = this;
//		me.fireEvent('tapEndCustomers');
//	},
//	
//	onMenuRowsTouchStart: function(){
//		console.log('touchStartCustomers');
//		var me = this;
//		me.fireEvent('touchStartCustomers');
//	},
//	
//	onMenuRowsTouchEnd: function(){
//		console.log('touchEndCustomers');
//		var me = this;
//		me.fireEvent('touchEndCustomers');
//	},
//	
//	onMenuRowsSwipe: function(){
//		console.log('menu rows swipe');
//		var me = this;
//		me.fireEvent('swipeCustomer');
//	},
//	
//	onMenuRowsTap: function(){
//		console.log('menu rows tap');
//	}

});