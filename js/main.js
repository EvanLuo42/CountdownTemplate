function show(){
    var time = new Date();
    var date1 = time.getTime();
    var date2 = "2020/11/02 00:00:00";
    var date3 = new Date(date2).getTime() - date1;
    var days=Math.floor(date3/(24*3600*1000));
    var leave1=date3%(24*3600*1000);
    var hours=Math.floor(leave1/(3600*1000));
    var leave2=leave1%(3600*1000);
    var minutes=Math.floor(leave2/(60*1000));
    var leave3=leave2%(60*1000);
    var seconds=Math.round(leave3/1000);
    document.getElementById("time").innerHTML=days+"天 "+hours+"小时 "+minutes+"分钟 "+seconds+"秒";
    setTimeout(show,1000);
  }
