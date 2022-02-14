class TratamentoUsuario{
    constructor(login, senha){
        try{
            if (login.length <= 4)
            throw new Error("Login deve ter mais que 04 caracteres!")

            if(senha.length <=4)
            throw new Error("Login deve ter mais que 04 caracteres!")
        } catch(error){
        alert(error.message)
    }
    this.login = login;
    this.senha = senha;
    this.arr = []
    }
}


