function Bienvenido(){
    let nombre= prompt("Ingrese el nombre de usuario");
    return nombre;
}

let VerCatalogo= (nombre) => {return confirm(nombre+ " Deseas ver nuestro catalogo de Hardware?" );
}

function ValidarEdad(){
    let edad=confirm("Usted es mayor de edad");
    return edad;
}

function Menu(){
    return Number(prompt(" 1.- Placas de video\n 2.- Procesadores\n 3.- Rams\n 4.- Gabinetes\n 5.- Finalizar"));
}

function PlacasdeVideo(){
    return Number(prompt(" 1.- 3070ti asus\n 2.- 3060 ti Aorus\n 3.- 3080 Rog Strix"));

}
function Procesadores(){
    return Number(prompt(" 1.- Ryzen 5 \n 2.- Intel i5\n 3.- Intel i7"));

}

function Rams(){
    return Number(prompt(" 1.- Hyperx 3200mhz\n 2.- Corsair 3600mhz\n 3.- Hyperx 3600mhz"));

}

function Gabinetes(){
    return Number(prompt(" 1.- CoolerMaster \n 2.- Koolking\n 3.- Corsair "));

}


nombre=Bienvenido();
if(VerCatalogo(nombre))
if(ValidarEdad()){
    do{
            switch(valida=Menu()){
                case 1:{{
                        placasdevideo=PlacasdeVideo();
                        break;
                    }
                }
                case 2:{
                    procesadores=Procesadores();
                    break;
                }
                case 3:{
                    rams=Rams();
                    break;
                }
                case 4:{
                    gabinetes=Gabinetes();
                    break;
                }
                case 5:{
                    alert("Gracias por confiar!, Saludos!!");
                    break;
                }
                default:{
                    alert("La opcion ingresada es incorrecta");
                    break;
                }
        }


    }while(valida!=5);

}
else{
    alert(" Adios, Vuelva pronto!");
}