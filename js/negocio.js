var negocio, direccion;
var productos = [];
var socios = [];
var continuar = "si";
var continuar1 = "si";
var cliente = [];
var ventas = [];
var cli = 0;
var pro = 0;
var total = [];
var dueños = new Array("carlos sosa","luis traba","juana torta");
negocio= prompt("ingrese su negorico:","");
var nego= negocio.toUpperCase();
direccion= prompt("Ingrese su dirección:","");
var dire = direccion.toUpperCase();
for (i in dueños){ 
	socios[i]= dueños[i].toUpperCase();
}
while(continuar=="si"){
	cliente[cli]= prompt("Ingrese el código del cliente: ","");
	cli++;
	cliente[cli]= prompt("Ingrese el nombre del cliente: ","");
	continuar1= prompt("Va a realizar una compra si/no: ","");
	while(continuar1=="si"){
		productos[pro]= prompt("Ingrese el articulo: ","");
		pro++;
		continuar1 = prompt("desea seguir comprando si/no: ","");
	}
	
	continuar=prompt("desea continuar si/no: ","");
}
for (a in cliente){
	ventas[a] = cliente[a];
}

for(v=0;v<productos.length;v++){
	ventas[ventas.length]=productos[v];
}
total = ventas.filter((x)=>2);
var total1 = total.toString();
alert(total);