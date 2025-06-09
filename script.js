// A função que será chamada pelo botão no HTML
function mostrarSurpresa() {
  
  // 1. Encontra o elemento da imagem no HTML usando o ID seguro que definimos
  const imagem = document.getElementById('imagemAmor');
  
  // 2. Muda o estilo CSS da imagem para torná-la visível
  // 'block' é um valor comum para exibir elementos
  if (imagem.style.display === 'none') {
    imagem.style.display = 'block';
    
    // 3. Mostra o alerta que você queria!
    alert("Te amo amorzão ♥");
  } else {
    imagem.style.display = 'none';
  }
}