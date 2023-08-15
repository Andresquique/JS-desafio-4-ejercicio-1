
let ingresoTotal = 0;
let egresoTotal = 0;
const anual = [];

let balance =(ing , out , texto)=>{
    if (ing > out){
        alert(`La empresa gano $${ing - out} en ${texto}`);
    }
    else if (ing < out){
        alert(`La empresa perdio $${out- ing } en ${texto}`);
    }
    else{
        alert(`La empresa no gano ni perdio dinero en ${texto}`);
    }
}

const input = () =>{
    for (let index = 0; index < 12; index++) {

        let periodo = prompt("ingrese el mes");
        let ingreso = Number(prompt("monto que ingreso"));
        let egreso = Number(prompt("monto que egreso"));
        
        balance(ingreso,egreso,periodo);

        let mes ={
            periodo,
            ingreso,
            egreso
        }

        anual.push(mes);
    }
}

let suma = () =>{ 
    for (let index = 0; index < anual.length; index++){
        ingresoTotal += anual[index].ingreso;
        egresoTotal += anual[index].egreso; 
        }
}

input();

suma();

alert(`Ingreso total anual $${ingresoTotal}, Egreso total anual $${egresoTotal}`);

balance(ingresoTotal,egresoTotal,"el año");


