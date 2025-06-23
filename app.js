document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioTarea');
    const listaTareas = document.getElementById('listaTareas');
  
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const nombre = document.getElementById('nombre').value.trim();
      const fecha = document.getElementById('fecha').value;
      const descripcion = document.getElementById('descripcion').value.trim();
      const tipo = document.getElementById('tipo').value;
      const prioridadSeleccionada = formulario.querySelector('input[name="prioridad"]:checked');
  
      if (!nombre || !fecha || !tipo || !prioridadSeleccionada) {
        alert('Por favor, completa !!todos los campos obligatorios¡¡.');
        return;
      }
  
      const prioridad = prioridadSeleccionada.value;
  
      const nuevaTarea = document.createElement('div');
      nuevaTarea.classList.add('tarea');
  
      nuevaTarea.innerHTML = `
        <h3>${nombre}</h3>
        <p><strong> Fecha:</strong> ${fecha}</p>
        <p><strong> Descripción:</strong> ${descripcion || 'Sin descripción'}</p>
        <p><strong> Tipo:</strong> ${tipo}</p>
        <p><strong> Prioridad:</strong> ${prioridad}</p>
      `;
  
      listaTareas.appendChild(nuevaTarea);
      formulario.reset();
    });
  });
  