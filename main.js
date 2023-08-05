$(document).ready(function(){
  

  $('#telefone').mask('(00)00000-0000')

  $('#formulario').validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      mensagem: {
        required: true
      }
      
    },
    
    messages:  {
      nome: "Favor insira seu nome completo",
      email: "Favor insira seu e-mail",
      telefone: "Favor insira seu telefone",
      mensagem:"Favor digite sua mensagem"

    },
    
  })
})