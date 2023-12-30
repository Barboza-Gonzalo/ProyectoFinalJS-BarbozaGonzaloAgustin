function dibujarPlanilla() {
    const vistaPlanilla = document.getElementById("items");
    vistaPlanilla.innerHTML = '';
    planillaJson.forEach((indiv) => {
        vistaPlanilla.innerHTML = vistaPlanilla.innerHTML +
            `<tr>
                <td>${indiv.nombre}</td>
                <td>${indiv.dni}</td>
                <td>${indiv.edad}</td>
                <td>${indiv.nacionalidad}</td>
                <td>${indiv.genero}</td>
                <td>${indiv.estadocivil}</td>
                </tr>    
                `;
    });
}


function limpiarForm(formulario) {
    formulario.reset();
};




function guardarPlanilla() {
    localStorage.setItem('planilla', JSON.stringify(planillaGeneral));
};


function traerPlanilla() {
    planillaGeneral = JSON.parse(localStorage.getItem('planilla'));
};


function validarCampos() {
    personaNombre.value === '' || personaEdad.value === '' || personaDni.value === '' || personaNacionalidad.value === '' || personaGernero.value === '' || estadocivil.value === '' ? Swal.fire({ title: "Rellene todos los campos", }) : personaEdad.value < 0 ? Swal.fire({ title: "no se permiten numero negativos", }) : agregarPersona();;
};









