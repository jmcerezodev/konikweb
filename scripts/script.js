$(document).ready(function(){
    

    //Menu Movil Responsive

    let btnMenuMovil = $(".btn-menu-movil");
    let menuMovil = $(".menu-nav");
    let estadoBtnMovil = false;
    let bordeBarraNav = $(".menu-nav li");
    let anchoPantalla = $(window).width();
    


    //Comprobando ancho de la pantalla

    $(window).resize(function () { 
        anchoPantalla = $(window).width();

        //Mostrando Navegacion dependiendo el tamaño de la pantalla
        if(anchoPantalla > "1200"){
            //Mostar menu el PC
            menuMovil.css("display", "flex");

        }else{

            //Ocultar Menu en PC
            menuMovil.css("display", "none");
        }


        //Cerrar menu al tocar
        if(anchoPantalla < 1200){

            console.log("Ancho menos a 999px ")
            $(".menu-nav li a").on("click", function(){

                menuMovil.hide("fast");
            });
        }else{
            menuMovil.show();
        }
    });

    

    // Detectando click en el boton del menu movil
    btnMenuMovil.on("click", function () {
        

        if(estadoBtnMovil == false){
            //menuMovil.css("display", "flex");
            menuMovil.show("fast");
            bordeBarraNav.css("border", "none");
            estadoBtnMovil = true;
        }else{
            //menuMovil.css("display", "none");
            menuMovil.hide("fast");
            estadoBtnMovil = false;
        }
    });

    

    // CopyRight
    let textoFooter = $("#TextoFooter");
    let date = new Date;
    let ano = date.getFullYear();
    textoFooter.html("KONIK® " + ano);  
    
    //Posicion Scroll
    let flechaAbajo = $(".flecha-abajo");
    let barraNav = $(".barra-nav");
    
    $(window).scroll(function () { 
        console.log(scrollY)


         if (scrollY >= 0.1){

            barraNav.css("width","100%");
            barraNav.css("position" , "fixed");
            flechaAbajo.css("display", "none");
            

         }else{
            
             barraNav.css("position", "relative")
             flechaAbajo.css("display", "block");
            
         }
    });

 });

