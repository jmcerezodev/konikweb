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
      

         if (scrollY >= 0.1){

            
            flechaAbajo.css("display", "none");
           

         }else{
           
             
             flechaAbajo.css("display", "block");
           
         }
    });




    // CopyRight
    let textoFooter = $("#TextoFooter");
    let date = new Date;
    let ano = date.getFullYear();
    textoFooter.html("KINOK® " + ano);  



    ////////////////////////////// FUNCIONES  /////////////////////////////////////////

    function clickBtnMenu(){

        console.log("Click Btn Menu");

         //Click en el boton del menu movil
         if(estadoBtnMovil == false){

            menuMovil.show("fast");
            bordeBarraNav.css("border", "none");
            estadoBtnMovil = true;
            console.log(estadoBtnMovil);

        }else{

            menuMovil.hide("fast");
            estadoBtnMovil = false;
            console.log(estadoBtnMovil);
        }

           

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


 });



