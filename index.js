const hamburguerMenu = $('.lineMenuDiv')

hamburguerMenu.on('click', function(){
    const navMenu = $('.navMenuDiv ul')
    const displayNav = navMenu.css('display')
    if (displayNav == 'none'){
        navMenu.append("<li><a>Login </a></li>")
        navMenu.css('display', 'flex')
        navMenu.css('background-color', '#0d2952a6')
    } else{
        navMenu.css('display', 'none')
        $('.navMenuDiv li:last-child').remove()
    }
})