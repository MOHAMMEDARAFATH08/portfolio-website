console.log("hello")
document.querySelector('.close').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.navbar').classList.toggle('navbarGo')
    if ( document.querySelector('.navbar').classList.contains('navbarGo'))
    {
         document.querySelector('.ham').style.display = 'inline';
         document.querySelector('.close').style.display = 'none';
    }
    else{
        document.querySelector('.ham').style.display = 'none';
        setTimeout(()=>{
            document.querySelector('.close').style.display = 'inline';
        },350);
    }
})
