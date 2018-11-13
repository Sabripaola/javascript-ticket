var km= prompt("inserire km da fare");

var ticket= 0.21*km;

var età= prompt("inserire età");

if (età <= 18){
  alert("il suo importo da pagare è €" +ticket* 20/100);
}

else if (età >= 65){
  alert("il suo importo da pagare è €" +ticket* 40/100);
}

else{
  alert("il suo importo da pagare è €" +ticket);
}
