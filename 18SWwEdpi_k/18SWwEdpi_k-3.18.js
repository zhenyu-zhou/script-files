/*!CK:3286813962!*//*1426704167,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["KWtJ\/"]); }

__d("LayerSlowlyFadeOnShow",["LayerFadeOnShow"],function(a,b,c,d,e,f,g){var h=500,i=g.forDuration(h);e.exports=i;},null);
__d("PrivacyLiteNUXController",["AsyncRequest","CSS","Event","LayerSlowlyFadeOnShow","Locale","ModalMask","PageTransitions","Parent","PrivacyLiteFlyout","Toggler","$","copyProperties","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var u="_3oye",v="_1luv",w=[],x={bootload:function(){},init:function(z){if(!x.initialized)r(this,{dialog:z.dialog,sectionID:z.sectionID,subsectionID:z.subsectionID,initialized:true,tourStarted:false});if(z.showOnExpand){x._attachFlyoutListener();}else x._detachFlyoutListener();},startTourFromAnywhere:function(){x._startTour(false,true);},startTourFromMegaphone:function(){x._startTour(true,true);},startTourWithoutMask:function(){x._startTour(false,false);},_startTour:function(z,aa){if(x.tourStarted)return;x.tourStarted=true;x._detachFlyoutListener();new g('/ajax/privacy/privacy_lite/log_nux_imp').setData({from_megaphone:z}).send();aa&&l.show();h.conditionClass(x.dialog.getRoot(),u,z);if(!z&&aa)x._maskListener=i.listen(q('modalMaskOverlay'),'click',x._cleanup);p.setSticky(true);setTimeout(x._showFlyout);m.registerHandler(function(){x._cleanup();o.setFlyoutVisible(false);},10);},_showFlyout:function(){o.loadBodyFromMegaphone();o.setFlyoutVisible(true);x._initDialog();y('load',x._showTour);},_showTour:function(){o.showSection(x.sectionID);y('expanded',function(z,aa){if(aa===x.sectionID){var ba=x.subsectionID?x.subsectionID:aa,ca=t(ba);if(ca)x.dialog.setContext(ca).show();}});y(['collapse','hide'],x._cleanup);},_initDialog:function(){var z=x.dialog.getRoot(),aa=x.dialog.getContent();h.addClass(z,"_1luy");h.conditionClass(z,"_3qz8",k.isRTL());h.addClass(aa,"_1luz");x.dialog.enableBehavior(j);i.listen(z,'click',function(event){if(n.byClass(event.getTarget(),v))x._cleanup();});},_attachFlyoutListener:function(){if(!x.flyoutSubscription)if(o.isFlyoutVisible()){x.startTourFromAnywhere();}else x.flyoutSubscription=o.subscribe('show',x.startTourFromAnywhere);},_detachFlyoutListener:function(){if(x.flyoutSubscription){x.flyoutSubscription.unsubscribe();x.flyoutSubscription=null;}},_cleanup:function(){if(!x.tourStarted)return;x.tourStarted=false;p.setSticky(false);l.hide();x.dialog.hide();while(w.length)w.pop().unsubscribe();if(x._maskListener){x._maskListener.remove();x._maskListener=null;}}};function y(z,aa){w.push(o.subscribe(z,aa));}e.exports=x;},null);