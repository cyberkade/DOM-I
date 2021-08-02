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
navLinks.forEach((item, index)=>  item.textContent = siteContent['nav'][`nav-item-${[index + 1]}`])

const headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent['cta']['img-src']

const h1 = document.querySelector('.cta-text h1');
h1.textContent = siteContent['cta']['h1'];

const btn = document.querySelector('.cta-text button:nth-of-type(1)');
btn.textContent = siteContent['cta']['button'];

const topH4 = document.querySelectorAll('.top-content h4');
console.log(topH4);
topH4[0].textContent = siteContent['main-content']['features-h4'];
topH4[1].textContent = siteContent['main-content']['about-h4'];

const topP = document.querySelectorAll('.top-content p');
topP[0].textContent = siteContent['main-content']['features-content'];
topP[1].textContent = siteContent['main-content']['about-content'];

const mainImg = document.querySelector('#middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const bottomH4 = document.querySelectorAll('.bottom-content h4');
bottomH4[0].textContent = siteContent['main-content']['services-h4'];
bottomH4[1].textContent = siteContent['main-content']['product-h4'];
bottomH4[2].textContent = siteContent['main-content']['vision-h4'];

const bottomP = document.querySelectorAll('.bottom-content p');
bottomP[0].textContent = siteContent['main-content']['services-content'];
bottomP[1].textContent = siteContent['main-content']['product-content'];
bottomP[2].textContent = siteContent['main-content']['vision-content'];

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4']

const addressP = document.querySelectorAll('.contact p')
addressP[0].textContent = siteContent['contact']['address'];
addressP[1].textContent = siteContent['contact']['phone'];
addressP[2].textContent = siteContent['contact']['email'];

const contact = document.querySelector('.contact');

contact.nextElementSibling.textContent = siteContent['footer']['copyright']
