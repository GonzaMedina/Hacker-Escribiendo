var count = 0;
var str = "Hola mi nombre es elgonzaexe. Soy un hacker. Hackeé tu dispositivo y ahora lo controlo yo. ¡Soy un verdadero hacker porque estoy usando una terminal negra y un color de fuente verde! *risa malvada* Muwhahahaha\nVoy a eliminar todos tus archivos en 3.. 2.. 1..\nDispositivo formateado con éxito!!\n¡Apúrate a revisar tus archivos!\n¡Ups! no tengas miedo solo bromeo ^_^ paz ✌ ";

function myFunc() {
   document.getElementById("myInput").value += str[count];
   count++;
   if(count == 235 || count == 236)
   {
       //thanks @maz for checking my code
       if("vibrate" in navigator)
       navigator.vibrate(500);
       else
       alert("device successfully formatted!!");
       
   }
   
   //adding some randomness thanks for your idea guys!!
   if(count == 5 || count == 24 || count == 37 || count == 66 || count == 166)
   {
       clearInterval(x);
       x = setInterval(myFunc,600);
   }
   else if(count == 95 || count == 121 ||count == 236 || count == 295)
   {
       clearInterval(x);
       x = setInterval(myFunc,1000)
   }
   else if((count > 4 && count < 20) || (count > 35 && count < 50) || (count >122 && count < 135) || (count > 150 && count < 166)||(count > 178 && count < 188) || (count > 195 && count < 201) || (count > 206 && count < 214) || (count > 240 && count < 250) || (count > 260 && count < 271) || (count > 280 && count < 282) || (count > 302 && count < 315))
   {
       clearInterval(x);
       x = setInterval(myFunc,75)
   }
   
   else
   {
       clearInterval(x);
       x = setInterval(myFunc,150);
   }
   
   
   if(count >= str.length)
   {
       clearInterval(x);
   }
}
var x=setInterval(myFunc,150);