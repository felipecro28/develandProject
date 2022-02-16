class ValidaLogin{
    
    mostrar(){
        $('#divBotao').append(`<p id="cadastroSucesso"> Usuário cadastrado com sucesso! </p>`)
        setTimeout(()=>{
            window.location.href = '../index.html'
        }, 1000)
    }

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
                login = ""
                senha = ""

            } else{
                alert('Login e/ou senha incorretos!')
                login = ""
                senha = ""
                document.location.reload(true)
            }
            
        });
    }
}
