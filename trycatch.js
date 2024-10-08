/*try{
    let division = 0 -0;
    console.log(division);
} catch (error){
console.log("Se ha producido un error", error.message)
} finally{
    console.log("tambien ejecuto esto")
}
    */

edad = -10
try {
    if(edad <0){
        throw "La edad no puede ser negativa"
    }
    if(edad > 160){
        throw "La edad no puede ser tan elevada"
    }
} catch (error){
    console.log("Error: ",error)
} finally {
    console.log("Tambien ejecuto esto")
}

