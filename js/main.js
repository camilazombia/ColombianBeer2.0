$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


var productos=[
    {
        'id' : 1,
        'nombre' : 'Bogotá',
        'tipo' : 'Ale',
        'grados' : 3.5,
        'precio' : 12900,
        'image' : "./content/bogota.png",
    },
    {
        'id' : 2,
        'nombre' : 'Medellín',
        'tipo' : 'Pilsner',
        'grados' : 4.5,
        'precio' : 12900,
        'image' : "./content/medellin.png",
    },
    {
        'id' : 3,
        'nombre' : 'Cali',
        'tipo' : 'Ipa',
        'grados' : 6.8,
        'precio' : 12900,
        'image' : "./content/cali.png",
    },
    {
        'id' : 4,
        'nombre' : 'Cartagena',
        'tipo' : 'Lager',
        'grados' : 4.2,
        'precio' : 12900,
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
        'precio' : 12900,
        'image' : "./content/manizales.png",
    },
    {
        'id' : 7,
        'nombre' : 'Cúcuta',
        'tipo' : 'Lager',
        'grados' : 4.6,
        'precio' : 12900,
        'image' : "./content/cucuta.png",
    },
    {
        'id' : 8,
        'nombre' : 'Pereira',
        'tipo' : 'Pilsener',
        'grados' : 4.2,
        'precio' : 12900,
        'image' : "./content/pereira.png",
    },
    {
        'id' : 9,
        'nombre' : 'Ibagué',
        'tipo' : 'Lager',
        'grados' : 4.0,
        'precio' : 12900,
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






