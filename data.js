// Menu Data
const menuData = {
  hotCoffee: [
      {
          id: "espresso",
          category: "hot",
          image: "images/hot/espresso.jpg",
          name: "Espresso",
          price: 7.00,
          description: "Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans under high pressure. It has a bold, rich flavor and a thick consistency, often topped with a layer of crema. Espresso is the base for drinks like lattes and cappuccinos."
      },
      {
          id: "double-espresso",
          category: "hot",
          image: "images/hot/double-espresso.jpg",
          name: "Double Espresso",
          price: 9.00,
          description: "A double espresso is made by using twice the amount of coffee grounds and water, resulting in a stronger and larger shot compared to a single espresso. It has a rich, intense flavor and is often served in a slightly larger cup."
      },
      {
          id: "hazelnut-latte",
          category: "hot",
          image: "images/hot/hazelnut-latte.jpg",
          name: "Hazelnut Latte",
          price: 9.00,
          description: "A hazelnut latte is a coffee drink made with espresso, steamed milk, and hazelnut syrup, giving it a sweet, nutty flavor. It's typically topped with a small layer of foam for a smooth, creamy texture."
      },
      {
          id: "caramel-latte",
          category: "hot",
          image: "images/hot/caramel-latte.jpg",
          name: "Caramel Latte",
          price: 9.00,
          description: "A caramel latte is a coffee drink made with espresso, steamed milk, and caramel syrup, giving it a sweet and rich flavor. It’s usually topped with a layer of foam and sometimes drizzled with more caramel for an extra touch of sweetness."
      },
      {
          id: "signature-eels-latte",
          category: "hot",
          image: "images/hot/signature-eels-latte.jpg",
          name: "Signature Eel's Latte",
          price: 7.00,
          description: "A signature eels latte is a unique coffee creation that combines espresso, steamed milk, and a special eels-infused syrup or flavoring. This signature drink is often designed to offer a distinctive twist on the traditional latte, blending rich coffee with an unexpected, bold flavor profile. "
      },
      {
          id: "caramel-machiatto",
          category: "hot",
          image: "images/hot/caramel-machiatto.jpg",
          name: "Caramel Macchiato",
          price: 9.00,
          description: "A caramel macchiato is a coffee drink made with steamed milk, vanilla syrup, and espresso, topped with a drizzle of caramel. The espresso is poured over the milk, creating a layered effect. It has a sweet, creamy flavor with a hint of bitterness from the espresso and a rich caramel finish."
      },
      {
          id: "cappucino-creme",
          category: "hot",
          image: "images/hot/cappucino-creme.jpg",
          name: "Cappucino crème",
          price: 8.00,
          description: "A cappuccino crème is a variation of the classic cappuccino, typically featuring a creamy, velvety texture. It is made with equal parts espresso, steamed milk, and a thick layer of frothy milk foam, but with an added touch of sweet cream or crème to enhance the richness and smoothness."
      },
      {
          id: "Chocolate series",
          category: "hot",
          image: "images/hot/frappucino.jpg",
          name: "Chocolate Series",
          price: 8.00,
          description: "chocolate is a warm, creamy beverage made with milk or water, melted chocolate, and sugar. It’s typically topped with whipped cream or marshmallows for added sweetness and texture, offering a rich and comforting drink"
      },
  ],
  coldCoffee: [
      {
          id: "affogato",
          category: "cold",
          image: "images/cold/affogato.png",
          name: "Affogato",
          price: 6.00,
          description: "An affogato is a simple yet delicious Italian dessert made by pouring a shot of hot espresso over a scoop of vanilla ice cream or gelato. The contrast of the warm espresso and ice cream creates a rich, creamy, and slightly bitter treat."
      },
      {
          id: "iced-espresso",
          category: "cold",
          image: "images/cold/iced-espresso.jpg",
          name: "Iced Espresso",
          price: 9.00,
          description: "Iced espresso is a chilled coffee drink made by brewing espresso and then cooling it down with ice. It has a bold, concentrated flavor, offering a refreshing and intense coffee experience, especially on hot days."
      },
      {
          id: "iced-americano",
          category: "cold",
          image: "images/cold/iced-americano.jpg",
          name: "Iced Americano",
          price: 5.00,
          description: "An iced Americano is a cold coffee drink made by diluting espresso with cold water and ice. It has a smooth, bold flavor, with a less intense taste than straight espresso."
      },
      {
          id: "iced-latte",
          category: "cold",
          image: "images/cold/iced-latte.jpg",
          name: "Iced Latte",
          price: 5.50,
          description: "An iced latte is a cold coffee drink made with espresso, chilled milk, and ice. It has a smooth, creamy texture with a balanced coffee flavor."
      },
      {
        id: "signature-iced-coffee",
        category: "cold",
        image: "images/cold/signature-iced-coffee.jpg",
        name: "Signature iced coffee",
        price: 5.50,
        description: "Signature iced coffee perfectly blended with ice and milk, delivering a balanced and invigorating flavor. Topped with a swirl of fluffy whipped cream and garnished with a sprinkle of coffee beans."
    },
      {
          id: "iced-caramel-latte",
          category: "cold",
          image: "images/cold/iced-caramel-latte.jpg",
          name: "Iced Caramel Latte",
          price: 5.50,
          description: "An iced caramel latte is a cold coffee drink made with espresso, chilled milk, ice, and caramel syrup. It has a smooth, creamy texture with a sweet, rich caramel flavor."
      },
      {
        id: "iced-matcha",
        category: "cold",
        image: "images/cold/iced-matcha.png",
        name: "Iced Matcha",
        price: 5.50,
        description: "A refreshing and vibrant green iced matcha latte served in a mason jar. The drink features a creamy blend of finely whisked matcha powder, milk, and ice, creating a perfectly smooth and invigorating flavor. Topped with a generous swirl of whipped cream and drizzled with rich matcha syrup, the drink is a feast for the eyes and taste buds."
    },
    {
        id: "iced-chocolate",
        category: "cold",
        image: "images/cold/iced-choco.jpg",
        name: "Iced Chocolate",
        price: 5.50,
        description: "A rich and creamy iced chocolate latte served in a mason jar. This indulgent drink features a smooth blend of chocolate syrup, milk, and ice, creating a perfectly chilled and velvety treat. Topped with a generous swirl of whipped cream and drizzled with decadent chocolate syrup."
    },
  ],
  food: [
      {
          id: "chicken-sandwich",
          category: "food",
          image: "images/food/chicken-sandwich.jpg",
          name: "Chicken Sandwich",
          price: 13.00,
          description: "Chicken, Tomato, Lettuce, Onion, Wheat Bread, Cheese, With special secret sauce from our family recipe."
      },
      {
          id: "special-burger",
          category: "food",
          image: "images/food/special-burger.jpg",
          name: "Special Burger",
          price: 14.50,
          description: "Beef, Tomato, Lettuce, Onion, Wheat Bread, Cheese, With special secret sauce from our family recipe."
      },
      {
          id: "beef-burger",
          category: "food",
          image: "images/food/beef-burger.jpg",
          name: "Beef Burger",
          price: 10.50,
          description: "Beef, Tomato, Lettuce, Onion, Wheat Bread, Cheese."
      },
      {
          id: "beef-sandwich",
          category: "food",
          image: "images/food/beef-sandwich.jpg",
          name: "Beef Sandwich",
          price: 8.50,
          description: "Beef, Tomato, Lettuce, Onion, Wheat Bread."
      },
      {
          id: "chicken-sandwich-basic",
          category: "food",
          image: "images/food/chicken-sandwich-basic.jpg",
          name: "Chicken Sandwich Basic",
          price: 6.50,
          description: "Chicken, Tomato, Lettuce, Onion, Wheat Bread."
      },
      {
          id: "tuna-sandwich",
          category: "food",
          image: "images/food/tuna-sandwich.jpg",
          name: "Tuna Sandwich",
          price: 7.00,
          description: "Tuna, Tomato, Lettuce, Onion, Wheat Bread."
      }
  ],
  dessert: [
      {
          id: "chocolate-croffle",
          category: "dessert",
          image: "images/dessert/chocolate-waffle.jpg",
          name: "Chocolate Croffle",
          price: 4.50,
          description: "A chocolate croffle is a delicious hybrid of a croissant and a waffle, typically made by pressing croissant dough in a waffle iron. It has a crispy, flaky exterior and a soft, buttery interior, often filled or topped with melted chocolate for a rich, indulgent treat."
      },
      {
          id: "strawberry-croffle",
          category: "dessert",
          image: "images/dessert/strawberry-waffle.jpg",
          name: "Strawberry Croffle",
          price: 4.50,
          description: "A strawberry croffle is a sweet, indulgent treat made by pressing croissant dough in a waffle iron, resulting in a crispy, flaky texture. It's typically topped with fresh strawberries and sometimes drizzled with cream or syrup, creating a perfect combination of warm, buttery layers and sweet, fruity flavor."
      },
      {
          id: "chocolate-cake",
          category: "dessert",
          image: "images/dessert/chocolate-cake.jpg",
          name: "Chocolate Cake",
          price: 5.00,
          description: "Chocolate cake is a rich and moist dessert made with cocoa or melted chocolate, flour, sugar, eggs, and butter. It has a deep, sweet chocolate flavor and a soft, airy texture, often layered with chocolate frosting or ganache for added indulgence."
      },
      {
          id: "cheese-cake",
          category: "dessert",
          image: "images/dessert/ice-cream.jpg",
          name: "Tokyo Cheesecake",
          price: 5.00,
          description: "Cheesecake is a creamy and smooth dessert made with a rich mixture of cream cheese, sugar, and eggs, set on a graham cracker or biscuit crust. It can be topped with fruit, chocolate, or other sweet toppings, offering a perfect balance of tangy and sweet flavors with a velvety texture."
      },
      {
          id: "tiramisu-cake",
          category: "dessert",
          image: "images/dessert/chocolate-pudding.jpg",
          name: "Tira-missyoU Cake",
          price: 5.50,
          description: "Tiramisu cake is a delicious twist on the classic Italian tiramisu dessert. It features layers of light, spongy cake soaked in local bean coffee and layered with a creamy mixture of mascarpone cheese, eggs, and sugar. Often dusted with cocoa powder, it combines rich, coffee-flavored layers with a smooth, velvety filling for a decadent treat."
      },
      {
          id: "strawberry-shortcake",
          category: "dessert",
          image: "images/dessert/strawberry-pudding.jpg",
          name: "Strawberry Shortcake",
          price: 5.00,
          description: "Strawberry shortcake is a light, sweet dessert made with layers of fluffy biscuit or sponge cake, fresh strawberries, and whipped cream. The juicy, sweet strawberries complement the soft cake and creamy topping, creating a refreshing and indulgent treat, especially popular in the summer."
      }
  ],
  iceBlended: [
    {
        
    }
  ],
  cookies: [
    {
        id: "oreo-hazel",
        category: "cookies",
        image: "images/cookies/oreo-hazel.jpg",
        name: "Oreo Hazelnut",
        price: 8.00,
        description: "Oreo hazel cookies are a delightful treat combining the classic Oreo cookie with a hazelnut flavor. These cookies feature a crunchy chocolate cookie sandwich with a creamy hazelnut filling, offering a rich, nutty twist on the traditional Oreo taste."
    },
    {
        id: "cashew-nut-raisin",
        category: "cookies",
        image: "images/cookies/cashew-nut-raisin.jpg",
        name: "Cashew Nut & Raisin",
        price: 8.00,
        description: "Cashew nut raisin cookies are a delicious combination of crunchy cashew nuts and sweet raisins mixed into a soft, buttery cookie dough. The nuts add a rich, savory flavor, while the raisins provide a chewy sweetness, creating a perfect balance of textures and tastes."
    },
    {
        id: "Matcha & Pistachio Nuts",
        category: "cookies",
        image: "images/cookies/matcha-pistachio-nuts.jpg",
        name: "Matcha & Pistachio Nuts",
        price: 8.00,
        description: "Matcha & pistachio nuts cookies are a unique treat that blends the earthy flavor of matcha green tea with the rich, nutty taste of pistachios. The cookies have a soft, slightly chewy texture, with the matcha providing a mild bitterness and the pistachios adding a satisfying crunch, creating a flavorful and aromatic snack."
    },
    {
        id: "red-velvet-macadamia-nut",
        category: "cookies",
        image: "images/cookies/red-velvet-macadamia-nut.jpg",
        name: "Red Velvet & Macadamia Nut",
        price: 8.00,
        description: "Red velvet macadamia nut cookies are a rich, indulgent treat that combines the smooth, tangy flavor of red velvet with the buttery crunch of macadamia nuts. These cookies have a soft, chewy texture and a vibrant red color, with the macadamia nuts adding a nutty contrast to the sweet, creamy base."
    },
    {
        id: "caramel-walnuts",
        category: "cookies",
        image: "images/cookies/caramel-walnuts.jpg",
        name: "Caramel & Walnuts",
        price: 8.00,
        description: "Caramel walnut cookies are a delicious treat that combines the rich sweetness of caramel with the crunchy, slightly bitter taste of walnuts. The caramel adds a smooth, indulgent flavor, while the walnuts provide a satisfying crunch, creating a perfect balance of textures and tastes."
    },
    {
        id: "nori-cheese-pine-nut",
        category: "cookies",
        image: "images/cookies/nori-cheese-pine-nut.jpg",
        name: "Nori & Cheese Pine Nut",
        price: 8.00,
        description: "Nori cheese pine nut cookies are a unique savory treat that combines the umami flavor of nori (seaweed) with the creamy richness of cheese and the subtle crunch of pine nuts. The nori adds a salty, oceanic taste, while the cheese brings a creamy depth, and the pine nuts provide a delightful crunch, creating an intriguing and flavorful cookie."
    },
    {
        id: "blueberry-almonds-oats",
        category: "cookies",
        image: "images/cookies/blueberry-almonds-oats.jpg",
        name: "Blueberry & Almonds Oats",
        price: 8.00,
        description: "Blueberry almond oats cookies are a wholesome and flavorful treat made with juicy blueberries, crunchy almonds, and hearty oats. The combination of sweet blueberries, nutty almonds, and the chewy texture of oats creates a satisfying, slightly sweet cookie with a hint of nuttiness, perfect for a healthy snack."
    },
    {
        id: "coffee-hickory",
        category: "cookies",
        image: "images/cookies/coffee-hickory.jpg",
        name: "Coffee & Hickory",
        price: 8.00,
        description: "Coffee hickory cookies are a flavorful treat that combines the rich, robust taste of coffee with the smoky, earthy flavor of hickory. The coffee adds a deep, aromatic intensity, while the hickory brings a subtle smokiness, creating a unique and satisfying cookie with a complex flavor profile."
    },

  ]
};

