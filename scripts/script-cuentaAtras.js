$(document).ready(function(){
    

   
     ////////////////////////////////////// Cuenta Atras //////////////////////////////////
    
     

        //===
        // VARIABLES
        //===
        const fecha = new Date('02/24/2024 0:01 AM');
        // Render del DOM
        const spanDias = document.querySelector('span#Dias');
        const spanHoras = document.querySelector('span#Horas');
        const spanMinutos = document.querySelector('span#Minutos');
        const spanSegundos = document.querySelector('span#Segundos');
        // Calculando Milisegundos
        const milisegundosPorSegundo = 1000;
        const milisegundosPorMinuto = milisegundosPorSegundo * 60;
        const milisegundosPorHora = milisegundosPorMinuto * 60;
        const milisegundosPorDia = milisegundosPorHora * 24

        //===
        // Funciones
        //===

        /**
        * Método que actualiza la cuenta atrás y la muestra.
        */
        function updateCountdown() {
            // Calculos
            const NOW = new Date()
            const duracion = fecha - NOW;
            const diasRestantes = Math.floor(duracion / milisegundosPorDia);
            const horasRestantes = Math.floor((duracion % milisegundosPorDia) / milisegundosPorHora);
            const minutosRestantes = Math.floor((duracion % milisegundosPorHora) / milisegundosPorMinuto);
            const segundosRestantes = Math.floor((duracion % milisegundosPorMinuto) / milisegundosPorSegundo);
            

            // Render
            spanDias.textContent = diasRestantes;
            spanHoras.textContent = horasRestantes;
            spanMinutos.textContent = minutosRestantes;
            spanSegundos.textContent = segundosRestantes;
        }

        //===
        // Iniciar
        //===
        updateCountdown();
        // Actualizar cada segundo
        setInterval(updateCountdown, milisegundosPorSegundo);
    

    ///////////////////////////////// Fin Cuenta Atras ///////////////////////////////

});



