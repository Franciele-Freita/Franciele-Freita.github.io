let sections = document.querySelectorAll('section');
let naviLinks = document.querySelectorAll('header li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            naviLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header li a[href*=' + id + ']').classList.add('active');
            })
        }
        
    })
    
}



