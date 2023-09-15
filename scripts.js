const buttons = document.querySelectorAll(".product p a");
const buttons1 = document.querySelectorAll(".product-button");
buttons1.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    var parent = button.closest(".product");
    let isZoomed = parent.classList.contains("zoomed");

    if (!isZoomed) {
      const centerX = window.innerWidth / 2;
      const parentRect = parent.getBoundingClientRect();
      const parentCenterX = parentRect.left + parentRect.width / 2;
      const translateX = centerX - parentCenterX;

      const centerY = window.innerHeight / 2;
      const parentCenterY = parentRect.top + parentRect.height / 2;
      const translateY = centerY - parentCenterY - "0.5em";

      gsap.to(parent, {
        x: translateX,
        y: translateY,
        scale:1.5,
        "height":"80%",
        zIndex: 9999,
        opacity: 1,
        duration: 0.5,
        "background-position": "1.5em 8em",
        "background-size": "10em",
        ease: "power2.out",
      });
      gsap.to(parent.querySelector(".titre"), {
        fontSize: "1em", // Remplacez par la taille souhaitée en pixels
        duration: 0.5,
        left: "2.7em", // Remplacez par la position horizontale souhaitée en pixels
        "margin-top": "0", // Ajoutez cette ligne pour supprimer la marge supérieure
        width: "10em", // Remplacez par la largeur souhaitée en pixels
        ease: "power2.out"
      });
      gsap.to(parent.querySelector("p a"), {
        "margin-top": "10em",
        "margin-left": "-15.3em",
        scale:0.75,
        duration: 0.5,
      });
      gsap.to(parent.querySelector(".note"), {
        "margin-top": "27em",
        "margin-bottom": "1em",
        "margin-left": "-1em",
        "margin-right": "12em",
        scale:0.75,
        duration: 0.5,
      });
      parent.classList.add("zoomed");
      // Disable buttons in other divs
      const otherButtons = document.querySelectorAll(".product:not(.zoomed)");
      otherButtons.forEach((otherButton) => {
        otherButton.style.pointerEvents = "none";
      });
      parent.querySelector(".description").style.whiteSpace = "pre-line";
      parent.querySelector(".description").style.display="block";
      gsap.to(parent.querySelector(".description"), {
        scale:0.6,
        duration: 0.5,
        width:300,
        marginTop:"-17em",
        "margin-left": "9em",
        marginBottom: '-30em',
      });
    } else {
      gsap.to(parent, {
        translateX: "0%",
        translateY: "0%",
        "height":"",
        scale:1,
        zIndex: 1,
        opacity: 1,
        duration: 0.3,
        "background-position": "",
        "background-size": "",
        ease: "power2.out",
      });
      gsap.to(parent.querySelector(".titre"), {
        fontSize: "", // Remplacez par la taille d'origine du texte
        left: "", // Remplacez par la position horizontale d'origine
        marginTop: "", // Remplacez par la marge supérieure d'origine
        width: "", // Remplacez par la largeur d'origine
        duration: 0.5,
        ease: "power2.out"
       });
      gsap.set(parent.querySelector("p a"), {
        marginTop: "",
        marginLeft: "",
        scale: 1,
      });
      gsap.to(parent.querySelector(".note"), {
        marginTop: "",
        marginLeft: "",
        marginRight: "",
        scale:1,
        duration: 0.5,
      });
      // Enable buttons in other divs
      const otherButtons = document.querySelectorAll(".product:not(.zoomed)");
      otherButtons.forEach((otherButton) => {
        otherButton.style.pointerEvents = "auto";
      });
      parent.classList.remove("zoomed");
      parent.querySelector(".description").style.display="none";
      gsap.to(parent.querySelector(".description"), {
        transform: "",
        scale:"",
        duration: 0.5,
        width:"",
        marginTop:"",
        marginBottom: '',
      });
    }
  });
});

// Sélectionnez la section main
const categoriesSection = document.querySelector("#categories");
const tab_product = document.querySelector("#tab_product");
const backButton = document.getElementById("back_button");


const categoryLinks = document.querySelectorAll("#categories li");

