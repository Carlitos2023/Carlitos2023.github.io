// botones para ver y ocultar OTRAS ACREDITACIONES ACADÉMICAS
document.getElementById('boton1').onclick=function () {
    document.getElementById("curso1").innerHTML = "~ Arquitectura de computadoras - UTN              -";
    document.getElementById("curso2").innerHTML = "~ Curso de selección de personal - Academias CSP  -";
    document.getElementById("curso3").innerHTML = "~ Jornadas de cambio climático - Gobierno de Mza. -";
    document.getElementById("curso4").innerHTML = "~ Microprocesadores y microcontroladores - UTN    -";
        
    document.getElementById('boton1out').onclick=function () {
        document.getElementById("curso1").innerHTML = "";
        document.getElementById("curso2").innerHTML = "";
        document.getElementById("curso3").innerHTML = "";
        document.getElementById("curso4").innerHTML = ""; 
    }  
}

// botones para ver y ocultar REFERENCIAS PERSONALES 
document.getElementById('boton2').onclick=function () {
    document.getElementById("refer1").innerHTML = "~ Sra. Mónica González - Tel.222-33333            -";
    document.getElementById("refer2").innerHTML = "~ Sr. Augusto Serran   - Tel.444-55555            -";
    document.getElementById("refer3").innerHTML = "~ Sr. Martín Garciale  - Tel.777-88888            -";

    document.getElementById('boton2out').onclick=function () {
        document.getElementById("refer1").innerHTML = "";
        document.getElementById("refer2").innerHTML = "";
        document.getElementById("refer3").innerHTML = "";
    }
}

