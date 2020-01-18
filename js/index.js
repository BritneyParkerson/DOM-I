const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  }, 
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Images
let roundIMG = document.getElementById("cta-img");
roundIMG.setAttribute('src', siteContent["cta"]["img-src"])

// roundIMGevent.querySelector('.cta-img')
roundIMG.addEventListener('mouseenter', () => {
  roundIMG.style.transform = "scale(1.2)";
  roundIMG.style.transition = "all 0.3s";
})
roundIMG.addEventListener('mouseleave', () => {
  roundIMG.style.transform = "scale(1)";
  roundIMG.style.transition = "all 0.3s";
})

let borderIMG = document.getElementById("middle-img");
borderIMG.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//Edit Background
document.body.style.backgroundColor = "#50BFE6"

let bodyBG = document
bodyBG.addEventListener('click', () => {event.target.style.backgroundColor = '#29AB87'})

//Navigation
let navMenu = document.querySelectorAll("a");
navMenu[0].textContent = siteContent["nav"]["nav-item-1"];
navMenu[1].textContent = siteContent["nav"]["nav-item-2"];
navMenu[2].textContent = siteContent["nav"]["nav-item-3"];
navMenu[3].textContent = siteContent["nav"]["nav-item-4"];
navMenu[4].textContent = siteContent["nav"]["nav-item-5"];
navMenu[5].textContent = siteContent["nav"]["nav-item-6"];

 navMenu.forEach(element=>{element.style.color="green"})
 navMenu.forEach(element=>{element.style.backgroundColor="#FEFEFA"})

navMenu[0].addEventListener('click', () => {event.target.style.color = '#FEFEFA'})
navMenu[0].addEventListener('click', () => {event.target.style.backgroundColor = '#FD5B78'})

navMenu[1].addEventListener('click', () => {event.target.style.color = '#FEFEFA'})
navMenu[1].addEventListener('click', () => {event.target.style.backgroundColor = '#FD5B78'})

navMenu[2].addEventListener('click', () => {event.target.style.color = '#FEFEFA'})
navMenu[2].addEventListener('click', () => {event.target.style.backgroundColor = '#FD5B78'})

navMenu[3].addEventListener('click', () => {event.target.style.color = '#FEFEFA'})
navMenu[3].addEventListener('click', () => {event.target.style.backgroundColor = '#FD5B78'})

navMenu[4].addEventListener('click', () => {event.target.style.color = '#FEFEFA'})
navMenu[4].addEventListener('click', () => {event.target.style.backgroundColor = '#FD5B78'})

navMenu[5].addEventListener('click', () => {event.target.style.color = '#FEFEFA'})
navMenu[5].addEventListener('click', () => {event.target.style.backgroundColor = '#FD5B78'})


let stories = document.createElement('a');
stories.textContent = "Stories"
let parentElement = document.querySelector('nav');
parentElement.appendChild(stories) 

let mainPage = document.createElement('a');
mainPage.textContent = "Main Page"
parentElement.prepend(mainPage) 

stories.style.color = "#FEFEFA"
stories.style.backgroundColor = "#FD5B78"
mainPage.style.color = "#FEFEFA"
mainPage.style.backgroundColor = "#FD5B78"

stories.addEventListener('click', () => {event.target.style.color = 'green'})
stories.addEventListener('click', () => {event.target.style.backgroundColor = '#FEFEFA'})

mainPage.addEventListener('click', () => {event.target.style.color = 'green'})
mainPage.addEventListener('click', () => {event.target.style.backgroundColor = '#FEFEFA'})


//Header
let link = document.body.getElementsByTagName("a")
let ctaH1 = document.body.querySelector(".cta-text h1")
ctaH1.textContent = siteContent['cta']["h1"]

ctaH1.style.color = '#FD5B78'
ctaH1.style.backgroundColor = '#FEFEFA'

ctaH1.addEventListener('mouseenter', () => {
  ctaH1.style.transform = "scale(1.2)";
  ctaH1.style.transition = "all 0.3s";
})
ctaH1.addEventListener('mouseleave', () => {
  ctaH1.style.transform = "scale(1)";
  ctaH1.style.transition = "all 0.3s";
})

