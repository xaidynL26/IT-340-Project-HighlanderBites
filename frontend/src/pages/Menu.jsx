
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
      }

    ],
    Gyros: [
     {
        id: 39,
        name: "Lamb Gyro",
        description: "Served with lettuce & tomatoes",
        price: 6.00,
        image: "/menu/white.jpg"
      },
{
        id: 40,
        name: "Chicken Shawarma Gyro",
        description: "Served with lettuce & tomatoes",
        price: 7.00,
        image: "/menu/white.jpg"
      },{
        id: 41,
        name: "Beef Steak Gyro",
        description: "Served with lettuce & tomatoes",
        price: 7.00,
        image: "/menu/white.jpg"
      },{
        id: 42,
        name: "Greek Gyro",
        description: "Served with lettuce & tomatoes (Tomatoes, Onions, and French Fries)",
        price: 7.00,
        image: "/menu/white.jpg"
      },{
        id: 43,
        name: "Chicken Gyro",
        description: "Served with lettuce & tomatoes",
        price: 6.00,
        image: "/menu/white.jpg"
      },{
        id: 44,
        name: "NY style Chicken Gyro",
        description: "Served with lettuce & tomatoes",
        price: 7.00,
        image: "/menu/white.jpg"
      },{
        id: 45,
        name: "Falafel Gyro",
        description: "Served with lettuce & tomatoes",
        price: 6.00,
        image: "/menu/white.jpg"
      },{
        id: 46,
        name: "Fish Gyro",
        description: "Served with lettuce & tomatoes",
        price: 7.00,
        image: "/menu/white.jpg"
      },
    ],
    Fat_Sandwiches_Steaks: [
      {
        id: 47,
        name: "Ivan",
        description: "Steak & Fired Chicken & Mozzarella Sticks, & Chedder Cheese & French Fries with lettuce, tomatoes, & white and hot sauce",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 48,
        name: "Italian Philly Steak",
        description: "Steak & cheese & French fries & fresh peppers & onions with Mayo and Ketchup",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 49,
        name: "Pizza Steak",
        description: "Steak & Mozzerella Sticks & Mozzarella cheese & French fries with Marinara sauce",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 50,
        name: "R US",
        description: "Steak & Bacon & Jack Cheese & French fries with Ketchup",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 51,
        name: "Summer",
        description: "Steak & chicken tenders & Chedder cheese & Mozzarella Sticks & French Fries with Mayo and Ketchup ",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 52,
        name: "Greece",
        description: "Sausage & Mozzarella cheese & French pepper &and onion with Lett/Tom & white sauce",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 53,
        name: "Hot",
        description: "Hot Dogs & Chedder fries & Beef Chili with onions and Mayo & Ketchup",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 54,
        name: "MOJO",
        description: "Burger & cheese fries & Mozzarella sticks with BBQ sauce or Ketchup",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 55,
        name: "Double",
        description: "2 cheese burgers with lettuce, tomatoes & onions served with mayo and Ketchup",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 56,
        name: "Mad Cow",
        description: "Burger & Bacon & Jack cheese & french fries served with BBQ sauce or ranch",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 57,
        name: "Italian Fish Sandwich",
        description: "",
        price: 11.00,
        image: "/menu/white.jpg"
      },


    ],
    Fat_Sandwiches_Chicken: [
     {
        id: 58,
        name: "A LA Carte",
        description: "Chicken & Lam served with Lettuce, Tomatoes & white sauce",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 59,
        name: "Chick",
        description: "Chicken Tender & Bacon & Jack cheese with French fries & Ranch sauce",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 60,
        name: "Fried",
        description: "Chicken Tender & Mozzarella Sticks & French Fries & Chedder cheese with Honey Mustard",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 61,
        name: "French",
        description: "Grilled Chicken & chicken tender & Mozzarella Sticks with White Sauce",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 62,
        name: "King",
        description: "Grilled Chicken & Beef Steak ^ Mozzarella cheese & french fries serves with Mayo & Ketchup",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 63,
        name: "Meats",
        description: "Chicken Tender & Lamb with Lett/Tom & white & Hot sauce",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 64,
        name: "Cordon Bleu",
        description: "Chicken Tender & Ham & Swiss Cheese with Lett/Tom and Mayo Sauce",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 65,
        name: "Parmesan",
        description: "Chicken Tender & Mozzarella Sticks & Mozzarella cheese with Marinara Sauce",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 66,
        name: "Tunes",
        description: "Chicken Tender & Potato Egg & Bacon with Lett/Tom & Mayo and Ketchup",
        price: 11.00,
        image: "/menu/white.jpg"
      },

    ],
    Burgers: [
    {
        id: 67,
        name: "Delux Burger",
        description: "Lettuce, Tomatoes & Onions with French Fries; Cheese (Chesseburger or Veggie Burger or Falafel Burger or Chicken Burger)",
        price: 10.00,
        image: "/menu/white.jpg"
      },
  {
        id: 68,
        name: "New England",
        description: "Cheeseburger, Bacon & Egg",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 69,
        name: "Green Gang",
        description: "Burger, Taylor Ham, Jack cheese& Guacamole Sauce",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 70,
        name: "San Fran",
        description: "Burger, Bacon, Egg & Swiss Cheese",
        price: 11.00,
        image: "/menu/white.jpg"
      },{
        id: 71,
        name: "Tunes",
        description: "Burger, Steask, Egg & Yellow American cheese",
        price: 11.00,
        image: "/menu/white.jpg"
      },

   ],
   Wraps: [
{
        id: 72,
        name: "Chicken Caesar",
        description: "Served with Lett & Tom",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 73,
        name: "Buffalo Chicken",
        description: "With Ranch or Blue Cheese Sauce",
        price: 9.00,
        image: "/menu/white.jpg"
      },{
        id: 74,
        name: "Chicken Honey Wrap",
        description: "Served with Lett/Tom",
        price: 9.00,
        image: "/menu/white.jpg"
      },{
        id: 75,
        name: "Grilled Chicken Wrap",
        description: "Served with Lett/Tom with Mayo Sauce",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 76,
        name: "Chicken Parmesan",
        description: "Served with Lett/Tom",
        price: 12.00,
        image: "/menu/white.jpg"
      },

  ],
    Biryani_Menu: [
      {
        id: 77,
        name: "Egg Biryani Platter",
        description: "Served with Lettuce, Tomatoes & Onion with white & Hot sauce",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 78,
        name: "Falafel Biryani Platter",
        description: "Served with Lettuce, Tomatoes & Onion with white & Hot sauce",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 79,
        name: "Veggie patty Biryani Platter",
        description: "Served with Lettuce, Tomatoes & Onion with white & Hot sauce",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 80,
        name: "Chicken Biryani",
        description: "Served with Lettuce, Tomatoes & Onion with white & Hot sauce (TIKKA or TANDOORI OR CURRY +$1",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 81,
        name: "Veggie Biryani Platter",
        description: "Served with Lettuce, Tomatoes & Onion with white & Hot sauce",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 82,
        name: "Samosas Biryani Platter",
        description: "Served with Lettuce, Tomatoes & Onion with white & Hot sauce",
        price: 9.00,
        image: "/menu/white.jpg"
      },{
        id: 83,
        name: "Lamb Biryani Platter",
        description: "Served with Lettuce, Tomatoes & Onion with white & Hot sauce",
        price: 10.00,
        image: "/menu/white.jpg"
      },
  ],
    Veggie_Menu: [
       {
        id: 84,
        name: "Veggie Samosas",
        description: "(Roll...$3 or Burger...$5 or Over Rice...$7)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 85,
        name: "Egyptian Sandwich",
        description: "Falafel, French Fries served with letteuce, tomatoes, onions & white sauce",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 86,
        name: "Indian Sandwich",
        description: "Veggie burger, Onions, Peppers, Lettuce, Tomatoes with Mozz. Sticks & white sauce",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 87,
        name: "Samosa Tikka Sandwich ",
        description: "",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 88,
        name: "Veggie Falafel Sandwich",
        description: "",
        price: 9.00,
        image: "/menu/white.jpg"
      },      

    ],
    Quesadillas: [
    {
        id: 89,
        name: "Chicken",
        description: "Served with lettuce, tomatoes & cheese",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 90,
        name: "Steak",
        description: "Served with lettuce, tomatoes, & cheese",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 91,
        name: "Mix Cheese",
        description: "Served with leetuce, tomatoes, & cheese",
        price: 10.00,
        image: "/menu/white.jpg"
      },

    ],
    Sides: [
       {
        id: 92,
        name: "Chesse Fries",
        description: "",
        price: 5.00,
        image: "/menu/white.jpg"
      },{
        id: 93,
        name: "Chicken nuggets",
        description: "",
        price: 5.00,
        image: "/menu/white.jpg"
      },{
        id: 94,
        name: "Cajun fries",
        description: "",
        price: 5.00,
        image: "/menu/white.jpg"
      },{
        id: 95,
        name: "Chicken wings",
        description: "",
        price: 6.00,
        image: "/menu/white.jpg"
      },{
        id: 96,
        name: "Mozzarella Sticks",
        description: "",
        price: 5.00,
        image: "/menu/white.jpg"
      },{
        id: 97,
        name: "Sweet Plantains",
        description: "",
        price: 4.00,
        image: "/menu/white.jpg"
      },{
        id: 98,
        name: "Empanadas",
        description: "Cheese or chicken or Beef or Ham & Cheese",
        price: 2.50,
        image: "/menu/white.jpg"
      },

    ],
    Burritos: [
     {
        id: 99,
        name: "Grill Chicken",
        description: "Rice, Beans & Cheese (Served with white sauce & guacamole sauce)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 100,
        name: "Beef Steak",
        description: "Rice, Beans & Cheese (Served with white sauce & guacamole sauce)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 101,
        name: "Lamb",
        description: "Rice, Beans & Cheese (Served with white sauce & guacamole sauce)",
        price: 10.00,
        image: "/menu/white.jpg"
      },{
        id: 102,
        name: "Max",
        description: "Rice, Beans & Cheese (Served with white sauce & guacamole sauce) (Two type of meat)",
        price: 11.00,
        image: "/menu/white.jpg"
      },
   ],
    Salads: [
      {
        id: 103,
        name: "Chicken Caesar",
        description: "",
        price: 10.00,
        image: "/menu/white.jpg"
      },
      {
        id: 104,
        name: "Fish Salad",
        description: "",
        price: 10.00,
        image: "/menu/white.jpg"
      },
      {
        id: 105,
        name: "Italian Salad",
        description: "Grilled Chicken, crisp bread, fresh vegetables, Fata cheese, Olive oil & italian dressing",
        price: 10.00,
        image: "/menu/white.jpg"
      }
    ], 
    Drinks: [
	{
        id: 106,
        name: "Canned Soda",
        description: "Coca Cola, Pepsi, Sprite, Sunkist, Canada Dry, Inca Kola, Pepsi Zero",
        price: 1.00,
        image: "/menu/white.jpg"
      },{
        id: 107,
        name: "Energy Drinks",
        description: "Monster & Redbull",
        price: 2.99,
        image: "/menu/white.jpg"
      },{
        id: 108,
        name: "Cranberry",
        description: "Bottled",
        price: 2.49,
        image: "/menu/white.jpg"
      },{
        id: 109,
        name: "Orange Juice",
        description: "Bottled",
        price: 1.49,
        image: "/menu/white.jpg"
      },{
        id: 110,
        name: "Apple Juice",
        description: "Bottled",
        price: 1.49,
        image: "/menu/white.jpg"
      },{
        id: 111,
        name: "Coffee",
        description: "",
        price: 1.49,
        image: "/menu/white.jpg"
      },{
        id: 112,
        name: "Water",
        description: "Bottled",
        price: 1.00,
        image: "/menu/white.jpg"
      },{
        id: 113,
        name: "Snapple",
        description: "Bottled",
        price: 2.00,
        image: "/menu/white.jpg"
      },{
        id: 114,
        name: "Gatorade",
        description: "",
        price: 2.00,
        image: "/menu/white.jpg"
      },









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
