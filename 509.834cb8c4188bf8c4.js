"use strict";(self.webpackChunkkitchensink_ui=self.webpackChunkkitchensink_ui||[]).push([[509],{9509:(M,c,l)=>{l.r(c),l.d(c,{DatetimePickerGuidelinesComponent:()=>h});var _=l(6814),o=l(6223),p=l(3680),m=l(3888),r=l(1506),e=l(5879);let h=(()=>{var u;class s{constructor(){this.dateTime=null,this.dateTimeMinMax=null,this.min=new Date("03/10/2022"),this.max=new Date("03/20/2022"),this.defaultScheduleInputModel={time:{hour:10,minute:30}},this.deactivationDate=new Date}changeScheduledRunTime(n){console.log(n),console.log(this.defaultScheduleInputModel.time)}setScheduleRunTime(n){console.log(n),this.defaultScheduleInputModel.time=n}onDeactivationDateChange(){console.log(this.deactivationDate)}setDatetime(n){this.dateTime=null!==n?new Date(n):null}}return(u=s).\u0275fac=function(n){return new(n||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-datetime-picker-guidelines"]],standalone:!0,features:[e.jDz],decls:57,vars:16,consts:[[1,"prose"],[1,"example"],[1,"button-list"],[1,"button","button-secondary",3,"click"],[1,"form"],["name","test",3,"ngModel","ngModelChange"],[2,"margin","10px 0 10px 0"],["name","minMax",3,"ngModel","min","max","ngModelChange"],["matInput","","name","deactivationDate",3,"ngModel","matDatepicker","ngModelChange"],[1,"button","button-secondary","button-icon",3,"click"],["key","calendar","type","outline"],["deactivationDatePicker",""],[1,"field-label"],["type","time","name","defaultScheduleInputModel.name",1,"field-control",3,"ngModel","ngModelChange","change"],[1,"list-disc","list-inside"]],template:function(n,t){if(1&n){const d=e.EpF();e.TgZ(0,"h1"),e._uU(1,"Date time picker"),e.qZA(),e.TgZ(2,"div",0),e._uU(3," Use a date time picker to help user pick a date time value.\n"),e.qZA(),e.TgZ(4,"article")(5,"h2"),e._uU(6,"Default"),e.qZA(),e.TgZ(7,"div",1)(8,"div",2)(9,"button",3),e.NdJ("click",function(){return t.setDatetime("2022-01-12T20:00")}),e._uU(10,"Set value to 12/1/2022 8:00 PM"),e.qZA(),e.TgZ(11,"button",3),e.NdJ("click",function(){return t.setDatetime("2022-04-12T16:20")}),e._uU(12,"Set value to 12/04/2022 4:20 PM"),e.qZA(),e.TgZ(13,"button",3),e.NdJ("click",function(){return t.setDatetime(null)}),e._uU(14,"Set value to null"),e.qZA()(),e.TgZ(15,"div")(16,"form",4)(17,"h3"),e._uU(18,"Date Time"),e.qZA(),e.TgZ(19,"mz-datetime",5),e.NdJ("ngModelChange",function(a){return t.dateTime=a}),e.qZA(),e._uU(20),e.ALo(21,"json"),e.qZA()(),e._UZ(22,"hr",6),e.TgZ(23,"div")(24,"form",4)(25,"h3"),e._uU(26,"Date Time with min-max date"),e.qZA(),e.TgZ(27,"mz-datetime",7),e.NdJ("ngModelChange",function(a){return t.dateTimeMinMax=a}),e.qZA(),e._uU(28),e.ALo(29,"json"),e.qZA()()(),e.TgZ(30,"div",1)(31,"form",4)(32,"input",8),e.NdJ("ngModelChange",function(a){return t.deactivationDate=a})("ngModelChange",function(){return t.onDeactivationDateChange()}),e.qZA(),e.TgZ(33,"button",9),e.NdJ("click",function(){e.CHM(d);const a=e.MAs(36);return e.KtG(a.open())}),e._UZ(34,"mz-svg-icon",10),e.qZA(),e._UZ(35,"mat-datepicker",null,11),e.qZA()(),e.TgZ(37,"div",1)(38,"div",2)(39,"button",3),e.NdJ("click",function(){return t.setScheduleRunTime({hour:10,minute:0})}),e._uU(40,"Set time to 10:00 AM"),e.qZA(),e.TgZ(41,"button",3),e.NdJ("click",function(){return t.setScheduleRunTime({hour:20,minute:0})}),e._uU(42,"Set time to 8:00 PM"),e.qZA()(),e.TgZ(43,"form",4)(44,"label")(45,"span",12),e._uU(46,"Scheduled run time"),e.qZA(),e.TgZ(47,"input",13),e.NdJ("ngModelChange",function(a){return t.defaultScheduleInputModel.time=a})("change",function(a){return t.changeScheduledRunTime(a)}),e.qZA()()(),e._uU(48),e.ALo(49,"json"),e.qZA(),e.TgZ(50,"h3"),e._uU(51,"Best practices"),e.qZA(),e.TgZ(52,"ul",14)(53,"li"),e._uU(54,"Use mask for instructional text to set value format expectation."),e.qZA(),e.TgZ(55,"li"),e._uU(56,"Allow users entering in a date. Dates far away from today can be cubersome to enter with mouse."),e.qZA()()()}if(2&n){const d=e.MAs(36);e.xp6(19),e.Q6J("ngModel",t.dateTime),e.xp6(1),e.hij(" Date Time: ",e.lcZ(21,10,t.dateTime)," "),e.xp6(7),e.Q6J("ngModel",t.dateTimeMinMax)("min",t.min)("max",t.max),e.xp6(1),e.hij(" Min Max: ",e.lcZ(29,12,t.dateTimeMinMax)," "),e.xp6(4),e.Q6J("ngModel",t.deactivationDate)("matDatepicker",d),e.xp6(15),e.Q6J("ngModel",t.defaultScheduleInputModel.time),e.xp6(1),e.hij(" ",e.lcZ(49,14,t.defaultScheduleInputModel)," ")}},dependencies:[_.ez,_.Ts,r.jg,o.u5,o._Y,o.Fj,o.JJ,o.JL,o.On,o.F,m.FA,m.Mq,m.hl,p.XK,r.pn]}),s})()}}]);