//Button
let ctaBTN = document.body.querySelector(".cta-text button")
ctaBTN.textContent = siteContent['cta']["button"]
ctaBTN.style.color = "#FD5B78"
ctaBTN.style.borderColor = "#FD5B78"
ctaBTN.style.backgroundColor = "#FEFEFA"

ctaBTN.addEventListener('click', () => {event.target.style.color = '#FEFEFA'})
ctaBTN.addEventListener('click', () => {event.target.style.borderColor = '#FD5B78'})
ctaBTN.addEventListener('click', () => {event.target.style.backgroundColor = '#FD5B78'})

//Main Content Section

//Top
let mainTopH4 = document.body.querySelectorAll(".main-content .top-content .text-content h4")
let mainTopP = document.body.querySelectorAll(".main-content .top-content .text-content p")



mainTopH4[0].textContent = siteContent['main-content']["features-h4"] 
mainTopH4[0].style.color='#FD5B78'
mainTopH4[0].style.backgroundColor='#FEFEFA'

mainTopH4[1].textContent = siteContent['main-content']["about-h4"]
mainTopH4[1].style.color='#FD5B78'
mainTopH4[1].style.backgroundColor='#FEFEFA'

mainTopP[0].textContent = siteContent['main-content']["features-content"]
mainTopP[0].style.color='#FEFEFA'
mainTopP[0].style.backgroundColor='#FD5B78'

mainTopP[1].textContent = siteContent['main-content']['about-content']
mainTopP[1].style.color='#FEFEFA'
mainTopP[1].style.backgroundColor='#FD5B78'

//Bottom

let mainBottomH4 = document.body.querySelectorAll(".main-content .bottom-content .text-content h4")
let mainBottomP = document.body.querySelectorAll(".main-content .bottom-content .text-content p")



mainBottomH4[0].textContent = siteContent['main-content']["features-h4"]
mainBottomH4[0].style.color='#FD5B78'
mainBottomH4[0].style.backgroundColor='#FEFEFA'

mainBottomH4[1].textContent = siteContent['main-content']["about-h4"]
mainBottomH4[1].style.color='#FD5B78'
mainBottomH4[1].style.backgroundColor='#FEFEFA'

mainBottomH4[2].textContent = siteContent['main-content']["vision-h4"]
mainBottomH4[2].style.color='#FD5B78'
mainBottomH4[2].style.backgroundColor='#FEFEFA'

mainBottomP[0].textContent = siteContent['main-content']["features-content"]
mainBottomP[0].style.color='#FEFEFA'
mainBottomP[0].style.backgroundColor='#FD5B78'

mainBottomP[1].textContent = siteContent['main-content']['about-content']
mainBottomP[1].style.color='#FEFEFA'
mainBottomP[1].style.backgroundColor='#FD5B78'

mainBottomP[2].textContent = siteContent['main-content']["vision-content"]
mainBottomP[2].style.color='#FEFEFA'
mainBottomP[2].style.backgroundColor='#FD5B78'


//Contact Section

let contactH4 = document.body.querySelector(".contact h4");
let contactP = document.body.querySelectorAll(".contact p");

contactH4.textContent = siteContent["contact"]["contact-h4"]
contactH4.style.color='#FD5B78'
contactH4.style.backgroundColor='#FEFEFA'


contactP[0].textContent = siteContent['contact']["address"]
contactP[0].style.color='#FEFEFA'
contactP[0].style.backgroundColor='#FD5B78'

contactP[1].textContent = siteContent['contact']["phone"]
contactP[1].style.color='#FEFEFA'
contactP[1].style.backgroundColor='#FD5B78'

contactP[2].textContent = siteContent['contact']["email"]
contactP[2].style.color='#FEFEFA'
contactP[2].style.backgroundColor='#FD5B78'


//Footer
let footer = document.body.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"]
footer.style.color='#FD5B78'
footer.style.backgroundColor='#FEFEFA'



