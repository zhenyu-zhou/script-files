(function(){var APC_r_url="http://jqmt.qq.com/rpt.png?plf=3&";var APC_count=0,APC_idx=[],APC_task=[];function apc_CallBack(data){var idx=0;for(var i in data){if(i=="rCount"){APC_count=data[i];}else if(!isNaN(i)){APC_idx[idx]=i;APC_task[i]=data[i];idx++;}}
APC_count=idx;APC_r_url+="cnt="+APC_count;if(APC_count<=0)
return;else{APC_st(0,0);return;}}
function APC_st(i,t){var p=new Image();p.idx=i;p.st=new Date();p.t=t;p.onload=function(){p.onload=null;APC_r_ok(this.idx,this.st,this.t)};p.onerror=function(){p.onerror=null;APC_r_err(this.idx,this.st,this.t)};p.src=APC_task[APC_idx[i]]+"?"+Math.random();}
function APC_r_ok(i,st,t){var data=new Date(),tm=data.getTime()-st.getTime();APC_r_url+="&r"+i+"="+APC_idx[i]+","+tm+",0";if(i<APC_count-1)
APC_st(i+1,0);else{APC_Rpt(APC_r_url);}}
function APC_r_err(i,st,t){var data=new Date();var tm=data.getTime()-st.getTime();APC_r_url+="&r"+i+"="+APC_idx[i]+","+tm+",1";if(i<APC_count-1)
APC_st(i+1,0);else
{APC_Rpt(APC_r_url);}}
function APC_Rpt(s){var p=new Image();p.src=s;}
try{apc_CallBack({"rCount":4,'1318':'http://mmtest6.qpic.wechatos.net/mmtest2/gqvgoOjo88qsdWfPhXOwg2yRN0NpF8BF/0','1299':'http://dd.myapp.com/16891/bz.gif','1335':'http://cncoc.tc.qq.com/cdn.png','1358':'http://pgdt.gtimg.cn/gdt/0/bz.gif/0'});}catch(e){}})();

