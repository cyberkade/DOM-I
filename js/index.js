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

const navLinks = document.querySelectorAll('a');
navLinks.forEach((item, index)=>  {
  item.textContent = siteContent['nav'][`nav-item-${[index + 1]}`];
  item.style.color = 'green';
})

const nav = document.querySelector('nav');
const myLink1 = document.createElement('a');
const myLink2 = document.createElement('a');
myLink1.textContent = 'Investors';
myLink2.textContent = 'Get A Quote';
myLink1.style.color = 'green'
myLink2.style.color = 'green'
nav.appendChild(myLink1);
nav.prepend(myLink2);

const headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent['cta']['img-src']

const h1 = document.querySelector('.cta-text h1');
const newline = "\n";
h1.style.whiteSpace = 'pre'
h1.textContent = 'DOM' + newline + 'IS' + newline + 'AWESOME';
// h1.innerHTML = 'DOM </br> Is </br> Awesome';


const btn = document.querySelector('.cta-text button:nth-of-type(1)');
btn.textContent = siteContent['cta']['button'];
btn.style.borderRadius = '20px';

const h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];

const p = document.querySelectorAll('p');
p[0].textContent = siteContent['main-content']['features-content'];
p[1].textContent = siteContent['main-content']['about-content'];
p[2].textContent = siteContent['main-content']['services-content'];
p[3].textContent = siteContent['main-content']['product-content'];
p[4].textContent = siteContent['main-content']['vision-content'];

const mainImg = document.querySelector('#middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4']

const addressP = document.querySelectorAll('.contact p')
addressP[0].style.whiteSpace = 'pre'
addressP[0].textContent = '123 Way 456 Street' + newline + 'Somewhere, USA';
addressP[1].textContent = siteContent['contact']['phone'];
addressP[2].textContent = siteContent['contact']['email'];

const contact = document.querySelector('.contact');
contact.nextElementSibling.textContent = siteContent['footer']['copyright']

// STRETCH //
const data = {
  "nav": {
    "nav-item-1": "Product",
    "nav-item-2": "Services",
    "nav-item-3": "About",
    "nav-item-4": "Contact",
    "nav-item-5": "Vision",
    "nav-item-6": "Featured",
  },
  "cta": {
    "h1": "DOM Is My Enemy",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "investors-h4":"Investors",
    "investors-content": "Investors content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "321 Way 654 Street Anywhere, Japan",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
btn.addEventListener('click',(e)=>{
e.preventDefault();
h1.textContent = data['cta']['h1'];
addressP[0].textContent = data['contact']['address']
//creating new content for top-content
const top = document.body.querySelector('.top-content');
const card = document.createElement('div');
const heading = document.createElement('h4');
const text = document.createElement('p');
p[0].style.padding = '0px 20px 0px 0px'
p[1].style.padding = '0px 20px 0px 0px'
text.style.padding = '0px 20px 0px 0px'
heading.textContent = data['main-content']['investors-h4'];
text.textContent = data['main-content']['investors-content'];
card.prepend(heading);
card.append(text);
top.appendChild(card);
// updating styles on page
mainImg.style.borderRadius = '15px'
contact.style.color = 'white';
contact.style.backgroundColor = 'black';
contact.style.width = '170px';
contact.style.padding = '10px';
contact.style.borderRadius = '15px';
btn.classList.add('hide');
myLink2.classList.add('hide');
})


