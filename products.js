const products = [
  {
    id: 0,
    title: 'Pantalón',
    img: '/images/pantalon.jpg',
    description: 'un pantalón bien chimbita',
    options: [ 'azul', 'verde', 'blanco' ],
    variations: [
      {
        name: 'Simple',
      },
      {
        name: 'Con adornos',
        price: 120000,
      },
      {
        name: 'Rasgado',
        price: 90000,
      }
    ],
    price: 100000,
    freeShipping: true,
  },
  {
    id: 1,
    title: 'Camiseta',
    img: '/images/camiseta.jpg',
    description: 'una camiseta',
    options: [],
    price: 50000,
    freeShipping: false,
  },
  {
    id: 2,
    title: 'Zapatos',
    img: '/images/zapatos.jpg',
    description: 'Unos zapatos',
    options: [],
    variations: [],
    price: 160000,
    freeShipping: true,
  },
];

module.exports = products;