document.write('<h1 style="color:red">Ejercicio 2</h1>');
function numero(a,b){

    if(b>a){
        menor = a;
    }
    else{
        menor = b;
    }
    if(a>b){
        mayor = a;
    }
    else{
        mayor = b;
    }
    mayor=mayor+1;
    if(a>b){
        alert("No se ha podido procesar su peticion, ponga primero un numero mayor. Igual de lo contrario lo ordene para usted. :)")
    }
for(j=menor; j<mayor; j++){
    
	document.write("<h2>Imprimiendo tabla del "+ menor +"</h2>");

	for(i = 1;i<=10;i++){
		document.write("<li>");
		document.write(menor + "x " + i + "= " + menor * i);
		document.write("</li>");
	}
    menor=menor+1;
}
}
numero(1,10);
