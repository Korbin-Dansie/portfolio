// Get .mainContent and update .containerMainContent size to match

function resizeMainContent(){
    const main = document.getElementsByClassName('mainContent')[0];
    const container = document.getElementsByClassName('containerMainContent')[0];
    container.style.height  = `${main.clientHeight}px`;    
} resizeMainContent();

window.addEventListener('resize', resizeMainContent);