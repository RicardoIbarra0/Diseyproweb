
document.write('<h1 style="color:red">Ejercicio 1</h1>');
function numero(a){
	document.write("<h2>Imprimiendo tabla del "+ a +"</h2>");

	for(i = 1;i<=10;i++){
		document.write("<li>");
		document.write(a + "x " + i + "= " + a * i);
		document.write("</li>");
	}
   
}

numero(6);

