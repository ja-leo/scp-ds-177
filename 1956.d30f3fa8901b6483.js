"use strict";(self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[]).push([[1956],{1956:(j,k,a)=>{a.r(k),a.d(k,{NzDemoQuickCreateModule:()=>$});var x=a(3238),q=a(4515),Q=a(7081),f=a(1380),e=a(9724);let A=(()=>{class t{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-quick-create"]],viewQuery:function(n,o){if(1&n&&e.Gf(f.G,5),2&n){let c;e.iGM(c=e.CRH())&&(o.codeBoxes=c)}},decls:0,vars:0,template:function(n,o){},encapsulation:2}),t})();var U=a(3563),h=a(695),_=a(5760),Z=a(8918),T=a(8741),z=a(5535),s=(()=>{return(t=s||(s={}))[t.Text=0]="Text",t[t.Select=1]="Select",t[t.PhoneNumber=2]="PhoneNumber",s;var t})(),r=(()=>{return(t=r||(r={}))[t.Required=0]="Required",t[t.Email=1]="Email",r;var t})(),l=a(2552),g=a(1048),C=a(1521),v=a(8794),N=a(2288),y=a(4344),b=a(8238);function I(t,i){if(1&t&&e._UZ(0,"i",15),2&t){const n=e.oxw(3).$implicit;e.Q6J("nzType",n.icon)}}function F(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"nz-input-group",12),e._UZ(2,"input",13),e.qZA(),e.YNc(3,I,1,1,"ng-template",null,14,e.W1O),e.BQk()),2&t){const n=e.MAs(4),o=e.oxw(2).$implicit;e.xp6(1),e.Q6J("nzPrefix",n),e.xp6(1),e.Q6J("formControlName",o.name)("placeholder",o.placeholder||"")}}function w(t,i){if(1&t&&e._UZ(0,"input",16),2&t){const n=e.oxw(2).$implicit;e.Q6J("formControlName",n.name)("placeholder",n.placeholder||"")}}function S(t,i){if(1&t&&(e.ynx(0),e.YNc(1,F,5,3,"ng-container",10),e.YNc(2,w,1,2,"ng-template",null,11,e.W1O),e.BQk()),2&t){const n=e.MAs(3),o=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",o.icon)("ngIfElse",n)}}function O(t,i){if(1&t&&e._UZ(0,"nz-option",19),2&t){const n=i.$implicit;e.Q6J("nzValue",n.value)("nzLabel",n.text)}}function D(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"nz-select",17),e.YNc(2,O,1,2,"nz-option",18),e.qZA(),e.BQk()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("formControlName",n.name)("nzPlaceHolder",n.placeholder),e.xp6(1),e.Q6J("ngForOf",n.optionList)}}function P(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"sc-phone-number",20),e.BQk()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("formControlName",n.name)("scInputPlaceHolder",n.placeholder||"")}}function E(t,i){if(1&t&&(e.TgZ(0,"div",8),e.YNc(1,S,4,2,"ng-container",9),e.YNc(2,D,3,3,"ng-container",9),e.YNc(3,P,2,2,"ng-container",9),e.qZA()),2&t){const n=i.$implicit,o=e.oxw().$implicit,c=e.oxw();e.Q6J("nzSpan",c.getColumnSpan(o.columns.length))("ngSwitch",n.type),e.xp6(1),e.Q6J("ngSwitchCase",c.formFieldType.Text),e.xp6(1),e.Q6J("ngSwitchCase",c.formFieldType.Select),e.xp6(1),e.Q6J("ngSwitchCase",c.formFieldType.PhoneNumber)}}function J(t,i){if(1&t&&(e.TgZ(0,"div",6),e.YNc(1,E,4,5,"div",7),e.qZA()),2&t){const n=i.$implicit;e.Q6J("nzGutter",8),e.xp6(1),e.Q6J("ngForOf",n.columns)}}let m=(()=>{class t{constructor(){this.scSaveBtnText="Save",this.scCancelBtnText="Cancel",this.scIsCreating=!1,this.scCancelBtnClick=new e.vpe,this.scSaveBtnClick=new e.vpe,this.form=new l.cw({}),this.formFieldType=s}ngOnInit(){var n;null===(n=this.scFormFields)||void 0===n||n.rows.forEach(o=>{var c;null===(c=o.columns)||void 0===c||c.forEach(d=>{var p;this.form.addControl(d.name,new l.NI("",this.getValidators(d))),d.value&&(null===(p=this.form.get(d.name))||void 0===p||p.patchValue(d.value))})})}save(){this.form.valid&&this.scSaveBtnClick.emit(this.form.value)}cancel(){this.scCancelBtnClick.emit()}getValidators(n){var o;let c=[];return null===(o=n.validators)||void 0===o||o.forEach(d=>{switch(d){case r.Email:c.push(l.kI.email);break;case r.Required:c.push(l.kI.required);break;default:c.push(l.kI.nullValidator)}}),c}getColumnSpan(n){return 24/n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["sc-quick-create"]],inputs:{scSaveBtnText:"scSaveBtnText",scCancelBtnText:"scCancelBtnText",scFormFields:"scFormFields",scIsCreating:"scIsCreating"},outputs:{scCancelBtnClick:"scCancelBtnClick",scSaveBtnClick:"scSaveBtnClick"},decls:8,vars:6,consts:[[1,"quick-create-container"],[3,"formGroup"],["class","input-group","nz-row","",3,"nzGutter",4,"ngFor","ngForOf"],[1,"quick-create-footer"],["nz-button","","nzType","text","nzSize","small",3,"click"],["nz-button","","nzType","primary","nzSize","small",3,"disabled","nzLoading","click"],["nz-row","",1,"input-group",3,"nzGutter"],["nz-col","",3,"nzSpan","ngSwitch",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","ngSwitch"],[4,"ngSwitchCase"],[4,"ngIf","ngIfElse"],["simpleinput",""],[3,"nzPrefix"],["type","text","nz-input","",3,"formControlName","placeholder"],["icon",""],["nz-icon","",3,"nzType"],["nz-input","","type","text",3,"formControlName","placeholder"],["nzAllowClear","",3,"formControlName","nzPlaceHolder"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"],[3,"formControlName","scInputPlaceHolder"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"form",1),e.YNc(2,J,2,2,"div",2),e.qZA(),e.TgZ(3,"div",3)(4,"button",4),e.NdJ("click",function(){return o.cancel()}),e._uU(5),e.qZA(),e.TgZ(6,"button",5),e.NdJ("click",function(){return o.save()}),e._uU(7),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("ngForOf",o.scFormFields.rows),e.xp6(3),e.Oqu(o.scCancelBtnText),e.xp6(1),e.Q6J("disabled",o.form.invalid)("nzLoading",o.scIsCreating),e.xp6(1),e.hij(" ",o.scSaveBtnText," "))},directives:[l._Y,l.JL,l.sg,g.sg,z.SK,z.t3,g.RF,g.n9,g.O5,Z.w,C.gB,C.ke,C.Zp,l.Fj,l.JJ,l.u,_.Ls,v.Vq,v.Ip,N.r,y.ix,b.dQ],styles:[".quick-create-container[_ngcontent-%COMP%]{width:284px;padding:12px;border-radius:8px;box-shadow:0 4px 8px #222b3d1a;background-color:#fff}.quick-create-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{display:flex;align-items:top;margin-bottom:8px}.quick-create-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%]{margin-right:12px;color:#8893a7}.quick-create-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#8893a7;font-size:16px;margin-right:6px}.quick-create-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%]{width:100%}.quick-create-container[_ngcontent-%COMP%]   .quick-create-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:16px}"],changeDetection:0}),t})(),B=(()=>{class t{ngOnInit(){this.companyFields={rows:[{columns:[{name:"CompanyName",type:s.Text,placeholder:"Enter company name...",icon:"ja:company",validators:[r.Required]}]},{columns:[{name:"CompanyUrl",type:s.Text,placeholder:"Enter URL...",icon:"link",validators:[r.Required]}]}]}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-quick-create-basic"]],decls:1,vars:1,consts:[["scSaveBtnText","Add company",3,"scFormFields"]],template:function(n,o){1&n&&e._UZ(0,"sc-quick-create",0),2&n&&e.Q6J("scFormFields",o.companyFields)},directives:[m],encapsulation:2}),t})(),L=(()=>{class t{constructor(){}ngOnInit(){this.linkedInFields={rows:[{columns:[{name:"LinkedInUrl",type:s.Text,placeholder:"Enter URL...",icon:"ja:linkedin",validators:[r.Required]}]}]}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-quick-create-linkedin"]],decls:1,vars:1,consts:[[3,"scFormFields"]],template:function(n,o){1&n&&e._UZ(0,"sc-quick-create",0),2&n&&e.Q6J("scFormFields",o.linkedInFields)},directives:[m],encapsulation:2}),t})(),H=(()=>{class t{constructor(){}ngOnInit(){this.emailFields={rows:[{columns:[{name:"email",type:s.Text,placeholder:"Enter email...",icon:"mail",validators:[r.Required,r.Email]}]}]}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-quick-create-email"]],decls:1,vars:1,consts:[[3,"scFormFields"]],template:function(n,o){1&n&&e._UZ(0,"sc-quick-create",0),2&n&&e.Q6J("scFormFields",o.emailFields)},directives:[m],encapsulation:2}),t})(),R=(()=>{class t{constructor(){}ngOnInit(){this.phoneNumberFields={rows:[{columns:[{name:"phonenumber",type:s.PhoneNumber,placeholder:"Enter Number ...",validators:[r.Required]}]}]}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-quick-create-phone"]],decls:1,vars:1,consts:[[3,"scFormFields"]],template:function(n,o){1&n&&e._UZ(0,"sc-quick-create",0),2&n&&e.Q6J("scFormFields",o.phoneNumberFields)},directives:[m],encapsulation:2}),t})(),G=(()=>{class t{constructor(){}ngOnInit(){this.addressFields={rows:[{columns:[{name:"street",type:s.Text,placeholder:"Street",validators:[r.Required]}]},{columns:[{name:"street2",type:s.Text}]},{columns:[{name:"suburb",type:s.Text,placeholder:"Suburb",validators:[r.Required]}]},{columns:[{name:"state",type:s.Text,placeholder:"State",validators:[r.Required]},{name:"postcode",type:s.Text,placeholder:"Postcode",validators:[r.Required]}]},{columns:[{name:"country",type:s.Select,placeholder:"Select a country",optionList:[{text:"Australia",value:1},{text:"UK",value:2},{text:"USA",value:3},{text:"Canada",value:4}],validators:[r.Required]}]}]}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-quick-create-address"]],decls:1,vars:1,consts:[[3,"scFormFields"]],template:function(n,o){1&n&&e._UZ(0,"sc-quick-create",0),2&n&&e.Q6J("scFormFields",o.addressFields)},directives:[m],encapsulation:2}),t})();var u=a(4124);let M=(()=>{class t{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-quick-create"]],viewQuery:function(n,o){if(1&n&&e.Gf(f.G,5),2&n){let c;e.iGM(c=e.CRH())&&(o.codeBoxes=c)}},decls:175,vars:24,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-quick-create-demo-basic","nzTitle","Quick Create - Company fields"],["nzHref","#components-quick-create-demo-linkedin","nzTitle","Quick Create - LinkedIn fields"],["nzHref","#components-quick-create-demo-email","nzTitle","Quick Create - Email fields"],["nzHref","#components-quick-create-demo-phone","nzTitle","Quick Create - Phone Number"],["nzHref","#components-quick-create-demo-address","nzTitle","Quick Create - Address fields"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/JobAdder/scales-workspace/tree/dev/projects/scales-library/src/lib//quick-create/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["id","component-tab"],["nzTitle","Examples"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","Quick Create - Company fields","nzSelector","nz-demo-quick-create-basic","nzGenerateCommand","ng g ng-zorro-antd:quick-create-basic <name>","nzComponentName","NzDemoQuickCreateBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Quick Create - LinkedIn fields","nzSelector","nz-demo-quick-create-linkedin","nzGenerateCommand","ng g ng-zorro-antd:quick-create-linkedin <name>","nzComponentName","NzDemoQuickCreateLinkedinComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Quick Create - Email fields","nzSelector","nz-demo-quick-create-email","nzGenerateCommand","ng g ng-zorro-antd:quick-create-email <name>","nzComponentName","NzDemoQuickCreateEmailComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Quick Create - Phone Number","nzSelector","nz-demo-quick-create-phone","nzGenerateCommand","ng g ng-zorro-antd:quick-create-phone <name>","nzComponentName","NzDemoQuickCreatePhoneComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Quick Create - Address fields","nzSelector","nz-demo-quick-create-address","nzGenerateCommand","ng g ng-zorro-antd:quick-create-address <name>","nzComponentName","NzDemoQuickCreateAddressComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Usage"],["nzTitle","Installation"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","[sc-quick-create]"],[1,"api-type-label","directive"],["onclick","window.location.hash = '[sc-quick-create]'",1,"anchor"]],template:function(n,o){1&n&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(d){return o.goLink(d)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7),e.qZA()(),e.TgZ(9,"section",8)(10,"h1"),e._uU(11,"Quick Create"),e._UZ(12,"span",9)(13,"span",10),e.TgZ(14,"a",11),e._UZ(15,"i",12),e.qZA()(),e.TgZ(16,"section",8),e.IAx(),e.TgZ(17,"p"),e._uU(18,"This component is used to create simple forms that will be displayed in a modal dialog."),e.qZA(),e.TgZ(19,"h2",13)(20,"span"),e._uU(21,"When To Use"),e.qZA(),e.TgZ(22,"a",14),e._uU(23,"#"),e.qZA()(),e.TgZ(24,"p"),e._uU(25,"When requiring users to fill basic information in order to create a new record, but without jumping to a new page to interrupt the user's workflow, you can use Quick Create to display a modal dialog."),e.qZA(),e.TgZ(26,"pre",15)(27,"code")(28,"span",16),e._uU(29,"import"),e.qZA(),e._uU(30," "),e.TgZ(31,"span",17),e._uU(32,"{"),e.qZA(),e._uU(33," ScalesLibraryModule "),e.TgZ(34,"span",17),e._uU(35,"}"),e.qZA(),e._uU(36," "),e.TgZ(37,"span",16),e._uU(38,"from"),e.qZA(),e._uU(39," "),e.TgZ(40,"span",18),e._uU(41,"'scales-library'"),e.qZA(),e.TgZ(42,"span",17),e._uU(43,";"),e.qZA()()(),e.fQ9(),e.qZA()(),e.TgZ(44,"nz-tabset",19)(45,"nz-tab",20)(46,"div",21)(47,"div",22)(48,"nz-code-box",23),e._UZ(49,"nz-demo-quick-create-basic",24),e.TgZ(50,"div",25),e.IAx(),e.TgZ(51,"p")(52,"code"),e._uU(53,"A sample of using Quick Create component for company fields."),e.qZA()(),e.fQ9(),e.qZA()(),e.TgZ(54,"nz-code-box",26),e._UZ(55,"nz-demo-quick-create-linkedin",24),e.TgZ(56,"div",25),e.IAx(),e.TgZ(57,"p")(58,"code"),e._uU(59,"A sample of using Quick Create component for LinkedIn fields."),e.qZA()(),e.fQ9(),e.qZA()(),e.TgZ(60,"nz-code-box",27),e._UZ(61,"nz-demo-quick-create-email",24),e.TgZ(62,"div",25),e.IAx(),e.TgZ(63,"p")(64,"code"),e._uU(65,"A sample of using Quick Create component for Email fields."),e.qZA()(),e.fQ9(),e.qZA()(),e.TgZ(66,"nz-code-box",28),e._UZ(67,"nz-demo-quick-create-phone",24),e.TgZ(68,"div",25),e.IAx(),e.TgZ(69,"p")(70,"code"),e._uU(71,"A sample of using Quick Create component for Phone Number fields."),e.qZA()(),e.fQ9(),e.qZA()(),e.TgZ(72,"nz-code-box",29),e._UZ(73,"nz-demo-quick-create-address",24),e.TgZ(74,"div",25),e.IAx(),e.TgZ(75,"p")(76,"code"),e._uU(77,"A sample of using Quick Create component for Address fields."),e.qZA()(),e.fQ9(),e.qZA()()()()(),e.TgZ(78,"nz-tab",30),e._uU(79," Content of Tab Pane 2 "),e.qZA(),e._UZ(80,"nz-tab",31),e.qZA(),e.TgZ(81,"section",32),e.IAx(),e.TgZ(82,"h2",33)(83,"span"),e._uU(84,"API"),e.qZA(),e.TgZ(85,"a",34),e._uU(86,"#"),e.qZA()(),e.TgZ(87,"h3",35)(88,"span"),e._uU(89,"[sc-quick-create]"),e.qZA(),e.TgZ(90,"label",36),e._uU(91,"directive"),e.qZA(),e.TgZ(92,"a",37),e._uU(93,"#"),e.qZA()(),e.TgZ(94,"table")(95,"thead")(96,"tr")(97,"th"),e._uU(98,"Param"),e.qZA(),e.TgZ(99,"th"),e._uU(100,"Description"),e.qZA(),e.TgZ(101,"th"),e._uU(102,"Type"),e.qZA(),e.TgZ(103,"th"),e._uU(104,"Default"),e.qZA()()(),e.TgZ(105,"tbody")(106,"tr")(107,"td")(108,"code"),e._uU(109,"[scSaveBtnText]"),e.qZA()(),e.TgZ(110,"td"),e._uU(111,"The text to display in the save button."),e.qZA(),e.TgZ(112,"td")(113,"code"),e._uU(114,"string"),e.qZA()(),e.TgZ(115,"td")(116,"code"),e._uU(117,"Save"),e.qZA()()(),e.TgZ(118,"tr")(119,"td")(120,"code"),e._uU(121,"[scCancelBtnText]"),e.qZA()(),e.TgZ(122,"td"),e._uU(123,"The text to display in the cancel button."),e.qZA(),e.TgZ(124,"td")(125,"code"),e._uU(126,"string"),e.qZA()(),e.TgZ(127,"td")(128,"code"),e._uU(129,"Cancel"),e.qZA()()(),e.TgZ(130,"tr")(131,"td")(132,"code"),e._uU(133,"[scFormFields]"),e.qZA()(),e.TgZ(134,"td"),e._uU(135,"The list of fields used to populate the form"),e.qZA(),e.TgZ(136,"td")(137,"code"),e._uU(138,"FormFieldList"),e.qZA()(),e.TgZ(139,"td"),e._uU(140,"-"),e.qZA()(),e.TgZ(141,"tr")(142,"td")(143,"code"),e._uU(144,"[scIsCreating]"),e.qZA()(),e.TgZ(145,"td"),e._uU(146,"Whether to apply loading visual effect for Save button or not"),e.qZA(),e.TgZ(147,"td")(148,"code"),e._uU(149,"boolean"),e.qZA()(),e.TgZ(150,"td")(151,"code"),e._uU(152,"false"),e.qZA()()(),e.TgZ(153,"tr")(154,"td")(155,"code"),e._uU(156,"(scCancelBtnClick)"),e.qZA()(),e.TgZ(157,"td"),e._uU(158,"Event emitted when the user clicks the cancel button"),e.qZA(),e.TgZ(159,"td")(160,"code"),e._uU(161,"EventEmitter"),e.qZA()(),e.TgZ(162,"td"),e._uU(163,"-"),e.qZA()(),e.TgZ(164,"tr")(165,"td")(166,"code"),e._uU(167,"(scSaveBtnClick)"),e.qZA()(),e.TgZ(168,"td"),e._uU(169,"Event emitted when the user clicks save button"),e.qZA(),e.TgZ(170,"td")(171,"code"),e._uU(172,"EventEmitter"),e.qZA()(),e.TgZ(173,"td"),e._uU(174,"-"),e.qZA()()()(),e.fQ9(),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("nzOffsetTop",16),e.xp6(1),e.Q6J("nzAffix",!1),e.xp6(44),e.Q6J("nzGutter",8),e.xp6(1),e.Q6J("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-quick-create-demo-basic")("nzLink","components-quick-create-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/quick-create/demo/basic.md"),e.xp6(6),e.Q6J("nzId","components-quick-create-demo-linkedin")("nzLink","components-quick-create-demo-linkedin")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/quick-create/demo/linkedin.md"),e.xp6(6),e.Q6J("nzId","components-quick-create-demo-email")("nzLink","components-quick-create-demo-email")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/quick-create/demo/email.md"),e.xp6(6),e.Q6J("nzId","components-quick-create-demo-phone")("nzLink","components-quick-create-demo-phone")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/quick-create/demo/phone.md"),e.xp6(6),e.Q6J("nzId","components-quick-create-demo-address")("nzLink","components-quick-create-demo-address")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/quick-create/demo/address.md"))},directives:[U.$,h.IT,h.Fp,_.Ls,Z.w,T.xH,T.xw,z.SK,z.t3,f.G,B,L,H,R,G,u.Om,u.$Z,u.Uo,u._C,u.p0],encapsulation:2}),t})();a(8915);let $=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[q.G,...Q.F,x.Bz.forChild([{path:"en",component:M},{path:"zh",component:A}])]]}),t})()}}]);