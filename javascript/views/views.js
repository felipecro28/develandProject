class ValidaLogin{
    validar(obj){
        const login = $('#login').val()
        const senha = $('#senha').val()
        let listaUser = []
        let validacaoUsuario = {
            user: '',
            senha: ''
        }
        listaUser = JSON.parse(localStorage.getItem('listaUser'))
        console.log(listaUser)
        listaUser.forEach(item => {
            if(login == item.userCad && senha == item.senhaCad){
                alert('Login realizado com sucesso!')
            } else{
                alert('Login e/ou senha incorretos!')
            }
            
        });
    }
}
