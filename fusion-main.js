const menuEmail = document.querySelector('.email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const carritoCompra = document.querySelector('.shopping-cart');
const shoopingCardContainer = document.querySelector('#shoopingCardContainer');
const cardsContainer = document.querySelector('.cards-container');

const  productDetail = document.querySelector('#productDetail')
const  productDetailClose = document.querySelector('.productDetail-close')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carritoCompra.addEventListener('click', toggleCarritoshoopingCardContainer);
productDetailClose.addEventListener('click', closeProductDetail );  

//  estas funciones son para que los diferentes menus se cierren y habran automaticamente una vez se haga click en uno de ellos.

            function toggleDesktopMenu(){
                const isshoopingCardContainerClosed = shoopingCardContainer.classList.contains('inactive')
                if (!isshoopingCardContainerClosed){
                    shoopingCardContainer.classList.add('inactive')
                }
                        desktopMenu.classList.toggle('inactive')
                    }
        
       
                
             function toggleMobileMenu(){
                    const isshoopingCardContainerClosed = shoopingCardContainer.classList.contains('inactive')
                if (!isshoopingCardContainerClosed){
                    shoopingCardContainer.classList.add('inactive')
                }
                        mobileMenu.classList.toggle('inactive')

                        closeProductDetail();
            }
            
                   
    

            function toggleCarritoshoopingCardContainer() {
                const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
                
                if (!isMobileMenuClosed) {
                mobileMenu.classList.add('inactive'); 
                }

                const isProductDetailClosed = productDetail.classList.contains('inactive');
                
                if (!isProductDetailClosed) {
                productDetail.classList.add('inactive'); 
                }
               
                shoopingCardContainer.classList.toggle('inactive')
            }
                

              


            function  openProductDetailAside(){
               shoopingCardContainer.classList.add('inactive');
                productDetail.classList.remove('inactive');
            }

             function  closeProductDetail(){
                productDetail.classList.add('inactive');
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

function retailProducts(array){
 for (product of array){
    const productCard = document.createElement('div');
    productCard.classList.add('products-cards');

     const Productimg = document.createElement('img');
     Productimg.setAttribute('src', product.image);
     Productimg.addEventListener('click', openProductDetailAside);

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

}
retailProducts(productList);