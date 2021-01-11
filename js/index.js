const siteContent = {
   nav: {
      "nav-item-1": "Services",
      "nav-item-2": "Product",
      "nav-item-3": "Vision",
      "nav-item-4": "Features",
      "nav-item-5": "About",
      "nav-item-6": "Contact",
      "img-src": "img/logo.png",
   },
   cta: {
      h1: "DOM Is Awesome",
      button: "Get Started",
      "img-src": "img/header-img.png",
   },
   "main-content": {
      "features-h4": "Features",
      "features-content":
         "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "about-h4": "About",
      "about-content":
         "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "middle-img-src": "img/mid-page-accent.jpg",
      "services-h4": "Services",
      "services-content":
         "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "product-h4": "Product",
      "product-content":
         "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "vision-h4": "Vision",
      "vision-content":
         "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
   },
   contact: {
      "contact-h4": "Contact",
      address: "123 Way 456 Street Somewhere, USA",
      phone: "1 (888) 888-8888",
      email: "sales@greatidea.io",
   },
   footer: {
      copyright: "Copyright Great Idea! 2018",
   },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// quasi-iterating through text patterns

const nav = document.querySelectorAll("nav a");
Array.from(nav).forEach(
   (i, j) => (i.textContent = siteContent.nav["nav-item-" + (j + 1)])
);

// adding two entries in nav

const navnew1 = document.createElement("a");
navnew1.href = "#";
navnew1.textContent = "Team";
const navnew2 = document.createElement("a");
navnew2.href = "#";
navnew2.textContent = "Sitemap";

document.querySelector("nav").prepend(navnew1);
document.querySelector("nav").appendChild(navnew2);

// changing nav text to green

document
   .querySelectorAll("nav a")
   .forEach((i) => i.setAttribute("style", "color:green"));

// cta contents and manually adding <br> to cta

const domIsAwesome = document.querySelector(".cta-text h1");
domIsAwesome.textContent = "DOM";
domIsAwesome.appendChild(document.createElement("br"));
domIsAwesome.appendChild(document.createTextNode(" IS"));
domIsAwesome.appendChild(document.createElement("br"));
domIsAwesome.appendChild(document.createTextNode(" Awesome"));

//cta buttons and img
document.querySelector(".cta-text button").textContent = siteContent.cta.button;

document.querySelector("#cta-img").src = siteContent.cta["img-src"];

// preparing to fill in the middle texts
// constructing a temp array to reduce lines of code
const ContentData = [
   siteContent["main-content"]["features-h4"],
   siteContent["main-content"]["features-content"],
   siteContent["main-content"]["about-h4"],
   siteContent["main-content"]["about-content"],
   siteContent["main-content"]["services-h4"],
   siteContent["main-content"]["services-content"],
   siteContent["main-content"]["product-h4"],
   siteContent["main-content"]["product-content"],
   siteContent["main-content"]["vision-h4"],
   siteContent["main-content"]["vision-content"],
];

// filling content for middle texts
document
   .querySelectorAll(".main-content .text-content *")
   .forEach((i, j) => (i.textContent = ContentData[j]));

// filling content for middle banner
document.querySelector("#middle-img").src =
   siteContent["main-content"]["middle-img-src"];

const contactData = [
   siteContent["contact"]["contact-h4"],
   siteContent["contact"]["address"],
   siteContent["contact"]["phone"],
   siteContent["contact"]["email"],
];

document
   .querySelectorAll(".contact *")
   .forEach((i, j) => (i.textContent = contactData[j]));

// fixing address <br>, selecting first p in contact
const address = document.querySelector(".contact p");
address.textContent = "123 Way 456 Street";
address.appendChild(document.createElement("br"));
address.appendChild(document.createTextNode("Somewhere, USA"));

document.querySelector("footer p").textContent =
   siteContent["footer"]["copyright"];
