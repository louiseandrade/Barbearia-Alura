document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if (document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
  alert ("Prontinho! Você receberá atualizações por e-mail")
  }else{
  alert ("Preencha os dados de nome, e-mail e assunto")
  }
}