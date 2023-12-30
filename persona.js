function Persona(nombre, edad, dni, nacionalidad,genero,estadocivil) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.nacionalidad = nacionalidad;
    this.genero = genero ;
    this.estadocivil = estadocivil;
}



function agregarPersona() {
    let personaNueva = new Persona(personaNombre.value, +personaEdad.value, +personaDni.value, personaNacionalidad.value , personaGernero.value, estadocivil.value);

    planillaGeneral.push(personaNueva);

};

async function traerPersonas (){ 
    const response = await fetch ("./personas.json");
    if (response.ok){
        planillaJson = await response.json();
;
        
    }};




