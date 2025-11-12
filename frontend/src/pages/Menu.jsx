import "./Menu.css";

export default function Menu() {
  const menu = {
    breakfast: [
      {
        id: 1,
        name: "Bacon, Egg & Cheese",
        description: "Served on your choice of bagel or roll",
        price: 5.50,
        image: "/menu/bacon_egg_cheese.jpg"

      },
      {
        id: 2,
        name: "Sausage, Egg & Cheese",
        description: "Hearty breakfast classic with melted cheese",
        price: 5.75,
        image: "https://placehold.co/300x200?text=Sausage+Egg+%26+Cheese"
      },
      {
        id: 3,
        name: "Pancake Platter",
        description: "Three fluffy pancakes served with syrup and butter",
        price: 6.00,
        image: "https://placehold.co/300x200?text=Pancakes"
      }
    ],
    lunch: [
      {
        id: 4,
        name: "Chicken Over Rice",
        description: "Grilled chicken, yellow rice, lettuce, white & hot sauce",
        price: 9.00,
        image:"/menu/chicken_rice.jpg"
      },
      {
        id: 5,
        name: "Lamb Over Rice",
        description: "Seasoned lamb, yellow rice, lettuce, white & hot sauce",
        price: 9.50,
        image: "/menu/lamb_rice.jpg"
      },
      {
        id: 6,
        name: "Steak Over Rice",
        description: "Juicy steak strips, yellow rice, lettuce, white & hot sauce",
        price: 10.00,
        image: "/menu/steak_rice.jpg"
      }
    ],
    sandwiches: [
      {
        id: 7,
        name: "Philly Cheesesteak",
        description: "Grilled steak, onions, peppers, melted cheese on hoagie roll",
        price: 9.00,
        image: "/menu/philly_cheesesteak.jpg"
      },
      {
        id: 8,
        name: "Grilled Chicken Sandwich",
        description: "Tender chicken breast with lettuce, tomato & mayo",
        price: 8.00,
        image: "https://placehold.co/300x200?text=Grilled+Chicken+Sandwich"
      },
      {
        id: 9,
        name: "Burger Deluxe",
        description: "Beef patty with cheese, lettuce, tomato & fries",
        price: 9.50,
        image: "https://placehold.co/300x200?text=Burger+Deluxe"
      }
    ]
  };

  return (
    <div className="menu-container">
      <h1>Highlander Bites Food Truck Menu</h1>

      {Object.entries(menu).map(([category, items]) => (
        <div key={category} className="menu-section">
          <h2 className="menu-category">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          <div className="menu-grid">
            {items.map((item) => (
              <div key={item.id} className="menu-card">
                <img src={item.image} alt={item.name} className="menu-img" />
                <h3>{item.name}</h3>
                <p className="menu-desc">{item.description}</p>
                <p className="menu-price">${item.price.toFixed(2)}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
