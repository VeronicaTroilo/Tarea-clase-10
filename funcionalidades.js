let array = [3, 5, 8, 4];
let mayor = 20;
function buscarelmayor(mayor)
{
        if (array[0] > array[1]) {
            mayor = array[0]
            console.log("El numero mayor es: " + mayor)
        } else if (array[1] > array[2]) { 
            mayor = array[2]
            console.log("El numero mayor es: " + mayor)
        } else if(array[2]> array [3]){
                mayor = array[2]
                console.log("El numero mayor es: " + mayor)
        } else   { mayor=array[3]
            console.log("El numero mayor es: " + mayor)
        }
}    
buscarelmayor()


let array2 = [24,66,17];
let menor = 20;

function buscarelmenor(menor)
{
        if (array2[0] > array2[1]) {
            menor = array2[0]
            console.log("El numero menor es: " + menor)
        } else if (array2[1] > array2[2]) { 
            menor = array2[2]
            console.log("El numero menor es: " + menor)
        } else   { menor=array2[2]
            console.log("El numero menor es: " + menor)
        }
    }

buscarelmenor()



let numero = 23;
let resto;
resto = numero % 2;

function buscarpar(resultado)
{
  if(resto === 0){
    console.log("El numero "+ numero + " es par")
}
  else {console.log("El numero "+ numero +" es impar")}

}

buscarpar()
