/*!CK:654029271!*//*1420431348,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["LguNw"]); }

__d("BookmarkPopoverMenu.react",["React","PopoverMenu.react","ReactXUIMenu","MenuSeparator.react","Link.react","fbt","cx","Arbiter"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){"use strict";var o=i.Item,p=g.createClass({displayName:"BookmarkPopoverMenu",render:function(){var q=this._renderMenuContent();if(q.length===0)return null;var r=g.createElement(i,null,q),s="Edit",t=g.createElement(k,{href:"#",title:s,"aria-label":s,className:"_1wc5 _26tg accessible_elem"});return (g.createElement("div",{className:"buttonWrap"},g.createElement(h,{className:"uiSideNavEditButton",menu:r},t)));},_renderMenuContent:function(){var q=this.props.navItem,r=this.props.navSection,s=this.props.editmenu,t=q.props.model.pinned,u=r.props.id==='pinnedNav',v=[];if(s.favoriteOption){var w=t?s.favoriteOption.title.unfavorite:s.favoriteOption.title.favorite;v.push(g.createElement(o,{onclick:this._toggleFavorite,key:"menu_favorite"},w));}if(u&&s.rearrangeOption)v.push(g.createElement(o,{onclick:this._toggleEditMode,key:"menu_edit"},s.rearrangeOption.title));if(s.hideOption)v.push(this._renderAjaxMenuItem(s.hideOption,'menu_hide_option'));if(s.editOption)v.push(this._renderAjaxMenuItem(s.editOption,'menu_edit_option'));if(s.deleteOption){if(v.length!==0)v.push(g.createElement(j,{key:"menu_sep"}));v.push(this._renderAjaxMenuItem(s.deleteOption,'menu_delete_option'));}return v;},_renderAjaxMenuItem:function(q,r){return (g.createElement(o,{href:q.href,ajaxify:q.ajaxify,rel:q.rel,key:r},q.title));},_toggleFavorite:function(){var q=this.props.navItem;n.inform('LeftNavController/toggleFavorite',q.props.model.id);},_toggleEditMode:function(){n.inform('LeftNavDragController/toggleEditMode',{section:this.props.navSection});}});e.exports=p;},null);