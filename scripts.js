

document.getElementById("mostrar").style.display="none";

function capturarDatos(){

    let cantidadDinero= Number(document.getElementById("cifra").value);
    let moneda1= document.getElementById("inputSelectMoneda1").value;
    let moneda2= document.getElementById("inputSelectMoneda2").value;

     if(cantidadDinero == ""){
        alert("Digite el valor a convertir")
     }else {
         calcular(moneda1, moneda2, cantidadDinero)
     }    
}

function calcular(Moneda1, Moneda2, CantidadDinero){
    document.getElementById("mostrar").style.display="block";
    

    let usd= 3895 ;
    let eur = 4409;
    let gbp = 5228;
    let mxn = 187;
    let cop = 0;
    let resultado = 0;
    
    if(Moneda1 === "USD" && Moneda2 === "EUR"){
       resultado = CantidadDinero * (usd/eur);

    }else if(Moneda1 === "USD" && Moneda2 === "GBP"){
        resultado = CantidadDinero * (usd / gbp)
        
    }else if(Moneda1 === "USD" && Moneda2 === "MXN"){   
        resultado = CantidadDinero * (usd / mxn)

    }else if(Moneda1 === "USD" && Moneda2 === "COP"){
        resultado = CantidadDinero * usd

    }else if(Moneda1 === "USD" && Moneda2 === "USD"){
        resultado = CantidadDinero

    }else if(Moneda1 === "EUR" && Moneda2 === "USD"){
        resultado = CantidadDinero * (eur / usd)

    }else if (Moneda1 === "EUR" && Moneda2 === "GBP"){
        resultado = CantidadDinero*(eur / gbp)

    }else if(Moneda1 === "EUR" && Moneda2 === "MXN"){
        resultado = CantidadDinero * (eur / mxn)
        
    }else if(Moneda1 === "EUR" && Moneda2 === "COP"){
        resultado = CantidadDinero * eur    

    }else if(Moneda1 === "EUR" && Moneda2 === "EUR"){
        resultado = CantidadDinero
        
    }else if (Moneda1 === "GBP" && Moneda2 === "USD"){
        resultado = CantidadDinero * (gbp / usd)
        
    }else if (Moneda1 === "GBP" && Moneda2 === "EUR"){
        resultado = CantidadDinero * (gbp / eur)

    }else if (Moneda1 === "GBP" && Moneda2 === "MXN"){
        resultado = CantidadDinero * (gbp / mxn)
    
    }else if (Moneda1 === "GBP" && Moneda2 === "COP"){
        resultado = CantidadDinero * gbp

    }else if(Moneda1 === "GBP" && Moneda2 === "GBP"){
        resultado = CantidadDinero

    }else if(Moneda1 === "MXN" && Moneda2 === "USD"){
        resultado = CantidadDinero*(mxn / usd)

    }else if(Moneda1 === "MXN" && Moneda2 === "EUR"){
        resultado = CantidadDinero*(mxn / eur)

    } else if(Moneda1 === "MXN" && Moneda2 === "GBP"){
        resultado = CantidadDinero*(mxn / gbp)

    }else if(Moneda1 === "MXN" && Moneda2 === "COP"){
        resultado = CantidadDinero * mxn

    }else if(Moneda1 === "MXN" && Moneda2 === "MXN"){
        resultado = CantidadDinero

    }else if(Moneda1 === "COP" && Moneda2 === "USD"){
        resultado = CantidadDinero/ usd

    }else if(Moneda1 === "COP" && Moneda2 === "EUR"){
        resultado = CantidadDinero/ eur

    }else if(Moneda1 === "COP" && Moneda2 === "GBP"){
        resultado = CantidadDinero/ gbp

    }else if(Moneda1 === "COP" && Moneda2 === "MXN"){
        resultado = CantidadDinero/ mxn

    }else{
        Moneda1 === "COP" && Moneda2 === "COP"
        resultado = CantidadDinero
    }
    document.getElementById("inputResultado").value = resultado.toFixed(2);

}
