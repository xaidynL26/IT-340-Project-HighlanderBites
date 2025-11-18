
import "./Menu.css";

export default function Menu() {
  const menu = {
    breakfast: [
      {
        id: 1,
        name: "Pork Sausage Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "/menu/white.jpg"

      },
      {
        id: 2,
        name: "Beef Sausage Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.50,
        image: "/menu/white.jpg"
      },
      {
        id: 3,
        name: "Taylor Ham Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "/menu/white.jpg"
      },
	{
        id: 4,
        name: "Bacon Egg and Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "/menu/white.jpg"
      },
	{
        id: 5,
        name: "Turkey Bacon Egg and Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "/menu/white.jpg"
      }, 
{
        id: 5,
        name: "Ham Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "/menu/white.jpg"
      },
	{
        id: 6,
        name: "Turkey Club",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 8.00,
        image: "/menu/white.jpg"
      }, 
	{
        id: 7,
        name: "BTL",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 6.00,
        image: "/menu/white.jpg"
      },
	{
        id: 8,
        name: "Grilled Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 4.00,
        image: "/menu/white.jpg"
      },
	{
        id: 9,
        name: "Smoked turkey Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "/menu/white.jpg"
      }, 
	{
        id: 10,
        name: "Bagel Cream Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 3.00,
        image: "/menu/white.jpg"
      }
	
    ],
	Big_Breakfast: [
      {
        id: 11,
        name: "Western Omelette Platter",
        description: "Ham, green pepper & onions (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "/menu/white.jpg"
      },
      {
        id: 12,
        name: "Italian Cheese Omelette Platter",
        description: "Sausage, Mozzarella cheese, paper & onion (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "/menu/white.jpg"
      },
      {
        id: 13,
        name: "Bacon Cheese Omelette Platter",
        description: "(Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "/menu/white.jpg"
      },
      {
        id: 14,
        name: "Veggie Patty Omelette Platter",
        description: "(Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "/menu/white.jpg"
      },
      {
        id: 15,
        name: "Greasy Sandwich",
        description: "Sausage, Bacon, & Taykor Ham (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "/menu/white.jpg"
      },
      {
        id: 16,
        name: "Blood Clot Sandwich",
        description: "Taylor Ham, Bacon with Egg & Cheese (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "/menu/white.jpg"
      },
      {
        id: 17,
        name: "Italian Sandwich",
        description: "Taylor Ham, Sausage with Egg Cheese (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "/menu/white.jpg"
      }
    ],

    lunch: [
      {
        id: 18,
        name: "Lamb over rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 7.00,
        image: "/menu/white.jpg"
      },
{
        id: 19,
        name: "Lamb over rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 9.00,
        image: "/menu/white.jpg"
      },

      {
        id: 20,
        name: "Chicken Over Rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 7.00,
        image: "/menu/white.jpg"
      },
{
        id: 21,
        name: "Chicken Over Rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 9.00,
        image:"/menu/white.jpg"
      },
	{
        id: 22,
        name: "Chicken and Lamb Over Rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 9.00,
        image:"/menu/white.jpg"
      },{
        id: 23,
        name: "Chicken and Lamb Over Rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 24,
        name: "Chicken Shawarma Over Rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 9.00,
        image: "/menu/white.jpg"
      },{
        id: 25,
        name: "Chicken Shawarma Over Rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 26,
        name: "Lamb & Chicken Shawarma Over Rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 27,
        name: "Chicken wings & French fries Platter",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 28,
        name: "Buffalo Chicken Over Fries",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 29,
        name: "Combo Platter",
        description: "(Served with Lett/Tom/Onion & white sauce) (Chicken tenders, Mozzarella Sticks, and French Fries",
        price:10.00,
        image: "/menu/white.jpg"
      },{
        id: 30,
        name: "Latino Platter",
        description: "(Served with Lett/Tom/Onion & white sauce)(Baked Chicken, Moro Rice, and Sweet Platains",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 31,
        name: "Lamb Guacamole over rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 32,
        name: "Steak over rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 33,
        name: "Lamb and Falafel over rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 34,
        name: "Lamb and Steak over rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 35,
        name: "Chicken and Falafel over Rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 36,
        name: "Egg & Steak over Rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 37,
        name: "Fish over Rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 38,
        name: "Salchipapa",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 9.00,
        image: "/menu/white.jpg"
      },
      {
        id: 6,
        name: "Steak Over Rice",
        description: "Juicy steak strips, yellow rice, lettuce, white & hot sauce",
        price: 10.00,
        image: "/menu/white.jpg"
      }
    ],
    sandwiches: [
      {
        id: 7,
        name: "Philly Cheesesteak",
        description: "Grilled steak, onions, peppers, melted cheese on hoagie roll",
        price: 9.00,
        image: "/menu/white.jpg"
      },
      {
        id: 8,
        name: "Grilled Chicken Sandwich",
        description: "Tender chicken breast with lettuce, tomato & mayo",
        price: 8.00,
        image: "/menu/white.jpg"
      },
      {
        id: 9,
        name: "Burger Deluxe",
        description: "Beef patty with cheese, lettuce, tomato & fries",
        price: 9.50,
        image: "/menu/white.jpg"
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
