//TODOS LOS PRODUCTOS 

const template = document.querySelector("[prod-template]");
const father = document.querySelector("[section-father]");

fetch("../inventory.json")
    .then(res => res.json())
    .then(data => {
        
        const template = document.querySelector("#template"); 
        const father = document.querySelector("#father"); 

        data.forEach(user => {
            const item = template.content.cloneNode(true).firstElementChild;

            const image = item.querySelector("[prod-img]");
            const price = item.querySelector("[prod-precio]");
            const name = item.querySelector("[prod-nom]");
            const desc = item.querySelector("[prod-desc]");
            const link = item.querySelector("[prod-link]");

            console.log(image, price, name, desc, link);

            name.textContent = user.productName;
            price.textContent = user.productPrice;
            desc.textContent = user.productDescription;
            image.src = user.imagesrc;
            link.href = user.productLink;

            console.log(user.productDescription);

            father.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));


//NEW IN

const template3 = document.querySelector("[prod-template3]");
const father3 = document.querySelector("[section-father3]");

fetch("../newIn.json") 
    .then(res => res.json())
    .then(data => {
        
        const template3 = document.querySelector("#template3"); 
        const father3 = document.querySelector("#father3"); 

        data.forEach(user => {
            const item = template3.content.cloneNode(true).firstElementChild;

            const image3 = item.querySelector("[prod-img]");
            const price3 = item.querySelector("[prod-precio]");
            const name3 = item.querySelector("[prod-nom]");
            const desc3 = item.querySelector("[prod-desc]");
            const link3 = item.querySelector("[prod-link3]");

            console.log(image3, price3, name3, desc3, link3);
            console.log(user.productLink); 

            name3.textContent = user.productName;
            price3.textContent = user.productPrice;
            desc3.textContent = user.productDescription;
            image3.src = user.imagesrc;
            link3.href = user.productLink;

            father3.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

//CONTADOR DE PRODUCTOS 

document.addEventListener('DOMContentLoaded', () => {
    const decreaseButton = document.querySelector('.quantity-decrease');
    const increaseButton = document.querySelector('.quantity-increase');
    const quantityDisplay = document.querySelector('.quantity');

    let quantity = 1;

    decreaseButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });

    increaseButton.addEventListener('click', () => {
        if (quantity < 10) {
            quantity++;
            quantityDisplay.textContent = quantity;
        }
    });
});

//MENU DESPLEGABLE MEDIOS DE PAGO

document.addEventListener('DOMContentLoaded', () => {
    const collapsible = document.querySelector('.collapsible');
    const content = document.querySelector('.collapsible-content');

    collapsible.addEventListener('click', () => {
        if (content.style.display === 'block') {
            content.style.display = 'none';
            collapsible.textContent = 'Medios de pago'; 
        } else {
            content.style.display = 'block';
            collapsible.textContent = 'Menos detalles'; 
        }
    });
});

//CALCULAR CODIGO POSTAL

document.addEventListener('DOMContentLoaded', () => {
    const collapsible2 = document.querySelector('.collapsible2');
    const content2 = document.querySelector('.collapsible-content2');

    collapsible2.addEventListener('click', () => {
        if (content2.style.display === 'block') {
            content2.style.display = 'none';
            collapsible2.textContent = 'Calcular código postal'; 
        } else {
            content2.style.display = 'block';
            collapsible2.textContent = 'Menos detalles'; 
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const collapsible = document.querySelector('.collapsible');
    const content = document.querySelector('.content');

    collapsible.addEventListener('click', () => {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });


    const form = document.getElementById('shipping-form');
    const postalCodeInput = document.getElementById('postal-code');
    const shippingCostDisplay = document.getElementById('shipping-cost');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const postalCode = postalCodeInput.value;
        const shippingCost = calculateShippingCost(postalCode); 

        shippingCostDisplay.textContent = `Costo de Envío: $${shippingCost.toFixed(2)}`;
    });

    function calculateShippingCost(postalCode) { //funcion que calcula el envío
    
        let cost = 5.00; 

    
        if (postalCode.startsWith('15')) {
            cost += 10.00; 
        }

        return cost;
    }
});



// CATEGORIAS //

//CATEGORIAS
    
const template2 = document.querySelector("[cat-template]");
const father2= document.querySelector("[section-father2]");

    fetch("categories.json")
    .then(res => res.json())
    .then(data => {
        
        const template2 = document.querySelector("#template2"); 
        const father2 = document.querySelector("#father2"); 

        data.forEach(user => {
            const item = template2.content.cloneNode(true).firstElementChild;

            const image2 = item.querySelector("[cat-img]");
            const name = item.querySelector("[category-name]");
            const linkCat = item.querySelector("[link-cat]")

            console.log(image2, name, linkCat);

            name.textContent = user.catName;
            image2.src = user.image;
            linkCat.href = user.catLink;

            console.log(user.productDescription);

            father2.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));


// COCINA 

const template8 = document.querySelector("[prod-template8]");
const father8 = document.querySelector("[section-father8]");

fetch("../inventory_cocina.json")
    .then(res => res.json())
    .then(data => {
        
        const template8 = document.querySelector("#template8"); 
        const father8 = document.querySelector("#father8"); 

        data.forEach(user => {
            const item = template8.content.cloneNode(true).firstElementChild;

            const image = item.querySelector("[prod-img]");
            const price = item.querySelector("[prod-precio]");
            const name = item.querySelector("[prod-nom]");
            const desc = item.querySelector("[prod-desc]");
            const link = item.querySelector("[link-cocina]");

            console.log(image, price, name, desc, link);

            name.textContent = user.productName;
            price.textContent = user.productPrice;
            desc.textContent = user.productDescription;
            image.src = user.imagesrc;
            link.href = user.productLink;

            console.log(user.productDescription);

            father8.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

//BAÑO 

const template7 = document.querySelector("[prod-template7]");
const father7 = document.querySelector("[section-father7]");

fetch("../inventory_baño.json")
    .then(res => res.json())
    .then(data => {
        
        const template7 = document.querySelector("#template7"); 
        const father7 = document.querySelector("#father7"); 

        data.forEach(user => {
            const item = template7.content.cloneNode(true).firstElementChild;

            const image = item.querySelector("[prod-img]");
            const price = item.querySelector("[prod-precio]");
            const name = item.querySelector("[prod-nom]");
            const desc = item.querySelector("[prod-desc]");
            const link = item.querySelector("[link-baño]");

            console.log(image, price, name, desc, link);

            name.textContent = user.productName;
            price.textContent = user.productPrice;
            desc.textContent = user.productDescription;
            image.src = user.imagesrc;
            link.href = user.productLink;

            console.log(user.productDescription);

            father7.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// DECORACION 

const template6 = document.querySelector("[prod-template6]");
const father6 = document.querySelector("[section-father6]");

fetch("../inventory_deco.json")
    .then(res => res.json())
    .then(data => {
        
        const template6 = document.querySelector("#template6"); 
        const father6 = document.querySelector("#father6"); 

        data.forEach(user => {
            const item = template6.content.cloneNode(true).firstElementChild;

            const image = item.querySelector("[prod-img]");
            const price = item.querySelector("[prod-precio]");
            const name = item.querySelector("[prod-nom]");
            const desc = item.querySelector("[prod-desc]");
            const link = item.querySelector("[link-deco]");

            console.log(image, price, name, desc, link);

            name.textContent = user.productName;
            price.textContent = user.productPrice;
            desc.textContent = user.productDescription;
            image.src = user.imagesrc;
            link.href = user.productLink;

            console.log(user.productDescription);

            father6.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// PLATOS

const template9 = document.querySelector("[prod-template9]");
const father9 = document.querySelector("[section-father9]");

fetch("../inventory_platos.json") //aca le pones el nombre del archivo, no le cambies la ruta que es siempre la misma
    .then(res => res.json())
    .then(data => {
        
        const template9 = document.querySelector("#template9"); 
        const father9 = document.querySelector("#father9"); 

        data.forEach(user => {
            const item = template9.content.cloneNode(true).firstElementChild;

            const image = item.querySelector("[prod-img]");
            const price = item.querySelector("[prod-precio]");
            const name = item.querySelector("[prod-nom]");
            const desc = item.querySelector("[prod-desc]");

            console.log(image, price, name, desc);

            name.textContent = user.productName;
            price.textContent = user.productPrice;
            desc.textContent = user.productDescription;
            image.src = user.imagesrc;

            console.log(user.productDescription);

            father9.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// TAZAS

const template1 = document.querySelector("[prod-template1]");
const father1 = document.querySelector("[section-father1]");

fetch("../inventory_tazas.json")
    .then(res => res.json())
    .then(data => {
        
        const template1 = document.querySelector("#template1"); 
        const father1 = document.querySelector("#father1"); 

        data.forEach(user => {
            const item = template1.content.cloneNode(true).firstElementChild;

            const image = item.querySelector("[prod-img]");
            const price = item.querySelector("[prod-precio]");
            const name = item.querySelector("[prod-nom]");
            const desc = item.querySelector("[prod-desc]");
            const link = item.querySelector("[link-tazas]");

            console.log(image, price, name, desc, link);

            name.textContent = user.productName;
            price.textContent = user.productPrice;
            desc.textContent = user.productDescription;
            image.src = user.imagesrc;
            link.href = user.productLink;

            console.log(user.productDescription);

            father1.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// SETS 

const template5 = document.querySelector("[prod-template5]");
const father5 = document.querySelector("[section-father5]");

fetch("../inventory_sets.json")
    .then(res => res.json())
    .then(data => {
        
        const template5 = document.querySelector("#template5"); 
        const father5 = document.querySelector("#father5"); 

        data.forEach(user => {
            const item = template5.content.cloneNode(true).firstElementChild;

            const image = item.querySelector("[prod-img]");
            const price = item.querySelector("[prod-precio]");
            const name = item.querySelector("[prod-nom]");
            const desc = item.querySelector("[prod-desc]");
            const link = item.querySelector("[link-sets]");

            console.log(image, price, name, desc, link);

            name.textContent = user.productName;
            price.textContent = user.productPrice;
            desc.textContent = user.productDescription;
            image.src = user.imagesrc;
            link.href = user.productLink;

            console.log(user.productDescription);

            father5.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));


