// Get .mainContent and update .containerMainContent size to match
function resizeMainContent(){
    const main = document.getElementsByClassName('mainContent')[0];
    const container = document.getElementsByClassName('containerMainContent')[0];
    container.style.height  = `${main.clientHeight}px`;    
} resizeMainContent();

window.addEventListener('resize', resizeMainContent);

// Change nav links to coloms, instead of rows, when they would wrap
function resizeNavLinks(){
    const navBar = document.getElementsByClassName('navLinks')[0];
    const links = navBar.querySelectorAll("li");
    let linksWidth = new Number();

    // First set navbar to defult ROW flex direction
    navBar.style.flexDirection = 'row'

    for(let element of links){
        linksWidth += Math.ceil(element.clientWidth);
        console.log('element: ' + Math.ceil(element.clientWidth));

    }

    if(linksWidth >= navBar.clientWidth){
        navBar.style.flexDirection = 'column'
    }
    
} resizeNavLinks();

window.addEventListener('resize', resizeNavLinks);
