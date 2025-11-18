
import "./Menu.css";

export default function Menu() {
  const menu = {
    breakfast: [
      {
        id: 1,
        name: "Pork Sausage Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "/menu/bacon_egg_cheese.jpg"

      },
      {
        id: 2,
        name: "Beef Sausage Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.50,
        image: "https://placehold.co/300x200?text=Sausage+Egg+%26+Cheese"
      },
      {
        id: 3,
        name: "Taylor Ham Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://placehold.co/300x200?text=Pancakes"
      },
	{
        id: 4,
        name: "Bacon Egg and Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://placehold.co/300x200?text=Pancakes"
      },
	{
        id: 5,
        name: "Turkey Bacon Egg and Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://placehold.co/300x200?text=Pancakes"
      }, 
{
        id: 5,
        name: "Ham Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://placehold.co/300x200?text=Pancakes"
      },
	{
        id: 6,
        name: "Turkey Club",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 8.00,
        image: "https://placehold.co/300x200?text=Pancakes"
      }, 
	{
        id: 7,
        name: "BTL",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 6.00,
        image: "https://placehold.co/300x200?text=Pancakes"
      },
	{
        id: 8,
        name: "Grilled Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 4.00,
        image: "https://placehold.co/300x200?text=Pancakes"
      },
	{
        id: 9,
        name: "Smoked turkey Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://placehold.co/300x200?text=Pancakes"
      }, 
	{
        id: 10,
        name: "Bagel Cream Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 3.00,
        image: "https://placehold.co/300x200?text=Pancakes"
      }
	
    ],
	Big_Breakfast: [
      {
        id: 11,
        name: "Western Omelette Platter",
        description: "Ham, green pepper & onions (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image:"/menu/chicken_rice.jpg"
      },
      {
        id: 12,
        name: "Italian Cheese Omelette Platter",
        description: "Sausage, Mozzarella cheese, paper & onion (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "/menu/lamb_rice.jpg"
      },
      {
        id: 13,
        name: "Bacon Cheese Omelette Platter",
        description: "(Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "/menu/steak_rice.jpg"
      },
      {
        id: 14,
        name: "Veggie Patty Omelette Platter",
        description: "(Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "/menu/lamb_rice.jpg"
      },
      {
        id: 15,
        name: "Greasy Sandwich",
        description: "Sausage, Bacon, & Taykor Ham (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "/menu/steak_rice.jpg"
      },
      {
        id: 16,
        name: "Blood Clot Sandwich",
        description: "Taylor Ham, Bacon with Egg & Cheese (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "/menu/steak_rice.jpg"
      },
      {
        id: 17,
        name: "Italian Sandwich",
        description: "Taylor Ham, Sausage with Egg Cheese (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "/menu/steak_rice.jpg"
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
