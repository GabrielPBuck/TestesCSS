    // Seleciona o botão e o elemento de resposta pelo ID
    const btnPorque = document.getElementById('btn-porque');
    const resposta = document.getElementById('resposta');

    // Adiciona um ouvinte de evento para quando o mouse passar por cima do botão
    btnPorque.addEventListener('mouseover', function() {
      resposta.style.display = 'block';
    });

    // Adiciona um ouvinte de evento para quando o mouse sair do botão
    btnPorque.addEventListener('mouseout', function() {
      resposta.style.display = 'none';
    });// JavaScript Document