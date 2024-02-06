$(document).ready(function(){
    

    //Menu Movil Responsive

    let btnMenuMovil = $(".btn-menu-movil");
    let menuMovil = $(".menu-nav");
    let estadoBtnMovil = false;
    let bordeBarraNav = $(".menu-nav li");
    let anchoPantalla = $(window).width();


    // Al iniciar web

    if(anchoPantalla < 1200){

        btnMenuMovil.on("click", function () {

                
            clickBtnMenu();
            console.log(anchoPantalla);
            
        });
        

        $(".menu-nav li a").on("click", function(){

            cerrarMenuClickEnlace();
        });
    }

    


    /*Comprobando si cambia el ancho de la pantalla, 
    comportamiento al cambiar de ancho una vez iniciada la web*/
    
    $(window).resize(function () { 

        anchoPantalla = $(window).width();

        mostrarTipoMenu();
        estadoBtnMovil = false;

    });

    
   
    //Posicion Scroll barra siempre visible
    let flechaAbajo = $(".flecha-abajo");
   
    $(window).scroll(function () { 
      
        menuMovil.hide("1000");
        estadoBtnMovil = false;
        $("#Icono-menu").removeClass("fa-xmark");
        $("#Icono-menu").addClass("fa-bars");

        if (scrollY >= 0.1){

            
            flechaAbajo.css("display", "none");
           

        }else{
           
             
            flechaAbajo.css("display", "block");
           
        }
    });



    ////////////////////////////// FUNCIONES  /////////////////////////////////////////

    function clickBtnMenu(){

        console.log("Click Btn Menu");

         //Click en el boton del menu movil
         if(estadoBtnMovil == false){

            menuMovil.show("1000");
            bordeBarraNav.css("border", "none");
            estadoBtnMovil = true;
            console.log(estadoBtnMovil);

        }else{

            menuMovil.hide("1000");
            estadoBtnMovil = false;
            console.log(estadoBtnMovil);
        }

        // Icono dependiendo si esta la cortina abierta o cerrada

        if(estadoBtnMovil == true){
            $("#Icono-menu").removeClass("fa-bars");
            $("#Icono-menu").addClass("fa-xmark");
            console.log("cambiando icono");
        }else{
            $("#Icono-menu").removeClass("fa-xmark");
            $("#Icono-menu").addClass("fa-bars");
        }


    /////////////////////////////////////////////////////////
           
    }

    

    

    //Mostar tipo menu dependiendo del ancho de la pantalla
    function mostrarTipoMenu(){

        if(anchoPantalla > "1200"){
            //Mostar menu el PC
            menuMovil.css("display", "flex");
            estadoBtnMovil = true;

        }else{

            //Ocultar Menu en PC
            menuMovil.css("display", "none");
        }

    }


    //Cerrar menu al tocar enlace
    function cerrarMenuClickEnlace(){

        if(anchoPantalla < 1200){

        menuMovil.hide("fast");
         estadoBtnMovil = false;
        //console.log(estadoBtnMovil);
        console.log("Click! enclace cerrar menu");
        
        }
        
     }


     /////////////////////////////// FIN MENU NAVEGACION /////////////////////////////////


////////////////////////////////////// FECHA DE HOY //////////////////////////////////////
    // Fecha
    let textoFecha = $("#TextoFecha");
    let fecha2 = new Date;
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Nobiembre","Diciembre"]
    let dia = fecha2.getUTCDate();
    let mes = fecha2.getMonth();
    let ano = fecha2.getFullYear();
    

    textoFecha.html(dia + "/" + meses[mes] + "/" + ano); 

////////////////////////////////////// FECHA DE HOY //////////////////////////////////////


    ////////////////////////////////////// COPYRIGHT //////////////////////////////////////
    // CopyRight
    let textoFooter = $("#TextoFooter");
    let date = new Date;
    let year = date.getFullYear();
    textoFooter.html("KINOK® " + year); 

    console.log(year + "hola");

    ////////////////////////////////////// FIN COPYRIGHT //////////////////////////////////////

     
});



