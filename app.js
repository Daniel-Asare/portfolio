const navBtn = document.querySelector('.nav-icon')
const navLinks = document.querySelector('.nav-links')
const body = document.querySelector('body');
const navbar = document.querySelector('header');
const topLink = document.querySelector('.top-link')
const links = document.querySelectorAll('.link')

// navbar
navBtn.addEventListener('click',function(){
navLinks.classList.toggle('nav-links-toggle')
})

window.addEventListener('scroll',function(){ 
 const windowHeight = window.pageYOffset;
 const navHeight = navbar.getBoundingClientRect().height;
//  console.log(navHeight);
//  console.log(windowHeight);
//  fixed navbar
if(windowHeight > navHeight){
  navbar.classList.add('header-fixed')
}
else{
  navbar.classList.remove('header-fixed')
}

// toplink
if(windowHeight > 300){
  // console.log('yes');
  topLink.classList.add('top-link-visible')
} else{
  topLink.classList.remove('top-link-visible')
}
})

// smooth scroll
topLink.addEventListener('click',function(e){
  e.preventDefault()
  const href = topLink.getAttribute('href');
  // console.log(scrollLink);
  const pageOff = document.querySelector(href).offsetTop;
  console.log(pageOff);

  scroll({
    top: pageOff,
    behavior:"smooth"
  })
})

window.setTimeout(()=>{
// close after click
window.addEventListener('click',function(){
  if(window.innerWidth <= 900){
    links.forEach((link)=>{
      link.addEventListener('click',function(){
        navLinks.classList.remove('nav-links-toggle')
      })
    })
  }}
)
},1)



  

// date
const date = document.querySelector('#date');
date.innerText = new Date().getFullYear();