// Function to render menu items
function renderMenuItems() {
  // Render Hot Drinks
  const hotDrinksContainer = document.querySelector('#hot-drinks .row');
  if (hotDrinksContainer) {
      hotDrinksContainer.innerHTML = menuData.hotCoffee.map(item => createMenuItem(item)).join('');
  }

  // Render Cold Drinks
  const coldDrinksContainer = document.querySelector('#cold-drinks .row');
  if (coldDrinksContainer) {
      coldDrinksContainer.innerHTML = menuData.coldCoffee.map(item => createMenuItem(item)).join('');
  }

  // Render Food
  const foodContainer = document.querySelector('#food .menu-list');
  if (foodContainer) {
      foodContainer.innerHTML = menuData.food.map(item => createFoodItem(item)).join('');
  }

  // Render Desserts
  const dessertContainer = document.querySelector('#dessert .menu-list');
  if (dessertContainer) {
      dessertContainer.innerHTML = menuData.dessert.map(item => createFoodItem(item)).join('');
  }

  const cookiesContainer = document.querySelector('#cookies .row');
  if (cookiesContainer) {
    cookiesContainer.innerHTML = menuData.cookies.map(item => createMenuItem(item)).join('');
  }
}

// Helper function to create menu item HTML
function createMenuItem(item) {
  return `
      <div class="col-md-6 col-lg-3">
          <div class="card h-100">
              <img src="${item.image}" class="card-img-top" alt="${item.name}">
              <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                      <h5 class="card-title mb-0">${item.name}</h5>
                      <span class="price-badge">RM${item.price.toFixed(2)}</span>
                  </div>
                  <p class="menu-item-description">${item.description}</p>
              
              </div>
          </div>
      </div>
  `;
}

// Helper function to create food item HTML
function createFoodItem(item) {
  return `
      <div class="menu-list-item">
          <div class="d-flex justify-content-between align-items-center mb-2">
              <h5 class="mb-0">${item.name}</h5>
              <span class="price-badge">RM${item.price.toFixed(2)}</span>
          </div>
          <p class="mb-0">${item.description}</p>
       
      </div>
  `;
}

// Initialize menu when DOM is loaded
document.addEventListener('DOMContentLoaded', renderMenuItems);