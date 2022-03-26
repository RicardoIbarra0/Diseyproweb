
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

numero(4,2);
