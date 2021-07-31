//$('#myModal').modal({backdrop: 'static', keyboard: false})
var productos=[
    {
        'id' : 1,
        'nombre' : 'Bogotá',
        'tipo' : 'lager',
        'grados' : 4.2,
        'precio' : 12900,
        'image' : "https://via.placeholder.com/150",
    },
    {
        'id' : 2,
        'nombre' : 'Medellín',
        'tipo' : 'lager',
        'grados' : 4.2,
        'precio' : 12900,
        'image' : "https://via.placeholder.com/150",
    },
    {
        'id' : 3,
        'nombre' : 'Cali',
        'tipo' : 'lager',
        'grados' : 4.2,
        'precio' : 12900,
        'image' : "https://via.placeholder.com/150",
    },
    {
        'id' : 4,
        'nombre' : 'Cartagena',
        'tipo' : 'lager',
        'grados' : 4.2,
        'precio' : 12900,
        'image' : "https://via.placeholder.com/150",
    },
    {
        'id' : 1,
        'nombre' : 'Caldas',
        'tipo' : 'lager',
        'grados' : 4.2,
        'precio' : 12900,
        'image' : "https://via.placeholder.com/150",
    },
    {
        'id' : 5,
        'nombre' : 'Manizales',
        'tipo' : 'lager',
        'grados' : 4.2,
        'precio' : 12900,
        'image' : "https://via.placeholder.com/150",
    },
    {
        'id' : 6,
        'nombre' : 'Cúcuta',
        'tipo' : 'lager',
        'grados' : 4.2,
        'precio' : 12900,
        'image' : "https://via.placeholder.com/150",
    },
    {
        'id' : 7,
        'nombre' : 'Pereira',
        'tipo' : 'lager',
        'grados' : 4.2,
        'precio' : 12900,
        'image' : "https://via.placeholder.com/150",
    },
    {
        'id' : 8,
        'nombre' : 'Ibagué',
        'tipo' : 'lager',
        'grados' : 4.2,
        'precio' : 12900,
        'image' : "https://via.placeholder.com/150",
    },
  ]
  
  for (const producto of productos) {
        $('.cards_product').append (`
        <div class="cards_item">
        <img class="cards_img"src="${producto.image}">
        <h3 class="cards_title"> ${producto.nombre}</h3>
         <p class="cards_type">  Tipo: ${producto.tipo}</p>
         <p class="cards_gre">  Grados: ${producto.grados}</p>
         <p class="cards_price"> $ ${producto.precio}</p>
          <div class="cards_btn">
            <button type="button" class="card-btn${producto.id} card-btn">Comprar</button>
          </div>
         </div>
        `);
  
  }