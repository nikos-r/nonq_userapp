Ext.define('nonq_userapp.view.Test',{
	extend: 'Ext.Container',
//	requires: ['nonq_userapp.view.MenuRow'],
	xtype:'testview',
	config:{
      styleHtmlContent: true,
		scrollable: true,
	title: 'Welcome',
    iconCls: 'home',
		items: {
		  docked: 'top',
		  xtype: 'titlebar',
		  title: 'Welcome to Sencha Touch 2'
		},
		
		html: [
		  "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
		  "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
		  "and refresh to change what's rendered here."
		].join("")
	}


});