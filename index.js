var js_n1;
var js_n2;
var js_soma;

function soma() {
  /* Entrada de Dados */
  js_n1 = parseInt(document.MeuFormulario.f_n1.value);
  js_n2 = parseInt(document.MeuFormulario.f_n2.value);
  /* Processamento de Dados */
  js_soma = js_n1 + js_n2;
  /* Saída de Dados */
  window.alert("Resultado da Somatória = " + js_soma.toString());
}
