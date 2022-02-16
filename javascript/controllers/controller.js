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

        const log = new ValidaLogin()
        log.mostrar()

        
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


$('#formLogin').submit((evento) => {
    evento.preventDefault()
    usuarioFinal.logar()
})