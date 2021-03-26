import slide1 from "./../img/slide-1.jpg";
import slide2 from "./../img/slide-2.jpg";
import slide3 from "./../img/slide-3.jpg";

const cars = [
  {
    id: 1,
    name: 'Марпех 11',
    price: {
      prevPrice: '2 400 000 ₽',
      currentPrice: '2  300 000 ₽',
      creditPrice: '11 000 ₽',
    },
    shortCharacteristics: {
      fuel: 'бензин',
      transmission: 'механика',
      power: '100 л.с.',
      engine: '1.4 л',
    },
    characteristics: {
      fuel: 'Бензиновый',
      transmission: 'Роботизированная',
      power: '249',
      engine: '2.4',
      drive: 'Полный',
      torque: '370/4500',
      cylinders: '4',
    },
    photos: [
      slide1,
      slide2,
      slide3,
    ],
  },
]

export {cars};