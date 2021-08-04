$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


var productos=[
    {
        'id' : 1,
        'nombre' : 'Bogotá',
        'tipo' : 'Ale',
        'grados' : 3.5,
        'precio' : 11200,
        'image' : "./content/bogota.png",
    },
    {
        'id' : 2,
        'nombre' : 'Medellín',
        'tipo' : 'Pilsner',
        'grados' : 4.5,
        'precio' : 18000,
        'image' : "./content/medellin.png",
    },
    {
        'id' : 3,
        'nombre' : 'Cali',
        'tipo' : 'Ipa',
        'grados' : 6.8,
        'precio' : 23000,
        'image' : "./content/cali.png",
    },
    {
        'id' : 4,
        'nombre' : 'Cartagena',
        'tipo' : 'Lager',
        'grados' : 4.2,
        'precio' : 17800,
        'image' : "./content/cartagena.png",
    },
    {
        'id' : 5,
        'nombre' : 'Caldas',
        'tipo' : 'Lager',
        'grados' : 4.0,
        'precio' : 12900,
        'image' : "./content/caldas.png",
    },
    {
        'id' : 6,
        'nombre' : 'Manizales',
        'tipo' : 'Lager',
        'grados' : 5.0,
        'precio' : 15300,
        'image' : "./content/manizales.png",
    },
    {
        'id' : 7,
        'nombre' : 'Cúcuta',
        'tipo' : 'Lager',
        'grados' : 4.6,
        'precio' : 12800,
        'image' : "./content/cucuta.png",
    },
    {
        'id' : 8,
        'nombre' : 'Pereira',
        'tipo' : 'Pilsener',
        'grados' : 4.2,
        'precio' : 14900,
        'image' : "./content/pereira.png",
    },
    {
        'id' : 9,
        'nombre' : 'Ibagué',
        'tipo' : 'Lager',
        'grados' : 4.0,
        'precio' : 12700,
        'image' : "./content/ibagué.png",
    },
  ]
  
  for (const producto of productos) {
        $('.cards_product').append (`
        <div class="cards_item">
        <img class="cards_img"src="${producto.image}">
        <h3 class="cards_title"> ${producto.nombre}</h3>
        <p class="cards_price"> $ ${producto.precio}</p>
        <div class="cards_desc">
         <p class="cards_desc--type"> ${producto.tipo} , ${producto.grados} grados </p>
        </div>
          <div class="cards_btn">
            <button type="button" class="card-btn${producto.id} cards_btn--item">Comprar</button>
          </div>
         </div>
        `);

  }

const CardBtn =  document.querySelectorAll('.cards_btn--item');
CardBtn.forEach(addtocart => {
    addtocart.addEventListener('click', addcart);
});

const buybutton = document.querySelector('.cart__buy');
buybutton.addEventListener('click', buybtn);

function addcart (event) {
    const btn= event.target;
    const item =btn.closest('.cards_item');

    let producttitle = item.querySelector('.cards_title').textContent;
    let productprice = item.querySelector('.cards_price').textContent;
    let productimage = item.querySelector('.cards_img').src;

    additem(producttitle, productprice, productimage);
    
}
let modalbody = document.querySelector('.modal-body');

function additem (producttitle, productprice, productimage){

    let cartdiv= document.createElement('div');
    let cartitem=`
    <div class="cart__item">
       <div class="cart__img">
       <img class="cart__img--item" src="${productimage}" alt="">
    </div>
    <div class="cart__container">
    <div class="cart__title"></div>
      <p class="cart__title--item">${producttitle}</p>
    <div class="cart__price">
      <p class="cart__price--item">${productprice}</p>
    </div>
    </div>
    <div class="cart__quantity">
      <input class="cart__quantity--item" type="number" value="1">
    </div>
    <div class="cart__btn">
      <button class="cart__btn--item" type="button">x</button>
    </div>
</div>
    `;

    cartdiv.innerHTML = cartitem;
    modalbody.append(cartdiv);

    cartdiv.querySelector('.cart__btn--item').addEventListener('click', deleteitem);
    cartdiv.querySelector('.cart__quantity--item').addEventListener('change', quantitychange);

    CartSum();
}

function CartSum (){
    let total=0;
    const cartTotal= document.querySelector('.cart-total');
    const cartItems = document.querySelectorAll('.cart__item');

    cartItems.forEach((cartItem) => {
        const priceItem = cartItem.querySelector('.cart__price--item');
        const priceItemText=Number(priceItem.textContent.replace('$',''));
        const cartquantity = cartItem.querySelector('.cart__quantity--item');
        const cartquantityNumber=Number(cartquantity.value);

        total = total + priceItemText * cartquantityNumber;
    });

    cartTotal.innerHTML=`$ ${total}`;
}

function deleteitem(event){
  const btndelete = event.target;
  btndelete.closest('.cart__item').remove();
  CartSum();
}

function quantitychange(event){
  const quantity = event.target;
  if(quantity.value <=0){
    quantity.value = 1;
  }
  CartSum();
}

function buybtn(){
modalbody.innerHTML = '' ;
CartSum();
}






