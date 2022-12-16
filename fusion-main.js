const menuEmail = document.querySelector('.email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const carritoCompra = document.querySelector('.shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carritoCompra.addEventListener('click', toggleCarritoAside);
    
                //  estas funciones son para que los diferentes menus se cierren y habran automaticamente una vez se haga click en uno de ellos.

            function toggleDesktopMenu(){
                const isasideClosed = aside.classList.contains('inactive')
                if (!isasideClosed){
                    aside.classList.add('inactive')
                }
                        desktopMenu.classList.toggle('inactive')
                    }
        
       
                
             function toggleMobileMenu(){
                    const isasideClosed = aside.classList.contains('inactive')
                if (!isasideClosed){
                    aside.classList.add('inactive')
                }
                        mobileMenu.classList.toggle('inactive')
                    }

    

            function toggleCarritoAside() {
                const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
                
                if (!isMobileMenuClosed) {
                mobileMenu.classList.add('inactive'); 
                }
                
                aside.classList.toggle('inactive');
            }

 const productList = [];
 productList.push ({
    name: 'Bike',
    price: 800,
    image: './bike.jpeg',
 })

 productList.push({
    name: 'telefono',
    price: 500,
    image: './bike.jpeg',
 })

 productList.push({
    name: 'cupcake',
    price: 5,
    image: './bike.jpeg',
 })

 productList.push({
    name: 'cupcake',
    price: 5,
    image: './bike.jpeg',
 })

 productList.push({
    name: 'cupcake',
    price: 5,
    image: './bike.jpeg',
 })

 for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('products-cards');

     const Productimg = document.createElement('img');
     Productimg.setAttribute('src', product.image);

      const productInfo = document.createElement('div');
      productInfo.classList.add('products-info');

      const productInfoNextDiv = document.createElement('div');
       const productPrice = document.createElement('p');
       productPrice.innerText = "$" + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        

      const productFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
     
      productImgCart.setAttribute('src','./bt_add_to_cart.svg');

     productFigure.appendChild(productImgCart);

     productInfoNextDiv.appendChild(productPrice);
     productInfoNextDiv.appendChild(productName);

     productInfo.appendChild(productInfoNextDiv);
     productInfo.appendChild(productFigure);

     productCard.appendChild(Productimg);
     productCard.appendChild(productInfo);

     cardsContainer.appendChild(productCard);
 }


