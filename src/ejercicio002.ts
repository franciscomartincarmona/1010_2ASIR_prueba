/*he creado dos variables con el nombre y edad y 
le he asignado los datos de un personaje, 
se han indicado los tipos de datos, 
en este caso string para nombre y number para edad.*/
let nombreP:string = "Rafa Nadal";
let edad:number = 34;
const PERSONAJE: { nombre:string, edad:number } = {
    nombre: nombreP,
    edad: edad
}
console.log(PERSONAJE);