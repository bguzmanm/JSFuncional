function actualizarUsuario(usuarios, usuarioActualizado, id) {
  return usuarios.map((usuario) => (usuario.id === id ? usuarioActualizado : usuario));
}

const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'María' },
  { id: 3, nombre: 'Pedro' }
];

const usuarioActualizado = { id: 2, nombre: 'Ana' };

const usuariosActualizados = actualizarUsuario(usuarios, usuarioActualizado, usuarioActualizado.id);

console.log(usuarios);
console.log(usuariosActualizados);
