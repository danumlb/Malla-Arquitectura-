const cursos = {
  dibujo: { desbloquea: ['taller1'] },
  matematica: { desbloquea: ['fisica'] },
  taller1: { desbloquea: [] },
  fisica: { desbloquea: [] }
};

function aprobarCurso(id) {
  const btn = document.getElementById(id);
  if (btn.classList.contains('aprobado') || btn.classList.contains('bloqueado')) return;
  btn.classList.add('aprobado');
  btn.disabled = true;
  cursos[id].desbloquea.forEach(siguiente => {
    document.getElementById(siguiente).classList.remove('bloqueado');
  });
}
