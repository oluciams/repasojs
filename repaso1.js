let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
  }
  
  console.log (pedro["edad"])
  
  pedro.estatura = 1.8
  
  delete pedro.activo
  //console.log (pedro["estatura"])
  
  //recorriendo el objeto
  for (let llave in pedro){
    //if(pedro.hasOwnProperty(llave)){
      console.log(llave + ":" + pedro[llave])
    }
  
  
  