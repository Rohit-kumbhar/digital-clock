format = 12;
setInterval(clock,100);
function clock()
{
   var d = new Date();
   var h = d.getHours();
   var m = d.getMinutes();
   var s = d.getSeconds();
   var zone = "";
   if(format == 12)
   {
    zone = "AM";
    if(h > 12)
    {
       zone = "PM" ;
    }
   }
   
   if(h > 12 && format == 12)
   {
       h = h - 12;
   }
   if(h == 12 && format == 12)
   {
       h = 0;
   }
   if(h == 24)
   {
       h = 0;
   }
   if(h < 10)
   {
       h = "0" + h;
   }
   if(m < 10)
   {
       m = "0" + m;
   }
   if(s < 10)
   {
       s = "0" + s;
   }
   document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + "  " + zone;
}
function change()
{
    if(format == 12)
    {
        format = 24;
    }
    else
    {
        format = 12;
    }
}