const produitsParCategorie = {
  Ordinateur_Portable: [
    { nom: "Ordinateur portable THOMSON N15C12SL512", 
    image: "https://m.media-amazon.com/images/I/71wuLmUUpyL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/3N5Rw9u", 
    descr: "Marque  SGIN\n Taille de l'écran 15,6 Pouces\n Taille du disque dur  256 Go\n Modèle du CPU Celeron\n Taille de la mémoire RAM installée  8 Go\n Système d'exploitation  Windows 11\n Caractéristique spéciale  Portable, Bluetooth\n Description de la carte graphique Intégré Coprocesseur graphique  Intel Celeron Vitesse du CPU  2,8 GHz",
    note: "4.2"},
    
    { nom: "SGIN Ordinateur Portable 15,6 Pouces Windows 11", 
    image: "https://m.media-amazon.com/images/I/71Itr7FLPmL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/3qlNEYX", 
    descr: "Marque  SGIN\n Taille de l'écran 15,6 Pouces\n Taille du disque dur  256 Go\n Modèle du CPU Celeron\n Taille de la mémoire RAM installée  8 Go\n Système d'exploitation  Windows 11\n Caractéristique spéciale  Portable, Bluetooth\n Description de la carte graphique Intégré Coprocesseur graphique  Intel Celeron Vitesse du CPU  2,8 GHz",
    note: "4.5"},
    
    { nom: "MENGHU 15.6 Ordinateur Portable Windows 11", 
    image: "https://m.media-amazon.com/images/I/61qTDr4oIfL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/3IUUPxP", 
    descr: "Marque  MENGHU\n Nom de modèle M15 pro\n Taille de l'écran 15,6 Pouces\n Modèle du CPU Celeron\n Taille de la mémoire RAM installée  8 Go\n Système d'exploitation  Windows 11\n Caractéristique spéciale  Portable, Bluetooth\n Description de la carte graphique Intégré Vitesse du CPU  2,8 GHz\n Description du disque dur SSD",
    note: "4.1"},
    
    { nom: "Apple Ordinateur Portable MacBook Air 2020", 
    image: "https://m.media-amazon.com/images/I/61EdyD3MchL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/3OOuYLC", 
    descr: "Marque  Apple\n Nom de modèle Macbook air\n Taille de l'écran 13\n Couleur Argent\n Taille du disque dur  256 Go\n Modèle du CPU Apple A8\n Taille de la mémoire RAM installée  8 Go\n Système d'exploitation  MacOS 10.14 Mojave\n Caractéristique spéciale  Fingerprint Reader, Portable\n Description de la carte graphique Intégré",
    note: "4.8"},
    
    { nom: "Lenovo IdeaPad 3 17ITL6 Ordinateur Portable", 
    image: "https://m.media-amazon.com/images/I/619BTXubo8L._AC_SL1500_.jpg", 
    lien: "https://amzn.to/3N8oplS", 
    descr: "Marque  Lenovo\n Nom de modèle Notebook\n Taille de l'écran 17.3\n Couleur Gris\n Taille du disque dur  512 Go\n Modèle du CPU Core i5\n Taille de la mémoire RAM installée  8 Go\n Système d'exploitation  Windows 11\n Caractéristique spéciale  Music player\n Description de la carte graphique Intégré",
    note: "4.4"},
    
    { nom: "HP Chromebook 15a-na0003sf Ordinateur Portable", 
    image: "https://m.media-amazon.com/images/I/61yNpas1gEL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/43AzpOR", 
    descr: " Marque  HP\n Nom de modèle 75M96EA\n Taille de l'écran 15,6 Pouces\n Couleur Gris\n Taille du disque dur  64 Go\n Modèle du CPU Celeron\n Taille de la mémoire RAM installée  4 Go\n Système d'exploitation  Chrome OS\n Caractéristique spéciale  Portable\n Description de la carte graphique Intégré",
    note: "3.8"},
    
    { nom: "Apple 2022 MacBook Air avec Puce M2 : 13,6 Pouces", 
    image: "https://m.media-amazon.com/images/I/71VTsuH2+7L._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/3oCyzlr", 
    descr: "Marque  Apple\n Nom de modèle Apple MacBook Air avec puce M2\n Taille de l'écran 13.6\n Couleur Minuit\n Taille du disque dur  256 Go\n Taille de la mémoire RAM installée  8 Go\n Système d'exploitation  Mac OS\n Caractéristique spéciale  Portable\n Description de la carte graphique Intégré\n Description du disque dur SSD",
    note: "4.7"},
    
    { nom: "Lenovo IdeaPad 1 15IGL7 - Ordinateur Portable", 
    image: "https://m.media-amazon.com/images/I/71QIL9Y4+UL._AC_SL1500_.jpg", 
    lien: "https://amzn.to/42qv1QS", 
    descr: "Marque  Lenovo\n Nom de modèle IdeaPad 1 15IGL7\n Taille de l'écran 15,6 Pouces\n Couleur Gris clair\n Modèle du CPU Pentium\n Taille de la mémoire RAM installée  8 Go\n Système d'exploitation  Windows 11 Home en mode S\n Caractéristique spéciale  Portable\n Description de la carte graphique Intégré Coprocesseur graphique  Intel UHD Graphics 605",
    note: "4.3"},
    
    { nom: "HP Laptop 15s-fq0001sf PC Portable 15.6 FHD", 
    image: "https://m.media-amazon.com/images/I/81yyq1vo5wL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/3WNf71H", 
    descr: "Marque  HP\n Nom de modèle 64V08EA\n Taille de l'écran 15,6 Pouces\n Couleur Gris\n Taille du disque dur  128 Go\n Modèle du CPU Celeron\n Taille de la mémoire RAM installée  4 Go\n Système d'exploitation  Windows 11 Home in S mode\n Caractéristique spéciale  Anti Glare Screen\n Description de la carte graphique Intégré",
    note: "4.2"},
    
    { nom: "MSI Crosshair 15 C12VF-434FR", 
    image: "https://m.media-amazon.com/images/I/71FnLh-8SLL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/43GfddP", 
    descr: "Marque  MSI\n Nom de modèle Crosshair 15 C12VF-434FR\n Taille de l'écran 15,6 Pouces\n Couleur Noir\n Taille du disque dur  512 Go\n Modèle du CPU Core i5\n Taille de la mémoire RAM installée  16 Go\n Système d'exploitation  Windows 11 Home\n Caractéristique spéciale  Portable\n Description de la carte graphique RTX4060",
    note: "4.4"},
    
    { nom: "Jumper Ordinateur Portable", 
    image: "https://m.media-amazon.com/images/I/81TdjGd7p0L._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/43A11Tu", 
    descr: "Marque  Jumper\n Nom de modèle S5MAX 4128\n Taille de l'écran 16 Pouces\n Couleur Gris\n Taille du disque dur  128 Go\n Modèle du CPU Celeron\n Taille de la mémoire RAM installée  4 Go\n Système d'exploitation  Windows 11\n Caractéristique spéciale  Portable, Bluetooth\n Description de la carte graphique Intégré",
    note: "4.3"},
    
    { nom: "MSI Crosshair 15 C12VG-432FR", 
    image: "https://m.media-amazon.com/images/I/71FnLh-8SLL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/3qrrULh", 
    descr: "Marque  MSI\n Nom de modèle Crosshair 15 C12VG-432FR\n Taille de l'écran 15,6 Pouces\n Couleur Noir\n Taille du disque dur  512 Go\n Modèle du CPU Core i7\n Taille de la mémoire RAM installée  16 Go\n Système d'exploitation  Windows 11 Home\n Caractéristique spéciale  Portable\n Description de la carte graphique RTX4070",
    note: "4.4"},

  ],
  Tablettes_tactiles: [
    { nom: "Apple 2021 iPad (10,2 pouces, Wi-Fi, 64 Go) - Gris sidéral (9ᵉ génération)", 
    image: "https://m.media-amazon.com/images/I/61zdQQORNML._AC_SL1500_.jpg", 
    lien: "https://amzn.to/3R9UoV6", 
    descr: "Marque  Apple\n Nom de modèle iPad\n Capacité de stockage de la mémoire  64 Go\n Taille de l'écran 10.2\n Système d'exploitation  iOS 14\nCouleur Gris sidéral\n Taille de la mémoire RAM installée  3 Go\n Génération  9ème génération\n Année du modèle 2021\n Poids de l'article  487 Grammes",
    note: "4.8"},

    { nom: "Samsung Galaxy Tab A8, Android Tablet", 
    image: "https://m.media-amazon.com/images/I/91clUeiz+dL._AC_SL1500_.jpg", 
    lien: "https://amzn.to/3sBJXPS", 
    descr: "Marque  Samsung\n Capacité de stockage de la mémoire  32 Go\n Taille de l'écran 10,5 Pouces\n Système d'exploitation  Android\n Couleur Noir\n Taille de la mémoire RAM installée  3 Go\n Caractéristique spéciale  Fast Charging\n Année du modèle 2022\n Poids de l'article  508 Grammes\n Interface matérielle  USB Type C, Audio 3,5 mm, Bluetooth 5, 802.11 ac/b/g/n",
    note: "4.6"},

    { nom: "Samsung Galaxy Tab A7 Lite SM-T220N", 
    image: "https://m.media-amazon.com/images/I/81RdLpV8ZoL._AC_SL1500_.jpg", 
    lien: "https://amzn.to/45YqcjY", 
    descr: "Marque  Samsung\n Nom de modèle SM-T220N\n Capacité de stockage de la mémoire  32 Go\n Taille de l'écran 8.7\n Résolution d'affichage maximale 1340 x 800\n Système d'exploitation  Android\n Couleur gray\n Taille de la mémoire RAM installée  3 Go\n Durée de vie de la batterie 1 jours\n Caractéristique spéciale  Charge rapide",
    note: "4.5"},

    { nom: "Samsung Galaxy Tab A7 Lite SM-T220N", 
    image: "https://m.media-amazon.com/images/I/819xkNpCXpL._AC_SL1500_.jpg", 
    lien: "https://amzn.to/3sKViNK", 
    descr: "Marque  Samsung\n Nom de modèle SM-T220N\n Capacité de stockage de la mémoire  32 Go\n Taille de l'écran 8.7\n Résolution d'affichage maximale 1340 x 800\n Système d'exploitation  Android\n Couleur silver\n Taille de la mémoire RAM installée  3 Go\n Année du modèle 2021\n Poids de l'article  366 Grammes",
    note: "4.4"},

    { nom: "Apple 2022 iPad 10,9 Pouces (Wi-FI, 64 Go) - Bleu (10ᵉ génération)", 
    image: "https://m.media-amazon.com/images/I/61FUEXIELzL._AC_SL1500_.jpg", 
    lien: "https://amzn.to/3sLdmYd", 
    descr: "Marque  Apple\n Nom de modèle iPad\n Capacité de stockage de la mémoire  64 Go\n Taille de l'écran 10,9 Pouces\n Système d'exploitation  iPadOS\n Couleur Bleu\n Taille de la mémoire RAM installée  8 Go\n Génération  10ème génération\n Année du modèle 2022\n Fabricant de processeurs graphiques Apple",
    note: "4.7"},

    { nom: "Samsung Galaxy Tab A8 SM-X200 64 Go 26,7 cm (10.5)", 
    image: "https://m.media-amazon.com/images/I/81ye1iv291L._AC_SL1500_.jpg", 
    lien: "https://amzn.to/3P6QBVR", 
    descr: "Marque  Samsung\n Capacité de stockage de la mémoire  64 Go\n Taille de l'écran 10,5 Pouces\n Système d'exploitation  Android\n Couleur Noir\n Taille de la mémoire RAM installée  4 Go\n Année du modèle 2022\n Poids de l'article  508 Grammes\n Interface matérielle  Micro SD\n Technologie de communication sans fil Wi-Fi",
    note: "4.5"},

    { nom: "Apple 2022 iPad Pro 12,9 Pouces (Wi-FI + Cellular, 2 to) - Gris sidéral (6ᵉ génération)", 
    image: "https://m.media-amazon.com/images/I/81hAx31maUL._AC_SL1500_.jpg", 
    lien: "https://amzn.to/3Pbxeew", 
    descr: "Marque  Apple\n Nom de modèle iPad Pro\n Capacité de stockage de la mémoire  2 To\n Taille de l'écran 12,9 Pouces\n Système d'exploitation  iPadOS\n Couleur Gris sidéral\n Taille de la mémoire RAM installée  16 Go\n Génération  6ème génération\n Année du modèle 2022\n Fabricant de processeurs graphiques Apple",
    note: "4.8"},

    { nom: "MAGCH Tablette 10 Pouces Android 12", 
    image: "https://m.media-amazon.com/images/I/71pe6xOVUhL._AC_SL1500_.jpg", 
    lien: "https://amzn.to/3R8N8sv", 
    descr: "Marque  MAGCH\n Nom de modèle Z10\n Capacité de stockage de la mémoire  64 Go\n Taille de l'écran 10,1 Pouces\n Système d'exploitation  Android 12\n Couleur black-2\n Taille de la mémoire RAM installée  5 Go\n Année du modèle 2023\n Poids de l'article  420 Grammes\n Interface matérielle  USB Type C",
    note: "4.5"},

    { nom: "Samsung Galaxy Tab S6 Lite 2022 10.4'' 64Go", 
    image: "https://m.media-amazon.com/images/I/61CJXk+euSL._AC_SL1500_.jpg", 
    lien: "https://amzn.to/47YTTmV", 
    descr: "Marque  Samsung\n Nom de modèle Samsung Galaxy Tab S6 Lite 2022 10.4'' 64Go Oxford Gray WiFi S Pen inclus\n Capacité de stockage de la mémoire  64 Go\n Taille de l'écran 10,4 Pouces\n Résolution d'affichage maximale 2000 x 1200 Pixels\n Système d'exploitation  Samsung One UI 4.1, Android 12\n Couleur Argent\n Taille de la mémoire RAM installée  4 Go\n Année du modèle 2022\n Tranche d'âge (description) kids",
    note: "4.6"},

    { nom: "Tablette 10 Pouces Android 13 PC 12Go RAM+128Go", 
    image: "https://m.media-amazon.com/images/I/71+8e+qGTRL._AC_SL1500_.jpg", 
    lien: "https://amzn.to/482vixw", 
    descr: "Marque  JUSYEA\n Nom de modèle J10 new\n Capacité de stockage de la mémoire  128 Go\n Taille de l'écran 10 Pouces\n Système d'exploitation  Android 13 de Google\n Couleur 12+128Go, Gris\n Taille de la mémoire RAM installée  12 Go\n Année du modèle 2023\n Poids de l'article  480 Grammes\n Vitesse du CPU  2 GHz",
    note: "4.8"},

    { nom: "SEBBE Tablette 10 Pouces Android 13 Tablette 12 Go RAM+128 ", 
    image: "https://m.media-amazon.com/images/I/717OgbqJcJL._AC_SL1500_.jpg", 
    lien: "https://amzn.to/3EvX4oG", 
    descr: "Marque  SEBBE\n Nom de modèle S22\n Capacité de stockage de la mémoire  128 Go\n Taille de l'écran 10,1 Pouces\n Résolution d'affichage maximale 1280*800 Pixels\n Système d'exploitation  Android 13\n Couleur S22 Clavier Souris Or\n Taille de la mémoire RAM installée  12 Go\n Caractéristique spéciale  可扩展存储\n Année du modèle 2023",
    note: "4.7"},

    { nom: "Samsung Galaxy Tab A8 Tablet 25,6 cm (10,5 Zoll)", 
    image: "https://m.media-amazon.com/images/I/91clUeiz+dL._AC_SL1500_.jpg", 
    lien: "https://amzn.to/3ZbQc9h", 
    descr: "Marque  Samsung\n Capacité de stockage de la mémoire  64 Go\n Taille de l'écran 10,5 Pouces\n Système d'exploitation  Android\n Couleur Noir\n Taille de la mémoire RAM installée  4 Go\n Caractéristique spéciale  Lecteur de carte\n Année du modèle 2021\n Poids de l'article  476 Grammes\n Interface matérielle  802.11 ac/b/g/n",
    note: "4.5"},
  ],

};

categoryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    // Masquer la section main
    categoriesSection.style.display = "none";

    // Afficher la nouvelle div
    tab_product.style.display = "block";
    tab_product.classList.add("right-column");
    back_button.style.display = "block";
    document.getElementById("titre_categorie").textContent = event.target.textContent;
    const produits = produitsParCategorie[event.target.textContent];

    produits.forEach((produit, index) => {
      const productContainer = document.querySelector(`#product-${index + 1}`);
      if (productContainer) {
        productContainer.querySelector(".titre").textContent = produit.nom;
        productContainer.style.backgroundImage = `url('${produit.image}')`;
        productContainer.querySelector("p a").setAttribute("href", produit.lien);
        productContainer.querySelector(".description").textContent = produit.descr;
        productContainer.querySelector(".description").style.display="none";
        productContainer.querySelector(".note").textContent = produit.note + "/5";
      }
    });
  });
});


function showCategories() {
  categoriesSection.style.display = "block";
  tab_product.style.display = "none";
  backButton.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
  // Vérifier si l'élément existe sur la page
  var backButton = document.querySelector("#back_button");
  if (backButton) {
    // Appliquer les modifications uniquement si l'élément est trouvé
    backButton.addEventListener("click", showCategories);
  }
});
//backButton.addEventListener("click", showCategories);

function shownavbar(){
  if (document.getElementById("navbar").style.display == "" || document.getElementById("navbar").style.display == "none"){
    document.getElementById("navbar").style.display = "block";
    document.getElementById("back_button").style.display = "none";
  }
  else{
    document.getElementById("navbar").style.display = "none";
    document.getElementById("back_button").style.display = "block";
  }
}