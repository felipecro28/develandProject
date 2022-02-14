class Usuario{
    constructor(){
    this.arr = [];
    this.view = new ValidaLogin();
    }
    
    guardarUsuario(){
        const login = $('#emailForm').val();
        const senha = $('#confirmaSenha').val();
        const users = new TratamentoUsuario(login, senha);
        this.arr.push(users);
    }

    logar(){
        const log = new ValidaLogin()
        log.validar(this.arr)
        console.log(this.arr)
    }
}

const usuarioFinal = new Usuario()


$('#botaoForm').click((evento) =>{
    evento.preventDefault()
    usuarioFinal.guardarUsuario()
})


$('#botaoLogin').click((evento) => {
    evento.preventDefault()
    usuarioFinal.logar()
}


)