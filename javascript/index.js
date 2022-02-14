hamburguerMenu = $('.lineMenuDiv')

hamburguerMenu.on('click', function(){
    const navMenu = $('.navMenuDiv ul')
    const displayNav = navMenu.css('display')
    const loginButton = $('.listaLogin')
    if (displayNav == 'none'){
        navMenu.css('display', 'flex')
        navMenu.css('background-color', '#0d2952a6')
    } else{
        navMenu.css('display', 'none')
    }
})