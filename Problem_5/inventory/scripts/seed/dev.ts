import db from '../../src/modules/db';
import { Prisma } from '@prisma/client';

/* --- Set up data for products --- */
const productsData: Prisma.productsCreateInput[] = [
  {
    name: 'Tennis FreeLift Polo Shirt',
    description:
      'Serve up your best in this adidas tennis polo shirt. Play through long rallies without missing a beat thanks to its shoulder-freeing FreeLift construction and stay-cool HEAT.RDY technology. The doubleknit fabric includes a herringbone texture that reduces cling to keep distractions to a minimum when the game is in the balance.',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/6074829b72054d97838a0808adb80bab_9366/Tennis_FreeLift_Polo_Shirt_Blue_IQ4739_21_model.jpg',
    price: 100,
  },
  {
    name: 'Adicolor Trefoil Tee',
    description:
      'Classics redefined. This adidas tee reinvents casual style with a contemporary twist. Screenprinted with an iconic Trefoil logo, it signals your connection to the brand that shaped sport. Made for everyday wear, it keeps a classic fit in a soft cotton build that creates an effortless look. An essential piece to complete any outfit. ',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9bc390e91bb041788cd962b6861d142d_9366/Adicolor_Trefoil_Tee_Green_IR7979_21_model.jpg',
    price: 120,
  },
  {
    name: 'Originals Leisure League Badge Tee',
    description:
      'When comfort counts but style does too, slip into this adidas tee. Its all-cotton build and ribbed crewneck give off a classic and timeless vibe, while a tropical graphic on the back transports you to a relaxed state of mind. ',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/65c448220cc14b5592654176533d763d_9366/Originals_Leisure_League_Badge_Tee_White_JD6339_21_model.jpg',
    price: 150,
  },
  {
    name: 'Classic Monogram Graphic Tee',
    description:
      "Your go-to basic gets an update in this classic adidas tee. With a modern graphic twist on our heritage, it repeats the Trefoil in monogram form to shape a proud Trefoil on the front. Equal parts comfortable and casual, it is made of soft cotton for laid-back adventures and off-duty weekends.",
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/d9014d34e05c43b5b02f5053160ee6ef_9366/Classic_Monogram_Graphic_Tee_White_IS0261_21_model.jpg',
    price: 200,
  },
  {
    name: 'Basketball Classic Tee (Gender Neutral)',
    description:
      'Made from a soft cotton blend, this adidas tee allows for free movement and whatever you have got planned. A subtle Trefoil on the front shows the world your style is always on point, and a ribbed crewneck keeps the fit feeling classic. This tee was made using UNITEFIT — an all-gender fit system that was created with a spectrum of sizes, genders and forms in mind.',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/db998e02bc8749dc82e68e88553cf2ed_9366/Basketball_Classic_Tee_Gender_Neutral_Beige_IR6383_21_model.jpg',
    price: 100,
  },
  {
    name: 'Adizero Essentials Running Tee',
    description:
      'Cross the finish line with confidence after giving your best. All the hard training will pay off as you celebrate a personal breakthrough in the Adizero Essentials Running Tee. ',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/25f634079ff84ebc92d5b2cfaf500cf6_9366/Adizero_Essentials_Running_Tee_Blue_IN1158_HM1.jpg',
    price: 90,
  },
  {
    name: 'Adicolor Adibreak Tee',
    description:
      'The loose fit and timeless look of the Adicolor Adibreak Tee proves some classics never go out of style. Inspired by retro adidas designs, this wardrobe staple gets reinvented in fresh hues and contemporary cuts. Effortless yet iconic, it lets you rep adidas heritage while keeping your look relaxed. ',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/eaf4e80598014a73a101372f877668b6_9366/Adicolor_Adibreak_Tee_Grey_IR7995_21_model.jpg',
    price: 110,
  },
  {
    name: 'City Escape Tee',
    description:
      'Whether you are enjoying a quiet moment over coffee or strolling through the city, this tee lets you embrace the simple moments. Its soft cotton fabric keeps you comfortable all day, while an adidas Badge of Sport logo adds a touch of brand style. A bungee tie-cord at the hem lets you adjust the fit. ',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/e9e6b9216f41474f98b77de823d7d8da_9366/City_Escape_Tee_Grey_IN3709_21_model.jpg',
    price: 130,
  },
  {
    name: 'Own The Run Colorblock Tee',
    description:
      'Push your run to the max in this breathable tee from adidas. With AEROREADY to manage moisture, you will stay dry mile after mile. Reflective details keep you visible in low light so you can own the run day or night. ',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/c025533868c847b7a0853fbf5ac51fe2_9366/Own_The_Run_Colorblock_Tee_Blue_IK4997_21_model.jpg',
    price: 120,
  },
  {
    name: 'Tiro Allover Print Mesh Resort Shirt',
    description:
      'Catch the summer festival vibe in this adidas Tiro mesh resort shirt. Inspired by iconic 80s football graphics, the all-over print and open pocket tap into a retro aesthetic made modern.',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/0b7e8c33bfec43d9b2beec13f0a1a108_9366/Tiro_Allover_Print_Mesh_Resort_Shirt_Black_IP3784_21_model.jpg',
    price: 80,
  },
  {
    name: 'Classic Street Premium Adibreak Tee',
    description:
      'High-contrast geometry frames the Trefoil logo in this adidas tee. A casual essential for laid-back looks, it is built with a loose shape and soft cotton that create an easygoing vibe. For effortless style, pair it with joggers or jeans. Slip it on and you will stay connected to the heritage of sport, style, creativity and progress.',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/f2d166e8fd35431abf0d060158c42197_9366/Classic_Street_Premium_Adibreak_Tee_Beige_IP3282_21_model.jpg',
    price: 100,
  },
  {
    name: 'Yoga Training Tee',
    description:
      'Stand in Mountain pose and just breathe. This adidas yoga tee is made with soft cotton-blend fabric to keep your mind focused and your body relaxed. AEROREADY keeps you comfortably dry, and side slits enhance your range of motion.',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/f352aa157c7a46b0954e6fd8b02807f8_9366/Yoga_Training_Tee_Pink_IP2754_21_model.jpg',
    price: 80,
  },
  {
    name: 'Tiro Tee',
    description:
      'This adidas tee is made to help you rock during the warm-weather months. Pair it with shorts for a day at the park or style it up for a night out. Featuring an engineered polyester doubleknit build, this t-shirt has 3-Stripes on the sleeves for a classic finish.',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/47898204c97b4937acfb5c93fca967cd_9366/Tiro_Tee_Blue_IS1540_21_model.jpg',
    price: 90,
  }
];

const run = async () => {
  await db.products.createMany({ data: productsData });
};

// Auto-run when called directly
if (require.main === module) {
  run()
    .then(() => {
      console.log('Data seed completed');
      process.exit();
    })
    .catch((err) => {
      console.log('Creating fail!');
      console.log(err);
    });
}
