function Resultado() {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var respuesta = document.getElementById("Respuesta");

    var respuestas = "";

    for (var i = 1; i <= 5; i++) {

        switch (i) {

            case 1:

                var suma = parseFloat(valor1) + parseFloat(valor2);
                respuestas += "El resultado de la suma de los numeros  " + valor1 + " + " + valor2 + " es" + suma + "<br>";
                alert("El resultado de la suma de los numeros" + valor1 + " + " + valor2 + " es " + suma);
                break;


            case 2:
                var resta = parseFloat(valor1) - parseFloat(valor2);
                respuestas += "El resultado de la resta de " + valor1 + " - " + valor2 + " es " + resta + "<br>";
                alert("El resultado de la resta de " + valor1 + " - " + valor2 + " es " + resta);
                break;


            case 3:
                var multiplicacion = parseFloat(valor1) * parseFloat(valor2);
                respuestas += "El resultado de la  multiplicación de " + valor1 + " x " + valor2 + " es " + multiplicacion + "<br>";
                alert("El resultado de la multiplicación de " + valor1 + " x " + valor2 + " es " + multiplicacion);
                break;


            case 4:
                var division = parseFloat(valor1) / parseFloat(valor2);
                respuestas += "El resultado  de " + valor1 + " / " + valor2 + " es " + division + "<br>";
                alert("El resultado  de " + valor1 + " / " + valor2 + " es " + division);
                break;

            case 5:
                var modulo = parseFloat(valor1) % parseFloat(valor2);
                respuestas += "El residuo de los numeros " + valor1 + " % " + valor2 + " es " + modulo + "<br>";
                alert("El residuo de los numeros " + valor1 + " % " + valor2 + " es " + modulo);
                break;
        }
    }
    respuesta.innerHTML = respuestas;
}