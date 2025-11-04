document.getElementById('usuarioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    
    fetch('http://localhost:5000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre: nombre, email: email })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        loadUsuarios();  // Recargar la lista de usuarios
    });
});

// Cargar usuarios
function loadUsuarios() {
    fetch('http://localhost:5000/usuarios')
    .then(response => response.json())
    .then(data => {
        let usuariosList = document.getElementById('usuariosList');
        usuariosList.innerHTML = '';
        data.forEach(usuario => {
            let li = document.createElement('li');
            li.textContent = `${usuario.nombre} - ${usuario.email}`;
            usuariosList.appendChild(li);
        });
    });
}

// Cargar los usuarios al cargar la página
loadUsuarios();
