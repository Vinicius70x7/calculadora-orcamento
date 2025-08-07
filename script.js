function calcularOrcamento() {
  const renda = parseFloat(document.getElementById('renda').value);
  const fixas = parseFloat(document.getElementById('despesasFixas').value);
  const variaveis = parseFloat(document.getElementById('despesasVariaveis').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(renda) || isNaN(fixas) || isNaN(variaveis)) {
    resultado.innerText = "Por favor, preencha todos os campos com valores válidos.";
    return;
  }

  const totalDespesas = fixas + variaveis;
  const saldo = renda - totalDespesas;

  let mensagem = `Seu saldo mensal é R$ ${saldo.toFixed(2)}. `;

  if (saldo > 0) {
    mensagem += "Parabéns! Você está no azul.";
  } else if (saldo === 0) {
    mensagem += "Atenção: você gastou tudo que ganhou.";
  } else {
    mensagem += "Cuidado! Você está no vermelho.";
  }

  resultado.innerText = mensagem;
}
