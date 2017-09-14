!function(){var e=webpackJsonp([101],{"1ZHu":function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r("igBp"),a=babelHelpers.interopRequireDefault(n);t.default=a.default.generateActions("appendedBusinessTravelEmployee","bootstrapStore","closedCheckEmailModal","openedCheckEmailModal","removedBusinessTravelEmployee","setShowNewEntryModal","updatedBusinessTravelEmployees","updatedDeleteError","updatedDeletePending","updatedDeleteSuccess","updatedNewEntryValue","updatedResendError","updatedResendPending","updatedResendSuccess","updatedSaveError","updatedSavePending","updatedSaveSuccess"),e.exports=t.default},B9Rr:function(e,t,r){function n(e){return/(^|\.)airbnb\.([a-z]{2,3})(\.[a-z]{2,3})?$/.test(e)}function a(e){return/(^|\.)(google|bing|yahoo|yandex|naver|daum|baidu|haosou|duckduckgo)\.([a-z]{2,3})(\.[a-z]{2,3})?$/.test(e)}function l(e,t){var r=e||"",l=t||"",s=o.default.parse(r),i=o.default.parse(l),f=u.default.parse(s.query),c=n(i.hostname);if(c||!l)switch(f.s){case"footer":return d.EnrollmentTrackingKeys.SOURCE_AIRBNB_FOOTER;case"hdr":return d.EnrollmentTrackingKeys.SOURCE_AIRBNB_HEADER;case"itin":return d.EnrollmentTrackingKeys.SOURCE_AIRBNB_ITINERARY;case"nav":return d.EnrollmentTrackingKeys.SOURCE_AIRBNB_NAVIGATION;case"p1":return d.EnrollmentTrackingKeys.SOURCE_AIRBNB_P1;case"p5":return d.EnrollmentTrackingKeys.SOURCE_AIRBNB_P5;case"rv2":return d.EnrollmentTrackingKeys.SOURCE_AIRBNB_RECEIPT;case"dalrt":return d.EnrollmentTrackingKeys.SOURCE_AIRBNB_DASHBOARD_ALERT;case"trps":return d.EnrollmentTrackingKeys.SOURCE_AIRBNB_TRIPS;case"flyout":return d.EnrollmentTrackingKeys.SOURCE_AIRBNB_MOWEB_FLYOUT_MENU}return f.euid?d.EnrollmentTrackingKeys.SOURCE_AIRBNB_EMAIL:f.ref||f.af?d.EnrollmentTrackingKeys.SOURCE_CAMPAIGN:"linked_in_v2"===f.service_confirmed?d.EnrollmentTrackingKeys.SOURCE_LINKEDIN:"amex"===f.service_confirmed?d.EnrollmentTrackingKeys.SOURCE_AMEX:c?/^\/?$/.test(i.pathname)?d.EnrollmentTrackingKeys.SOURCE_AIRBNB_P1:/^\/reservation\/requested(\/|$)/.test(i.pathname)?d.EnrollmentTrackingKeys.SOURCE_AIRBNB_P5:/^\/help(\/|$)/.test(i.pathname)?d.EnrollmentTrackingKeys.SOURCE_AIRBNB_HELP:d.EnrollmentTrackingKeys.SOURCE_AIRBNB_OTHER:a(i.hostname)?d.EnrollmentTrackingKeys.SOURCE_SEARCH_ENGINE:l?d.EnrollmentTrackingKeys.SOURCE_OTHER:d.EnrollmentTrackingKeys.SOURCE_UNKNOWN}Object.defineProperty(t,"__esModule",{value:!0}),t.isProbablyAirbnbDomain=n,t.isSearchEngineDomain=a,t.classify=l;var s=r("ymdt"),u=babelHelpers.interopRequireDefault(s),i=r("5s95"),o=babelHelpers.interopRequireDefault(i),d=r("mARP")},EOsf:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r("Jmof"),a=babelHelpers.interopRequireDefault(n),l=r("j83B"),s=r("kUb7"),u=babelHelpers.interopRequireDefault(s),i=r("RLdB"),o=r("2tbS"),d=babelHelpers.interopRequireDefault(o),f=r("rKmV"),c=babelHelpers.interopRequireDefault(f),p=r("K5ge"),_=babelHelpers.interopRequireDefault(p),b=r("dgo3"),E=babelHelpers.interopRequireDefault(b),m=r("ueQ2"),v=babelHelpers.interopRequireDefault(m),y=r("ZW1N"),g=babelHelpers.interopRequireDefault(y),h=r("a0zb"),R=babelHelpers.interopRequireDefault(h),S=r("WaP3"),k=babelHelpers.interopRequireDefault(S),T=r("MfS2"),O=babelHelpers.interopRequireDefault(T),N=r("eiHi"),I=babelHelpers.interopRequireDefault(N),A=r("uW6E"),P=babelHelpers.interopRequireDefault(A),C=r("1ZHu"),B=babelHelpers.interopRequireDefault(C),H=Object.assign({onClose:l.Types.func.isRequired,showBTRUpsell:l.Types.bool,visible:l.Types.bool.isRequired},i.withStylesPropTypes),D={showBTRUpsell:!1},L=function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentWillMount",value:function(){function e(){B.default.bootstrapStore({businessTravelEmployees:[],trackingDefaults:{page:"p2"}})}return e}()},{key:"renderAddWorkEmailSection",value:function(){function e(){return a.default.createElement("div",null,a.default.createElement(E.default,{hero:!0}),a.default.createElement(P.default,null))}return e}()},{key:"render",value:function(){function e(){var e=this.props,t=e.onClose,r=e.visible,n=e.showBTRUpsell,l=e.styles;return a.default.createElement(d.default,{name:"BusinessTravelReadyModal",onClose:t,visible:r},a.default.createElement(c.default,null,a.default.createElement(v.default,{heading:a.default.createElement(k.default,{bottom:3},a.default.createElement(g.default,{level:3},a.default.createElement(u.default,{k:"business_travel.business_travel_ready.modal.learn_more.header"}))),noLoading:!0},a.default.createElement("div",(0,i.css)(l.pullLeft),a.default.createElement(O.default,{decorative:!0,color:I.default.core.foggy})),a.default.createElement(k.default,{bottom:2,left:3},a.default.createElement(R.default,{bold:!0,small:!0},a.default.createElement(u.default,{k:"business_travel.business_travel_ready.modal.p1.header"})),a.default.createElement(R.default,{muted:!0,small:!0},a.default.createElement(u.default,{k:"business_travel.business_travel_ready.modal.p1.subheader"}))),a.default.createElement("div",(0,i.css)(l.pullLeft),a.default.createElement(O.default,{decorative:!0,color:I.default.core.foggy})),a.default.createElement(k.default,{bottom:2,left:3},a.default.createElement(R.default,{bold:!0,small:!0},a.default.createElement(u.default,{k:"business_travel.business_travel_ready.modal.p2.header"})),a.default.createElement(R.default,{muted:!0,small:!0},a.default.createElement(u.default,{k:"business_travel.business_travel_ready.modal.p2.subheader"}))),a.default.createElement("div",(0,i.css)(l.pullLeft),a.default.createElement(O.default,{decorative:!0,color:I.default.core.foggy})),a.default.createElement(k.default,{bottom:2,left:3},a.default.createElement(R.default,{bold:!0,small:!0},a.default.createElement(u.default,{k:"business_travel.business_travel_ready.modal.p3.header"})),a.default.createElement(R.default,{muted:!0,small:!0},a.default.createElement(u.default,{k:"business_travel.business_travel_ready.modal.p3.subheader"}))),a.default.createElement("div",(0,i.css)(l.pullLeft),a.default.createElement(O.default,{decorative:!0,color:I.default.core.foggy})),a.default.createElement(k.default,{bottom:2,left:3},a.default.createElement(R.default,{bold:!0,small:!0},a.default.createElement(u.default,{k:"business_travel.business_travel_ready.modal.p4.header"})),a.default.createElement(R.default,{muted:!0,small:!0},a.default.createElement(u.default,{k:"business_travel.business_travel_ready.modal.p4.subheader"}))),a.default.createElement("div",(0,i.css)(l.pullLeft),a.default.createElement(O.default,{decorative:!0,color:I.default.core.foggy})),a.default.createElement(k.default,{bottom:2,left:3},a.default.createElement(R.default,{bold:!0,small:!0},a.default.createElement(u.default,{k:"business_travel.business_travel_ready.modal.p5.header"})),a.default.createElement(R.default,{muted:!0,small:!0},a.default.createElement(u.default,{k:"business_travel.business_travel_ready.modal.p5.subheader"}))),a.default.createElement("div",(0,i.css)(l.pullLeft),a.default.createElement(O.default,{decorative:!0,color:I.default.core.foggy})),a.default.createElement(k.default,{bottom:2,left:3},a.default.createElement(R.default,{bold:!0,small:!0},a.default.createElement(u.default,{k:"business_travel.business_travel_ready.modal.p6.header"})),a.default.createElement(R.default,{muted:!0,small:!0},a.default.createElement(u.default,{k:"business_travel.business_travel_ready.modal.p6.subheader"}))),n&&this.renderAddWorkEmailSection(),a.default.createElement(E.default,{spacing:4}),a.default.createElement("div",(0,i.css)(l.textCenter),a.default.createElement(u.default,{html:!0,k:"business_travel.business_travel_ready.modal.questions",help_center:a.default.createElement(_.default,{href:"/help/article/1185/what-makes-a-listing-business-travel-ready?topic=371",openInNewWindow:!0}),terms:a.default.createElement(_.default,{href:"/terms/business-travel-ready",openInNewWindow:!0})})))))}return e}()}]),t}(a.default.Component);t.default=(0,i.withStyles)(function(){return{pullLeft:{float:"left"},textCenter:{textAlign:"center"}}})(L),L.propTypes=H,L.defaultProps=D,e.exports=t.default},GH7g:function(e,t,r){function n(){return u.default.get("/user_emails/request_new_business_verification_email")}Object.defineProperty(t,"__esModule",{value:!0}),t.BusinessTravelEmployees=t.BusinessEntities=void 0,t.resendEmail=n;var a=r("lQnl"),l=babelHelpers.interopRequireDefault(a),s=r("t7ak"),u=babelHelpers.interopRequireDefault(s);t.BusinessEntities={updateInfo:function(){function e(e,t){var r=t.companyName,n=t.companySize,a=t.legalName,s=t.phone,u=t.referral;return Promise.resolve(l.default.put("/v2/business_entities/"+String(e),{data:{company_size:n,display_name:r,legal_name:a,phone:s,referral:u}},{_format:"for_enrollment"}))}return e}()},t.BusinessTravelEmployees={findAllByUserId:function(){function e(e){var t=e.userId;return Promise.resolve(l.default.get("/v2/business_travel_employees",{data:{user_id:t}},{_format:"for_enrollment"}))}return e}(),create:function(){function e(e){var t=e.admin,r=e.businessEntityId,n=e.email,a=e.userId,s=e.signupPage,u=e.signupFlow,i=e.signupSource;return Promise.resolve(l.default.post("/v2/business_travel_employees",{data:{admin:t,business_entity_id:r,email:n.toLowerCase(),signup_flow:u,signup_page:s,signup_source:i,user_id:a}},{_format:"for_enrollment"}))}return e}(),updateThirdPartyPermission:function(){function e(e,t){var r=t.thirdPartyBookable;return Promise.resolve(l.default.put("/v2/business_travel_employees/"+String(e),{data:{third_party_bookable:r}},{_format:"for_enrollment"}))}return e}(),updateAdmin:function(){function e(e,t){var r=t.admin;return Promise.resolve(l.default.put("/v2/business_travel_employees/"+String(e),{data:{admin:r}},{_format:"for_enrollment"}))}return e}(),delete:function(){function e(e){return Promise.resolve(l.default.deleteRequest("/v2/business_travel_employees/"+String(e),{},{_format:"for_enrollment"}))}return e}()}},GeWh:function(e,t,r){function n(){return new i}Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleLandingEnrollTrackingEventBuilder=void 0,t.default=n;var a=r("WYOE"),l=babelHelpers.interopRequireDefault(a),s=r("txus"),u=babelHelpers.interopRequireDefault(s),i=t.SimpleLandingEnrollTrackingEventBuilder=function(e){function t(){babelHelpers.classCallCheck(this,t);var e=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.eventName="biz_travel_signup",e.set({jsapp:"business_travel.landing_enroll"}),e.set(u.default.getState().trackingDefaults),e}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"beforeSend",value:function(){function e(){babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"beforeSend",this).call(this),this.applyAirDogFields("business_travel.jsapp.landing_enroll.p2_promo",["page","section","operation","error_class"])}return e}()}]),t}(l.default)},KLDN:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("KLyI"),l=babelHelpers.interopRequireDefault(a),s=r("B9Rr"),u=r("mARP"),i=(n={},babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_UNKNOWN,"unknown"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_SEARCH_ENGINE,"search_engine"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_CAMPAIGN,"campaign"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_OTHER,"other"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_AIRBNB_OTHER,"airbnb_other"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_AIRBNB_EMAIL,"airbnb_email"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_AIRBNB_FOOTER,"airbnb_footer"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_AIRBNB_HELP,"airbnb_help"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_AIRBNB_P1,"airbnb_p1"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_AIRBNB_P5,"airbnb_p5"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_AIRBNB_DASHBOARD_ALERT,"airbnb_dashboard_alert"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_AIRBNB_NAVIGATION,"airbnb_nav"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_AIRBNB_RECEIPT,"airbnb_receipt_v2"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_AIRBNB_ITINERARY,"airbnb_itinerary"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_AIRBNB_TRIPS,"airbnb_trips"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_LINKEDIN,"airbnb_linkedin_modal"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_AMEX,"airbnb_american_express_modal"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_AIRBNB_HEADER,"airbnb_header"),babelHelpers.defineProperty(n,u.EnrollmentTrackingKeys.SOURCE_AIRBNB_MOWEB_FLYOUT_MENU,"airbnb_moweb_flyout_menu"),n),o=function(){function e(t){babelHelpers.classCallCheck(this,e),"undefined"!=typeof document&&document.location&&(this.pageSourceKey=(0,s.classify)(document.location.href,document.referrer),this.cookieName=t)}return babelHelpers.createClass(e,[{key:"getCachedSessionSourceKey",value:function(){function e(){if(null==this.pageSourceKey)return null;if(this.pageSourceKey===u.EnrollmentTrackingKeys.SOURCE_LINKEDIN||this.pageSourceKey===u.EnrollmentTrackingKeys.SOURCE_AMEX)return this.pageSourceKey;if(null==this.sessionSourceKey)if(this.cookieName){var e=parseInt((0,l.default)(this.cookieName),10),t=isNaN(e)?this.pageSourceKey:e;if(t!==e){var r=(/\.airbnb\..+$/.exec(document.location.hostname)||[])[0];(0,l.default)(this.cookieName,t,{domain:r})}this.sessionSourceKey=t}else this.sessionSourceKey=this.pageSourceKey;return this.sessionSourceKey}return e}()},{key:"getPageSourceKey",value:function(){function e(){return this.pageSourceKey}return e}()},{key:"getPageSourceString",value:function(){function e(){return i[this.getPageSourceKey()]||""}return e}()},{key:"getSessionSourceKey",value:function(){function e(){return this.getCachedSessionSourceKey()}return e}()},{key:"getSessionSourceString",value:function(){function e(){return i[this.getSessionSourceKey()]||""}return e}()},{key:"getTrafficSourceStringInfo",value:function(){function e(){return{page_traffic_source:this.getPageSourceString(),session_traffic_source:this.getSessionSourceString()}}return e}()}]),e}();t.default=o,e.exports=t.default},WYOE:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r("j9xI"),a=babelHelpers.interopRequireDefault(n),l=r("vAi4"),s=function(){function e(){babelHelpers.classCallCheck(this,e),this.eventName=null,this.eventData={}}return babelHelpers.createClass(e,[{key:"willDo",value:function(){function e(){for(var e=this,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(){return e.did.apply(e,r)}}return e}()},{key:"did",value:function(){function e(e,t,r){var n=t,a=r;n instanceof Object&&!a&&(a=n,n=null),e&&(this.eventData.operation=e),n&&(this.eventData.section=n),this.set(a),this.send()}return e}()},{key:"queue",value:function(){function e(){return this.shouldQueue=!0,this}return e}()},{key:"set",value:function(){function e(e){return e&&Object.assign(this.eventData,e),this}return e}()},{key:"beforeSend",value:function(){function e(){}return e}()},{key:"afterSend",value:function(){function e(){}return e}()},{key:"send",value:function(){function e(){var e=this;setTimeout(function(){e.beforeSend();try{var t={event_name:e.eventName,event_data:e.eventData};e.shouldQueue?a.default.queueEvent(t):a.default.logEvent(t)}catch(e){}e.afterSend()},0)}return e}()},{key:"applyAirDogFields",value:function(){function e(e,t){var r=(0,l.hashToDatadogTags)(this.eventData,t||[]);this.set({datadog_key:e,datadog_tags:r})}return e}()}]),e}();t.default=s,e.exports=t.default},glfS:function(e,t,r){function n(e){var t={flow:k.EnrollmentTrackingKeys.FLOW_LANDING_ENROLL,source:(0,_.getTrafficSourceDetector)().getSessionSourceKey()};if((0,p.default)(e,"page")){var r={p2:k.EnrollmentTrackingKeys.PAGE_P2,traveler_landing:k.EnrollmentTrackingKeys.PAGE_TRAVELER_LANDING,travel_manager_landing:k.EnrollmentTrackingKeys.PAGE_TRAVEL_MANAGER_LANDING};t.page=r[e.page]}return t}function a(){return R.BusinessTravelEmployees.findAllByUserId({userId:f.default.current().id}).then(function(e){var t=e.business_travel_employees;return y.default.updatedBusinessTravelEmployees(t),t})}function l(){m.default.getState().businessTravelEmployees[0].verified?y.default.closedCheckEmailModal():y.default.openedCheckEmailModal()}function s(){var e=f.default.current().id,t=m.default.getState(),r=t.newEntryValue,s=t.referralInfo,u=t.trackingDefaults,i=r,o=new h.default(i,e,{newTracker:b.default,referralInfo:s,signupTrackingInfo:n(u)});return y.default.updatedSaveSuccess(!1),y.default.updatedSavePending(!0),y.default.updatedSaveError(null),o.execute().then(function(e){y.default.updatedSaveSuccess(!0),(0,b.default)().did("sent","procedure__new_entry"),y.default.appendedBusinessTravelEmployee(e),l(),y.default.updatedNewEntryValue(""),y.default.setShowNewEntryModal(!1)},function(e){(0,b.default)().did("error","procedure__new_entry",{error_class:e.type,error_displayed_message:e.message,error_source:e.detail}),y.default.updatedSaveError(e.message)}).then(function(){y.default.updatedSavePending(!1),a()})}function u(){return y.default.updatedResendSuccess(!1),y.default.updatedResendPending(!0),y.default.updatedResendError(null),(0,R.resendEmail)().then(function(){y.default.updatedResendSuccess(!0),(0,b.default)().did("sent","request__resend")},function(e){var t={};y.default.updatedResendError((0,S.interpretError)(e,null,t)),(0,b.default)().did("error","request__resend",t)}).then(function(){y.default.updatedResendPending(!1)})}function i(){y.default.updatedResendError(),y.default.updatedResendSuccess(!1),y.default.updatedDeleteError(),y.default.updatedDeleteSuccess(!1)}function o(e){var t=m.default.getState().businessTravelEmployees[0].id;y.default.updatedDeletePending(!0),y.default.updatedDeleteError(null),R.BusinessTravelEmployees.delete(t).then(function(){y.default.closedCheckEmailModal(),y.default.updatedNewEntryValue(e),y.default.removedBusinessTravelEmployee(t),(0,b.default)().did("sent","request_delete",{recordId:t}),i(),s()},function(e){var r={recordId:t};y.default.updatedDeleteError((0,S.interpretError)(e,null,r)),(0,b.default)().did("error","request_delete",r)}).then(function(){y.default.updatedDeletePending(!1)})}Object.defineProperty(t,"__esModule",{value:!0}),t.refreshBusinessTravelEmployees=a,t.toggleCheckEmailModalIfNeeded=l,t.submitNewEntry=s,t.resendEmail=u,t.resetCheckEmailModalStates=i,t.updateEmail=o;var d=r("oIG2"),f=babelHelpers.interopRequireDefault(d),c=r("8DW4"),p=babelHelpers.interopRequireDefault(c),_=r("h6y+"),b=babelHelpers.interopRequireDefault(_),E=r("txus"),m=babelHelpers.interopRequireDefault(E),v=r("1ZHu"),y=babelHelpers.interopRequireDefault(v),g=r("rucv"),h=babelHelpers.interopRequireDefault(g),R=r("GH7g"),S=r("vAi4"),k=r("mARP")},"h6y+":function(e,t,r){function n(){return s.default.setIfMissingThenGet("BusinessTravelLandingEnrollTrafficSourceDetector",function(){return new c.default("_btsrc0")})}function a(){return new p}Object.defineProperty(t,"__esModule",{value:!0}),t.LandingEnrollTrackingEventBuilder=void 0,t.getTrafficSourceDetector=n,t.default=a;var l=r("675R"),s=babelHelpers.interopRequireDefault(l),u=r("WYOE"),i=babelHelpers.interopRequireDefault(u),o=r("txus"),d=babelHelpers.interopRequireDefault(o),f=r("KLDN"),c=babelHelpers.interopRequireDefault(f),p=t.LandingEnrollTrackingEventBuilder=function(e){function t(){babelHelpers.classCallCheck(this,t);var e=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.eventName="biz_travel_signup",e.set({jsapp:"business_travel.landing_enroll"}),e.set(d.default.getState().trackingDefaults),e.appendTrafficSourceInfo(),e}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"appendTrafficSourceInfo",value:function(){function e(){var e=n().getTrafficSourceStringInfo();this.set(e)}return e}()},{key:"beforeSend",value:function(){function e(){babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"beforeSend",this).call(this),this.applyAirDogFields("business_travel.jsapp.landing_enroll",["page","section","operation","error_class","session_traffic_source"])}return e}()}]),t}(i.default)},mARP:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.LinkHrefs={B1ShowNext:"/work?show_next=1",BookingPermissions:"/users/booking_permissions",EnrollCompanyTerms:"/terms/business_travel",P1:"/s/homes",PrivacyPolicy:"/terms/privacy_policy",TravelManagerDashboard:"/business/dashboard",TravelManagerDashboardSetup:"/business/dashboard/setup",UserEdit:"/users/edit#business-travel",VerificationEmailHelpLinkHref:"/help/contact_us?about=3&tier1=14&tier2=3705"},t.EnrollmentTrackingKeys={FLOW_UNKNOWN:0,FLOW_TRAVELER_ENROLL:1,FLOW_TRAVEL_MANAGER_ENROLL:2,FLOW_UNI_ENROLL:3,FLOW_QUICK_ENROLL:4,FLOW_AUTO_ENROLL:5,FLOW_LANDING_ENROLL:6,FLOW_CONCUR:7,FLOW_MOBILE_MODAL:8,FLOW_BT_REFERRAL:9,FLOW_SCIM:10,FLOW_ADMIN_PAGE:11,PAGE_UNKNOWN:0,PAGE_TRAVELER_LANDING:1,PAGE_TRAVEL_MANAGER_LANDING:2,PAGE_EDIT_PROFILE:3,PAGE_P5:4,IOS_EDIT_PROFILE:5,ANDROID_EDIT_PROFILE:6,PAGE_REFERRAL_INVITATION:7,PAGE_EDIT_VERIFICATION:8,PAGE_P2:9,PAGE_LISTING_STATUS:10,SOURCE_UNKNOWN:0,SOURCE_AIRBNB_EMAIL:1,SOURCE_AIRBNB_FOOTER:2,SOURCE_AIRBNB_HELP:3,SOURCE_AIRBNB_OTHER:4,SOURCE_AIRBNB_P1:5,SOURCE_AIRBNB_P5:6,SOURCE_CAMPAIGN:7,SOURCE_OTHER:8,SOURCE_SEARCH_ENGINE:9,SOURCE_AIRBNB_DASHBOARD_ALERT:10,SOURCE_AIRBNB_NAVIGATION:11,SOURCE_AIRBNB_RECEIPT:12,SOURCE_AIRBNB_ITINERARY:13,SOURCE_AIRBNB_TRIPS:14,SOURCE_LINKEDIN:15,SOURCE_AMEX:16,SOURCE_AIRBNB_HEADER:17,SOURCE_AIRBNB_MOWEB_FLYOUT_MENU:18}},rucv:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r("vAi4"),a=babelHelpers.interopRequireDefault(n),l=r("GH7g"),s=function(){function e(t,r,n){var a=n.ts,l=n.sig,s=n.newTracker,u=n.referralInfo,i=n.signupTrackingInfo,o=void 0===i?{}:i;babelHelpers.classCallCheck(this,e),this.email=t,this.userId=r,this.newTracker=s,this.referralInfo=u,this.signupTrackingInfo=o,this.ts=a,this.sig=l,this.executed=!1}return babelHelpers.createClass(e,[{key:"execute",value:function(){function e(){var e=this;if(this.executed)throw new Error("This operator can only execute once");this.executed=!0;var t={email:this.email,userId:this.userId,signupFlow:this.signupTrackingInfo.flow,signupPage:this.signupTrackingInfo.page,signupSource:this.signupTrackingInfo.source};return this.ts&&this.sig&&Object.assign(t,{ts:this.ts,sig:this.sig}),l.BusinessTravelEmployees.create(t).then(function(t){return e.newTracker&&e.newTracker().did("sent","request__join_company"),t.business_travel_employee},function(e){var t={},r=void 0,n=a.default.interpretError(e,function(e){if(e.error_details){var t=e.error_details.split(".");r=t[t.length-1]}});return Promise.reject({type:r,message:n,detail:t})})}return e}()}]),e}();t.default=s,e.exports=t.default},txus:function(e,t,r){function n(){return{businessTravelEmployees:[],deleteError:null,deletePending:!1,deleteSuccess:!1,newEntryValue:"",referralInfo:null,resendError:null,resendPending:!1,resendSuccess:!1,saveError:null,savePending:!1,saveSuccess:!1,searchParam:"",showCheckEmailModal:!1,showNewEntryModal:!1,trackingDefaults:{}}}function a(e){return Object.assign(n(),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.LandingEnrollStore=void 0,t.getInitialState=n,t.onDeserialize=a;var l=r("igBp"),s=babelHelpers.interopRequireDefault(l),u=r("1ZHu"),i=babelHelpers.interopRequireDefault(u),o=t.LandingEnrollStore=function(){function e(){babelHelpers.classCallCheck(this,e),this.bindActions(i.default),this.state=n()}return babelHelpers.createClass(e,[{key:"appendedBusinessTravelEmployee",value:function(){function e(e){var t=this.state.businessTravelEmployees;this.setState({businessTravelEmployees:[].concat(t,[e])})}return e}()},{key:"bootstrapStore",value:function(){function e(e){this.setState(e)}return e}()},{key:"openedCheckEmailModal",value:function(){function e(){this.setState({showCheckEmailModal:!0})}return e}()},{key:"closedCheckEmailModal",value:function(){function e(){this.setState({showCheckEmailModal:!1})}return e}()},{key:"setShowNewEntryModal",value:function(){function e(e){this.setState({showNewEntryModal:e})}return e}()},{key:"removedBusinessTravelEmployee",value:function(){function e(e){var t=this.state.businessTravelEmployees.filter(function(t){return t.id!==e});this.setState({businessTravelEmployees:t})}return e}()},{key:"updatedBusinessTravelEmployees",value:function(){function e(e){this.setState({businessTravelEmployees:e})}return e}()},{key:"updatedDeleteError",value:function(){function e(e){this.setState({deleteError:e})}return e}()},{key:"updatedDeletePending",value:function(){function e(e){this.setState({deletePending:e})}return e}()},{key:"updatedDeleteSuccess",value:function(){function e(e){this.setState({deleteSuccess:e})}return e}()},{key:"updatedNewEntryValue",value:function(){function e(e){this.setState({newEntryValue:e.toLowerCase().trim()})}return e}()},{key:"updatedResendError",value:function(){function e(e){this.setState({resendError:e})}return e}()},{key:"updatedResendPending",value:function(){function e(e){this.setState({resendPending:e})}return e}()},{key:"updatedResendSuccess",value:function(){function e(e){this.setState({resendSuccess:e})}return e}()},{key:"updatedSaveError",value:function(){function e(e){this.setState({saveError:e})}return e}()},{key:"updatedSavePending",value:function(){function e(e){this.setState({savePending:e})}return e}()},{key:"updatedSaveSuccess",value:function(){function e(e){this.setState({saveSuccess:e})}return e}()}]),e}();o.config={onDeserialize:a},t.default=s.default.createStore(o,"LandingEnrollStore")},uW6E:function(e,t,r){function n(e,t){return(0,H.default)().did(e,t)}function a(e){A.default.updatedNewEntryValue(e)}function l(){n("blur","new_entry")}function s(){n("focus","new_entry")}Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleNewEntry=t.storeConfig=void 0;var u=r("Jmof"),i=babelHelpers.interopRequireDefault(u),o=r("j83B"),d=r("sDdk"),f=babelHelpers.interopRequireDefault(d),c=r("M/w6"),p=babelHelpers.interopRequireDefault(c),_=r("kUb7"),b=babelHelpers.interopRequireDefault(_),E=r("uBRT"),m=r("fFT3"),v=babelHelpers.interopRequireDefault(m),y=r("xOsd"),g=babelHelpers.interopRequireDefault(y),h=r("WaP3"),R=babelHelpers.interopRequireDefault(h),S=r("ueQ2"),k=babelHelpers.interopRequireDefault(S),T=r("a0zb"),O=babelHelpers.interopRequireDefault(T),N=r("glfS"),I=r("1ZHu"),A=babelHelpers.interopRequireDefault(I),P=r("txus"),C=babelHelpers.interopRequireDefault(P),B=r("GeWh"),H=babelHelpers.interopRequireDefault(B),D={newEntryValue:o.Types.string,saveError:o.Types.string,savePending:o.Types.bool,saveSuccess:o.Types.bool},L={newEntryValue:"",saveError:null,savePending:!1,saveSuccess:!1},U=t.storeConfig={getPropsFromStores:function(){function e(){return(0,E.pick)(C.default.getState(),"newEntryValue","saveError","savePending","saveSuccess")}return e}(),getStores:function(){function e(){return[C.default]}return e}()},w=t.SimpleNewEntry=function(e){function t(e){babelHelpers.classCallCheck(this,t);var r=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={email:""},r.onSubmit=r.onSubmit.bind(r),r}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentDidMount",value:function(){function e(){n("impression","new_entry")}return e}()},{key:"onSubmit",value:function(){function e(e){e&&e.preventDefault(),this.props.savePending||(n("submit","new_entry"),this.setState({email:this.props.newEntryValue}),(0,N.submitNewEntry)())}return e}()},{key:"renderForm",value:function(){function e(){return i.default.createElement(k.default,{heading:i.default.createElement(R.default,{bottom:3},i.default.createElement(O.default,{bold:!0,large:!0},i.default.createElement(b.default,{k:"business_travel.business_travel_ready.modal.add_email.header"}))),noLoading:!0},i.default.createElement(R.default,{vertical:2},i.default.createElement(g.default,{id:"btr_modal_work_email",name:"btr_modal_work_email",hideLabel:!0,small:!0,disabled:this.props.savePending,onBlur:l,onChange:a,onFocus:s,label:p.default.t("business_travel.business_travel_ready.modal.work_email_label"),placeholder:p.default.t("business_travel.business_travel_ready.modal.work_email_label"),value:this.props.newEntryValue})),this.renderSavingMsg(),this.renderErrorMsg(),i.default.createElement(v.default,{primary:!0,onClick:this.onSubmit},i.default.createElement(b.default,{k:"business_travel.business_travel_ready.modal.add_email_cta"})))}return e}()},{key:"renderSavingMsg",value:function(){function e(){return this.props.savePending?i.default.createElement(R.default,{bottom:2},i.default.createElement(b.default,{k:"shared.Saving..."})):null}return e}()},{key:"renderErrorMsg",value:function(){function e(){return this.props.saveError?i.default.createElement(R.default,{bottom:2},this.props.saveError):null}return e}()},{key:"renderVerifyMsg",value:function(){function e(){return i.default.createElement(k.default,{heading:i.default.createElement(R.default,{bottom:3},i.default.createElement(O.default,{bold:!0,large:!0},i.default.createElement(b.default,{k:"business_travel.business_travel_ready.modal.verify_email.header"}))),noLoading:!0},i.default.createElement(b.default,{k:"business_travel.business_travel_ready.modal.sent_verification_email.body",html:!0,email:this.state.email}))}return e}()},{key:"render",value:function(){function e(){var e=this.props.saveSuccess;return i.default.createElement("div",null,e&&this.renderVerifyMsg(),!e&&this.renderForm())}return e}()}]),t}(i.default.Component);w.defaultProps=L,w.propTypes=D,t.default=(0,f.default)(U,w)},vAi4:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r("8DW4"),a=babelHelpers.interopRequireDefault(n),l={isValidEmail:function(){function e(e){return/^[^@ ]+@\w[\w\W]*\.\w+$/.test(e)}return e}(),extractDomainFromEmail:function(){function e(e){var t=/@([^@]+)$/.exec(e);return t&&t[1].toLowerCase()}return e}(),hashToDatadogTags:function(){function e(e,t){var r=[];return(t||Object.keys(e).sort()).forEach(function(t){if((0,a.default)(e,t)){var n=t.replace(/[:,]/g,"_"),l=String(e[t]).replace(/[:,]/g,"_");r.push(String(n)+":"+String(l))}}),r.join(",")}return e}(),interpretError:function(){function e(e,t,r){var n=String(e);if("string"==typeof e)n=e;else if(e instanceof Error)l.logIfError(e),n=String(e);else if(e instanceof Object){var a=e.responseJSON,s={error_type:"hash_object"};if(a)n=a.error_message||n,"function"==typeof t&&(n=t(a)||n),s.error_data={error_code:a.error_code,error_details:a.error_details,error_message:a.error_message,error_type:a.error_type,error_id:a.error_id};else if(e.statusText){n=e.statusText,s.status_text=e.statusText,s.status_code=e.status;try{s.response_headers=e.getAllResponseHeaders()}catch(e){}}r&&Object.assign(r,s,{interpreted_message:n})}return n}return e}(),logIfError:function(){function e(e,t){e instanceof Error&&(setTimeout(function(){throw e},0),t&&Object.assign(t,{message:e.message,stack:e.stack}))}return e}()};t.default=l,e.exports=t.default}});"object"==typeof module&&(module.exports=e)}();