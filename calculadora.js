seleccion = false;
while(seleccion == false){
    operacion = prompt("Elija alguna de las siguientes operaciones: \n 1. Suma \n 2. Resta \n 3. Multiplicacion \n 4. Division");
    if (operacion !== "1" && operacion !== "2" && operacion !== "3" && operacion !== "4"){
        alert("Por seleccione una opcion Valida");
    }
    else{
        seleccion = true;
        numero1 = parseFloat(prompt("Ingrese el primer numero"));
        numero2 = parseFloat(prompt("Ingrese el segundo numero"));
        if(operacion == "1"){
            numero3 = numero1 + numero2;
            alert(numero1 + "+ " + numero2 + "= " + numero3);
        }
        if(operacion == "2"){
            numero3 = numero1 - numero2;
            alert(numero1 + "- " + numero2 + "= " + numero3);
        }
        if(operacion == "3"){
            numero3 = numero1 * numero2;
            alert(numero1 + "* " + numero2 + "= " + numero3);
        }
        if(operacion == "4"){
            if(numero2 == 0){
                alert("no  es posible dividir por 0");
            }
            else{
                numero3 = numero1 / numero2;
                alert(numero1 + "/ " + numero2 + "= " + numero3);
            }

        }
    }

}