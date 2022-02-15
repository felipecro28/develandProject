class Usuario{
    constructor(){
    this.arr = []
    
    }
    
    guardarUsuario(){
        const login = $('#emailForm').val();
        const senha = $('#confirmaSenha').val();
        const users = new TratamentoUsuario(login, senha);
        this.arr.push(users);

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
        listaUser.push(
        {
          userCad: login,
          senhaCad: senha
        }
        )
        
        localStorage.setItem('listaUser', JSON.stringify(listaUser))


        $('#divBotao').append(`<p id="cadastroSucesso"> Usuário cadastrado com sucesso! </p>`)
        setTimeout(()=>{
            window.location.href = '../index.html'
        }, 2000)
        
    }

    logar(){
        const log = new ValidaLogin()
        log.validar(localStorage)
    }
}

const usuarioFinal = new Usuario()


$('#formCadastro').submit((evento) =>{
    evento.preventDefault()
    usuarioFinal.guardarUsuario()
})


$('#botaoLogin').click((evento) => {
    evento.preventDefault()
    usuarioFinal.logar()
}


)