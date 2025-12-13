
import "./Menu.css";

export default function Menu() {
  const menu = {
    breakfast: [
      {
        id: 1,
        name: "Pork Sausage Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6InVzZXItcDkxNDRuVlkybFd3QVVuYlcyWE9xeWN1OmZpbGVfMDAwMDAwMDAwMGEwNzFmNWE1ZTVlZTY0ZjdiNDU0ODIiLCJ0cyI6IjIwNDM0IiwicCI6InB5aSIsImNpZCI6IjEiLCJzaWciOiIzMmNkMTQ4M2ZjMDg3ZjEwYmFhNzlkMmZjMzEyNDIyNDJhMzlkNjJkMzVmMGE5N2Q4ZDRkZjI1ZmVhODY2OWNlIiwidiI6IjAiLCJnaXptb19pZCI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ=="

      },
      {
        id: 2,
        name: "Beef Sausage Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.50,
        image: "data:image/jpeg;base64,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"
      },
      {
        id: 3,
        name: "Taylor Ham Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://www.bakeandbacon.com/wp-content/uploads/2022/04/pork-roll-egg-and-cheese-10.jpg"
      },
	{
        id: 4,
        name: "Bacon Egg and Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://static01.nyt.com/images/2022/08/24/dining/as-bacon-egg-and-cheese-1/as-bacon-egg-and-cheese-1-mediumSquareAt3X-v3.jpg"
      },
	{
        id: 5,
        name: "Turkey Bacon Egg and Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://130248881.cdn6.editmysite.com/uploads/1/3/0/2/130248881/4YN4RUEDY53KOJLS3LVJXN7C.jpeg"
      }, 
{
        id: 5,
        name: "Ham Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://oakmontbakery.com/wp-content/uploads/2020/06/Ham-Egg-Cheese.jpg"
      },
	{
        id: 6,
        name: "Turkey Club",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 8.00,
        image: "https://img.taste.com.au/V9EjRwP2/w1200-h1200-cfill-q80/taste/2016/11/classic-turkey-club-sandwich-24417-1.jpeg"
      }, 
	{
        id: 7,
        name: "BLT",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 6.00,
        image: "https://dyvn6jpt1f0d3.cloudfront.net/wp-content/uploads/2023/10/14154227/BLT-for-recipe-1-6-1200x675.jpeg"
      },
	{
        id: 8,
        name: "Grilled Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 4.00,
        image: "https://www.allrecipes.com/thmb/pnEUcAXDg5GUJ77fUDzZp41NWkE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-238891-Grilled-Cheese-Sandwich-beauty-4x3-362f705972e64a948b7ec547f7b2a831.jpg"
      },
	{
        id: 9,
        name: "Smoked turkey Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZ1oNGzjZW8D7PRISsVsYkuXK6tAgmrbwVw&s"
      }, 
	{
        id: 10,
        name: "Bagel Cream Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 3.00,
        image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2F2022-11-how-to-make-cream-cheese%2FHOW-TO-MAKE-CREAM-CHEESE_083"
      }
	
    ],
	Big_Breakfast: [
      {
        id: 11,
        name: "Western Omelette Platter",
        description: "Ham, green pepper & onions (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUrLMRq27gr1zey754_rvuLrNiFxpEEaR6A&s"
      },
      {
        id: 12,
        name: "Italian Cheese Omelette Platter",
        description: "Sausage, Mozzarella cheese, paper & onion (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2_A-WpuixX2NjzGAg7tNtFmgma5zslVCNQ&s"
      },
      {
        id: 13,
        name: "Bacon Cheese Omelette Platter",
        description: "(Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/10/25/68/picAmS8qc.jpg"
      },
      {
        id: 14,
        name: "Veggie Patty Omelette Platter",
        description: "(Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://www.thecandidcooks.com/wp-content/uploads/2023/01/veggie-omelette-feature.jpg"
      },
      {
        id: 15,
        name: "Greasy Sandwich",
        description: "Sausage, Bacon, & Taykor Ham (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8uC3a6u6-jpSOsWAgyaicSQ3DtXZl2Qrng&s"
      },
      {
        id: 16,
        name: "Blood Clot Sandwich",
        description: "Taylor Ham, Bacon with Egg & Cheese (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://copilot.microsoft.com/th/id/BCO.8b56e79f-1a28-474e-bbdf-aa1883521b74.png"
      },
      {
        id: 17,
        name: "Italian Sandwich",
        description: "Taylor Ham, Sausage with Egg Cheese (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://copilot.microsoft.com/th/id/BCO.1b9d7a33-89cb-4315-bd76-2c11fa30f80b.png"
      }
    ],

    lunch: [
      {
        id: 18,
        name: "Lamb over rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 7.00,
        image: "https://cookingwithcocktailrings.com/wp-content/uploads/2021/12/NYC-Halal-cart-lamb-platter-22.jpg"
      },
{
        id: 19,
        name: "Lamb over rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 9.00,
        image: "https://cookingwithcocktailrings.com/wp-content/uploads/2021/12/NYC-Halal-cart-lamb-platter-22.jpg"
      },

      {
        id: 20,
        name: "Chicken Over Rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 7.00,
        image: "https://www.hungrypaprikas.com/wp-content/uploads/2025/01/Halal-Cart-Chicken-2-500x500.jpg"
      },
{
        id: 21,
        name: "Chicken Over Rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 9.00,
        image:"https://www.hungrypaprikas.com/wp-content/uploads/2025/01/Halal-Cart-Chicken-2-500x500.jpg"
      },
	{
        id: 22,
        name: "Chicken and Lamb Over Rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 9.00,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJRU_4DouprSuRvD6QJiurrlvflX7FMYs5g&s"
      },{
        id: 23,
        name: "Chicken and Lamb Over Rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJRU_4DouprSuRvD6QJiurrlvflX7FMYs5g&s"
      },{
        id: 24,
        name: "Chicken Shawarma Over Rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 9.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbTSpZhFajYZ5qNlELUALPKbm5MZocUpGvw&s"
      },{
        id: 25,
        name: "Chicken Shawarma Over Rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbTSpZhFajYZ5qNlELUALPKbm5MZocUpGvw&s"
      },{
        id: 26,
        name: "Lamb & Chicken Shawarma Over Rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbTSpZhFajYZ5qNlELUALPKbm5MZocUpGvw&s"
      },{
        id: 27,
        name: "Chicken wings & French fries Platter",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5AaGQitXXp3ISk-p4XXzszeFKAZ-uxpP6lg&s"
      },{
        id: 28,
        name: "Buffalo Chicken Over Fries",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZ6SOFtYF3a1Qa5WRugzyr4xDqg7FE-PezQ&s"
      },{
        id: 29,
        name: "Combo Platter",
        description: "(Served with Lett/Tom/Onion & white sauce) (Chicken tenders, Mozzarella Sticks, and French Fries",
        price:10.00,
        image: "https://copilot.microsoft.com/th/id/BCO.986721c1-3b04-40eb-b87d-c4fb0ab02d84.png"
      },{
        id: 30,
        name: "Latino Platter",
        description: "(Served with Lett/Tom/Onion & white sauce)(Baked Chicken, Moro Rice, and Sweet Platains",
        price: 11.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSlSP0fi_zFdW7E47bHkZ86_UyqvI8azahrSyczYDVxDD8yIovQdho9aaTBGlZxp0WartsmyKxbhlxhLFj-22sQr3Ihc1P8NlN7Np2CxIldYkE0Gsdtr7P6xr5TV-xZd-mnrL_yKjAjkaNOKXkqAW_RpEL9EzbS7DUqUytPrtQyMNNy8bA=s1024-rj"
      },{
        id: 31,
        name: "Lamb Guacamole over rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSnN_9_uSCWdUmVzAqNNOg8CQZ4y_hZOzjnvsl2n2bU7I4zdfvfZn60_Yajbf4SMrDoDXu0C4Np3zkTolQtK4CBAETjAMsXVN0AxV7Sx7XfyTDfeaTFCvVlkk1Q4nYItUYYKq42ZndEFJksI_yBrsiBa8lPYtaatctU23P4gz4se8BkZBQ=s1024-rj"
      },{
        id: 32,
        name: "Steak over rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSnRGwsx_cH__vLkC2tsGCF0NDxDKkw7NXyrW-9KMPAwa5oDQEMR_7lanjmVj1yo83LSJnSqsdoDuZEtgVDb5Dr9G2y0KLQKi3lZ11CP1dtAzv7p00Sj1phwyHq3CtCAT1lihs-kgjgCuOyPNO-so4Py6pdjhJgyOnZHUvoE9eQDMPP32w=s1024-rj"
      },{
        id: 33,
        name: "Lamb and Falafel over rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSl_eSdoGJ98b0UanQw-8maRvFYkpF0KXBHSiT8AKOenTwU4A6JKUGeeIxf9z1amIqJRO__dOeRS4tzZ3AZf7u_Elb-WjB9Se_ZMvXQ5Qpc5Zx61Q1YhuVgIKL6HDM_OvG6hAENYvhYyx0DNJcFTYkuEOea0oM4pdyaSWbL7f_hCn_s=s1024-rj"
      },{
        id: 34,
        name: "Lamb and Steak over rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSm5JL6-z39lj_WcOiiPl2-A4bEIFOOmmKhmMbbeLFGINdC_ncL06sv2kBqAguk83TAJtH2I6xfM-Yov3m5AalLz-satwFkK4_TS6U6nIAsc7LluuP9qVl8XM06xaoShguJQH8r3ImLGdfsoLvAcTT1hV9fgs9hbPhJG38qXJtQasvg9tA=s1024-rj"
      },{
        id: 35,
        name: "Chicken and Falafel over Rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSlUKzkQNautug4FoecZw51zT8LngtjrCIPzl6kLyZNjueEmVbHKFAzSfJQIgX42DSJsy71BEeV3jOk1VLJWX0kcmWodpSYcEZOo4yiTr48OXltY6O85ivYqEPIB6oOgy_Ju1O_u3HRFfZS2teBN9be_zb8yE0usx661leoY5nYfj-pF9Q=s1024-rj"
      },{
        id: 36,
        name: "Egg & Steak over Rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 11.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSmtPz5qLFUTQDdBHLKNC5ji3ycasSys2nDWr5rjUKHA4LHzb1tXf07j86DdooU177AO2yJsrO5x6pT62x6Me8pbgAgsJjwgsbO7vEg1cs3DMFEQ0fWkAtMO6qjtIkh9rKBpNjz5fMoY6kQ0GRbJ8L_8Qqc1O6wWpe6i9k9dYgT_Nn68=s1024-rj"
      },{
        id: 37,
        name: "Fish over Rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSlE9h8LrZG6EiGHf-F3_pUDWaDAZ6TkjDMdSVnE5X-TRMRMviGCRsH79A_an9iWNj4f3cl9YJfe69lgS66l2bihdl32QM3CRY1dV-cF5L-xXkvpRK1d5UrwMFNt4OnWH0qutzsyc1PuIKDaoN4_5VuCCKUJc0d4CtLDBDpMITlKiS3c_g=s1024-rj"
      },{
        id: 38,
        name: "Salchipapa",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 9.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSlTf-kTsxdpTx8hxdkcKJheDFRAUNtIFq4U4a0OQn1t14sMa6KK3NdVRAYEsg6sAKeX8ezPl7jpiqiEMQEgCm_EK0ELJvoECTEoLOFUClJNmsTINrJO5UbkJPDi5A8FN59LTFAyTWOnBiznAq6iqXS9Mum7hCcT-xud_sddBN9PJ7C2QQ=s1024-rj"
      }

    ],
    Gyros: [
     {
        id: 39,
        name: "Lamb Gyro",
        description: "Served with lettuce & tomatoes",
        price: 6.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSlU8HhoINWDoffiD4ICWOU6uWW5g519TzDflPkci4oCmfMTtCOWPqajRPBAjnqhqjn65kOHEAybqHuQbVXQgH4cjK1R8Eiv6sRcE0XS-QJLKutielpwvPb69AvcrL_3UAmUgYIwXk9NJLadBb1B0BtxBX6H9lUhZVAyEuRRk6Hxqy_QqA=s1024-rj"
      },
{
        id: 40,
        name: "Chicken Shawarma Gyro",
        description: "Served with lettuce & tomatoes",
        price: 7.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSn_z_-ELiF7j9Jn5BcDOI78pFjU5knydXQE6-qXikGp7iMbYesTxv0M4p7SutwOd7SghWByLyMQWvOcH4DemW8bi4IhxCeebdUuuG4Ks2Q8IJQ8bCERSauEVCj5DHVHrYEXvvyE4PguERJfruwH_yPMM08Wr8Emupm6m7ZMxfOxivdVyg=s1024-rj"
      },{
        id: 41,
        name: "Beef Steak Gyro",
        description: "Served with lettuce & tomatoes",
        price: 7.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSmt0LzZkP62QKp3ey18VFH1xrzXkY_6DXwXPzUJLV4P59dXmoJ4n86sZns6ZS4JNqMZZ240Cz2kCwmqeTdyGlmw9IAHLcBTf2TkOJBgjO1HFXMAyCwbUqBpFpr4pwfJegh6InRIF8WjFDPj49uUczcqKU37WWJb6Wzs0QVrEJI4Udvfpg=s1024-rj"
      },{
        id: 42,
        name: "Greek Gyro",
        description: "Served with lettuce & tomatoes (Tomatoes, Onions, and French Fries)",
        price: 7.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSmJhc14M6TyWA2Zoum_TzRXuYTeY960gRDfN-bSnsrfvZxMUolvtXbgMCyjkY6DrVdRyMRFwdkwUq-T-lIYxrc7VeR8mImq4WQFLHrjoJ5mdsGN9hOfcDTKdFIjy7Yi29lr9gyqhbHGMEgsWjCHcPiPqh2NHgCF6XJ2nKc_xzEqZs3K9g=s1024-rj"
      },{
        id: 43,
        name: "Chicken Gyro",
        description: "Served with lettuce & tomatoes",
        price: 6.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSknKebzWpZ_C9--qFX50cZxv0fmBinVdtYsLDEcrLgghJb3dc0usv1xLelOuqcmeJUwQyP1AVS0LxKNiCFbD7sVkotlLThVCjuXIHMmjD9WiSCy9KwciMTzDvruHuzmUMErAwclodCkt5EtdhdMNRy-RQnuaBUrrQWf_cTlXOFxw4GpFQ=s1024-rj"
      },{
        id: 44,
        name: "NY style Chicken Gyro",
        description: "Served with lettuce & tomatoes",
        price: 7.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSn2jqfcYT_l5PW99IsiiGzIJicNKXPut-nFXO0j5-U9koLUV0lypTGP5BmoBkx_3G21jhtJN2CB10ZgTqgpoZ_LBAP0tSCvfNF5okR0KLwKqILidMzvT-7hqyDD429ePzH7lG2SvmVuvEwBppscAHgT4dNmIf9ugAw1S25QHS1LAlNBSw=s1024-rj"
      },{
        id: 45,
        name: "Falafel Gyro",
        description: "Served with lettuce & tomatoes",
        price: 6.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSlNMLthJD4wp2JDZjL1Q1KpSxQy4knMB5Mzy51Oqd2f2M9LTdSy-dHf6TIqIIBTj1vTAh84nyWmfDmaRjwPdlsKv-l8K5jApiG-eYdOeJuhWQPgXaWWbuihR5l1b0EcTX2PoXdoYXl8t1z6MG8rOiMiLWRR9HLeRsmdx6JX7Tp9r5e7lw=s1024-rj"
      },{
        id: 46,
        name: "Fish Gyro",
        description: "Served with lettuce & tomatoes",
        price: 7.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSk6LinEgpRMoZpiCJLRdvcmxwBpGvGQWehT8UGr_27HE_DWr3PYJQyzkCe4eQvVpBYDg2q1LSj3Y0rJo6sy5ui7pa8mDVQNZ9bnjT5SLpyEZP2CIVvprwbjjEZu6pq0830cEikLuZH8316zSssyk1JKjlpAOisv5SUbR-YDMWwz1AfBZw=s1024-rj"
      },
    ],
    Fat_Sandwiches_Steaks: [
      {
        id: 47,
        name: "Ivan",
        description: "Steak & Fired Chicken & Mozzarella Sticks, & Chedder Cheese & French Fries with lettuce, tomatoes, & white and hot sauce",
        price: 11.00,
        image: "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6InVzZXItcDkxNDRuVlkybFd3QVVuYlcyWE9xeWN1OmZpbGVfMDAwMDAwMDA0NjBjNzFmN2IyN2M3NmI1ZDkyMjJiZDkiLCJ0cyI6IjIwNDM1IiwicCI6InB5aSIsImNpZCI6IjEiLCJzaWciOiJmZDJiY2VkNzQwZTg1OWFlOGM0YWUzNzdiYTBlODE1NzZmZmJjMTU1YzU4NTQxZDQ3YTAxODY3YjRiNTBhNmVlIiwidiI6IjAiLCJnaXptb19pZCI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ=="
      },{
        id: 48,
        name: "Italian Philly Steak",
        description: "Steak & cheese & French fries & fresh peppers & onions with Mayo and Ketchup",
        price: 10.00,
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMVFhUXFRUXFRgWGBUVFxYYFRUXGBUWFRUYHSggGB0lHRYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUrLS0vNS0vKy8vLTAtLS0tLy8tMDAtLS4tLS0tLy0rLS0tLS0tLS0tLS0uLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABFEAACAQIEAwUFBAcGBAcAAAABAhEAAwQSITEFQVEGEyJhgTJxkaGxBxRCUhUjQ2LB0fAzU3KSouEWVIKyFyREZHPS8f/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAzEQACAgECAwUGBgIDAAAAAAAAAQIRAwQhEjFBBRMUUWEiMnGh0fBCUoGRseHB8RUzYv/aAAwDAQACEQMRAD8A9NuOANTVHxHtRYsnK7qD051h+2XbZoFq2SDrmPTyFYc3yxzEkk8zrNYp6h17J3dB2RHL7WV16I90wPafD3dFuKfWrVrgZSQZr5+sEzpM8o3rR8P7SYnDCGl08zqPWlDUNr2jRq+wOFcWGV+jKTtZdY426pBkN8tKuuH4hVC6QdKynaXjme/3yrBIgzzoKxxtidTFZM+llliq5GfUZpOKxvoj0bi+IueEoJHOqC3rezbGoeHdrDGQifOhsVjS7yNKw4tPPHcWq9THCGSbqKZv1vqVUltVg/Cm8S4411BbtzM61kba3CNCdqk4XijbaWNKGOeNPfmT1EMsYriRBjOJ37LwdJ9+tct8bughlYqR0Mg+8U3tG7X3BAiKqrQZdGFa4Qjwprmd3s3JglUWldHs3Y3tEL6AMfENCK1LV4Z2bxrW76FTAJAPmK9rwdzMgNdHT5HKNM5HbWhjp8vFDlIc5qKpHqFqvOMiRakWorVTChAydKIt0OlTpUkIPt7VMtQWTUy1JAPpl0aU+uMKYFea4TT7g1qFzUQGqJNSGmrpSpIBTXaUV2mB8+dr7ad2GXcxWesmBrRnHbjELOwNAB65GCLWNJnq+z3wxuw2zcykGtrbFt7MyDIrA27mlG2eJZUgf16Vckqo6s5caTTBuLYQSY9KzT2iGir3F4zTeqW3dl6vwcSTOH2r3M8ka5lthUCjzokPQRepLbVVJXuzoYciguGJpuDYhiDOoqyv8PzLmHrWQs4grsYq3wXFHG7EjpWHNjn0NixQzbMl4lea3EDQb0LxLGK1sEb6VcY1ldY5msxxNxbQoQfKo6dKVbbnG1ehejzLLD3f4O4TFGQQYINep9me04CqtxhqN/4V4vhL2tXmExOoJNb5Jwlsb491rsPDk5nuqcSRtiKlzg7V4/gOLMWhcx92tejdlhdceMEdJq/Hkctmed1/Z/hns7Rf2qnAphtwalUVcjmMlQVMlQrUq1JCDbBqdaFsNRANMCUV00wNXakAJitKFBmjcWkihFWKiwOxTgK4K7QAqVKlQB4dx3sdfykJBrKXuzmKXdJr6AcA0Pcw6nlWaOFRVI149Zkhsj5+/RuIXe031oa9Yuj9m/8AlNfQb4JPyj4VC3D7f5R8KlwF/wDyU2qPnDEW7p/A/wDlNRWLDg+w3+U19Ifom0fwCujg9n8g+FWKW1UY5ZG58TZ4Jbw1w/gb4GiFwF7+7b4V7wvCrX5B8KenDbY/CKpcGb49otdDwlOH3j+zb4UbY4Vf/umr29OHp+UUTbwa9BUXhbL4dsyg7UTyHhXBcQzCUIHnU3HexGJvEZAPWvXlsooJMADUmo8PxW0yM9tg4WZy6nTeBzqtYYYnxthqO2M+pjwUjyHh/wBk1/d7oA8hWr4b9mllI7xi3v2rUi87sWDkIR7JGoPl0qa1aZFJE3ARqCdvMVil2hxu4xtef9IrgskFXHXwBcNwPC4cCEHoKvsO9tNIiqzAYe22zhjlnmI12IPOjhaDlToYU665WB2owarO03JJeXUpywi3u2/iNxWI8cZT7+VQ3saiNlY6xPlTu7GhRpSSHBIMHmJrv3JSZylo0k/KKlHV590Q7nEOXHJMTykHl8amXEr1oHF4bMrKrBgV9kjaelZPtHxDEYSyty0qsqeFl1ze+py1mRbKrCOmhI9AtYteoobFcdUMLaa3DqF8uvurzrgXacY28LbjuiIZQ2nvg1pr9lbdw3c8kgDQ8h0olrsiW6ofhYp0WS9qSufvLbArGkTPmOtHWe0QcgIPjofhWKxfaTPcW2FELqTzIFV2I4vi2vh7SL3YHr7waxeOz21GXrvXLyNPhIVckerffZG2tC2uI232PONeorG3HxZgpcCru+hY+4chVpw17jL+uVRqco3noa0PtLIqbVfEz+EjXM0012qO099gQptr/imQOcCjbGZYL/WtWPXOdey68yiem4eofSob72POlVnjsRDw8yuYVC4qZqiNaigiYUwipWqNqTJIaKcK5ThSAcDXQ1cFPFMB6vUqvUIpt+7lE0pSUYtsaVukVPGcb31p7JRlJJUk6AAdddQdPjVUvFXXW3hjnAyObagKoAG0xnEE/A86Ne4LxaSSZkAbHXT0ou6AFgD+utefnnlkuUuR2I44wSS5lZxJLtoqbEwyybTE9SSTJhdTVhwVAUOKuIy3TCqJ1ADQM0Eg6ydtjUmHt6zpJ5t06Cdp0qvclcU9y73dlQkMcxdroEhGCbW4g68/Ss0MclG/Tr0+r8ti2WRP2ftltj+LoAWuMyZGX9ZkiMx9nMRBmAKmt8Sts63QzC3kcHwuCGVhpG3JuXLzqjv4AYoNd7641rKAqfs2XOrGVPtZsoGo0ExFAcRY4W3atWENxmZ5OV1trmBOynQSRod+oq6DfCmnb/8ARTwK6a/Y3nDMfZuki0AcwzEjUEbBjGgNEpeKvLeyRoQZWa854JibljEOUV7aXLawACEBBOYZeROaZge81qMDiGXOG8WYyNScvhC+BSYG0++an4lqk3vz9PhRCWDnX9lz34FwrAhgYPOeYqnxGBuOjDLzlQY115k0Nw26+FYhe9vaATcYZugIkxoNSdCfOiXulwzuA5APhMlSJB9mYJEaGh6hSXDL15AsTi7XpzBV4GrlibS5go2UlgwnTTajMPw8MpBUjKpiIEmNBrvVbhMS+IYBGa2SqOGtk53WSCDbZfDpl13k+Wp17AEgtauMt54zPcz3F000TPAMT09apjFzpyvbam9n8WTbq6/0cXhK4h0uXrD2jkVWTw+ILIUhkP08qLwuBwyvlUSPZicwGUwdI3oLA8TumyLl0XFKsygIhLPkJAfIVlc2WddNRrQHDe0Lk3bhw4a07ju7lsQ48YV7dxCQVZWzTGmh9dbbVuMf1dOyl29mzQYDjFvJ7JtgSMuUtGUx4oJj1oa7dJcXrbTKwiEgWzqZI00bWNTWU4/xlLa2b1hMwe8BdMkSsmdDqZb3c6vjxl7bIluxFowzPEjUwQAGmY16VknkyTSlkaVcvPb+PkaFiivdT/XkWtrHlWyYnKhcHu5ylQQNcxHpReBuGCqBWUHxZdjOuZdZGvKqC5xawGuKSl1Tm/V6SsIpdMp3IBzf9dVfAbyYoX7dmw9lCqmxcBhkaNC8GRDD2djsedaMeRpLe/3b35b9d/QrljtPb6f0brOnU/Cu1V/dcT/ff6VpU/E5fyfJEO5j+b5v6El7Q1FNE3xNBmu+2czmdJqNqcTTGqIUcroptIUASg08GoQacKAJ1NBcZs95adAA2ZGGVtFaRsx5CiVNMvbqeWo8vWqtR/1stw++iiwHDUt3O+KxcKJbiZVQDJCevPyFSYzHlrotWVUqj5bzNIJ0mE08wfWiriFi+aQNgZjQjWCNjrQzcOXKCyqUs5SjOxZ8wBBOo3AO5Os1xo27v7R0pbFmkcjt61Qcd4h3TE5Gd7sJoBqFBIDk6KNTB6nzo3h+GC3brC0qByjFwxJuHKASyx4SNvOKPOFVoB56U8mPiarkRhKuYJwLitm6uc23Ats1t2bwrnkKY18XvjSamtXLZuF0uZg4GUF9CFLaokwDvJG8eVB8a4eDhmsgSA0hVUSSWJJb94Ekz1FZLh/Z+9b/AF7FWZdQdWImZIY6zqdo3o9mMavkCTk7PQcRftgBn21mBJAHOqy1jytpgpDWSe8S8cxuZWlyuUrMjVQOgAqi4dxEvg8TbDXDiEL93eaCH0DKcw3A1UiDtFaDsxjhisNbUkZ8pYnKVBIMbEAiZmpvEqaXUjx09+gf97W5g+8ViJAMkQwkQNDqCJmDVd2e4YWY3u8zNkW27kgZikmSANzOvLah+IYhrVkOwDBj4VtKSxUkbqegMkiq/E8a7vLatPbti4xDFy2VSV0IUbmYkEjbeqZRuSvlX8blkfddc7Lm5xm9YuP4SbbL4Sil7gOwEbGSfTnTuH42/adEuW3u2xlUuqlnBMy9wABQvs6jrtRL4jLbUKwfQS0dNoonEOTbQrcOYjUD3dB0pJ8PrX390J0+nMVvia3HxNl0KoEXurozCSQcw6ggjlyYUXhrSrZVbOnMnctI1Yn8x3J3mgcLhFFyyD44BEszAyV8TMBo2kjWp8dbi8toWhDgwf2asozKW15kCNOVXNylt05eRXUV/JkO0/CwyHuwboQojWVg+IlTuNQYIMTrPnVphzctmyqZzbIbMInUBcoI8hII32oMviMHZPekC7cJysAzpn1ZS+UTso9dOlW/C+LG4y3WtlW1DKVYBjoC6+RgR1mseRcMEnsrr+zYpvlzA+M8Ics1y1cklllSy2+70C+HpJH4p1qx4UzFZWwLLq+Uu6CXQOpYDIdj4oJOm8UXiODWbqX7hFtjdEsb6h0QLBUFdJRSM0TvzqxNp+7U22UjwliVzB05hYIgkbHataxOk4v7++Zmea1wtBP3den1pVRfpr/270qPF6f0+f0DuMv219SzJFA4lYMin94Kje4K7rOUQC5SmhcVcA1oe3xFdpqNjosZpTQwvg7Gu95RY6CQ1OzUILlOFyiwoKDUrreEz/RoO/jFtqXcwoEk9KocV21wWUqbk6bAHX3VGe8WkOG0ky8xjuAuRQ5LKGlgoCk+Jtd4GsU27lYRodR56jY1gMF25uXr2S3aOvhkmdOTEURjOPvYfYN1956VxMmPLFpcPzOrBwlyZtnukKTBMAmFGYnL0A3PlSsXO8thgTB8QnQgHkRyIrJcO7f2iwFzNaOu4lT6irC32hw8F+/tgO7HxMEjWPZaDvTlGSVSiyFq+ZZ4vHXlV0sWQ0JmDltGYkgiBJBGmvnU3A9mF46ELlHJYmdec6b13h3ErbeK26Pp+FgfpXMwzHbUkgDkKk400yNj7fD0Vf1QCgbAQI6iBypXrRGo8M8/qDXFuZdRT2ugjlB3Bp/EVlZbxTC9kZHIW34W0yDkQD12+FUuI4KL1/M+8gjn7iJrSqNY+Hu6U5okcjyqE4P8LoshkqwnCAIAhGwA+FLFXWT2ELksvhBAgFgGaT0EmOcVD3uvi9KIsPzp8PQg31CsqkAyQ248qNW7ME66R8OdAd6Dr6VPYaBTSV7EWGsV25VA1gamJMGBMSSNpoTGh2EWyobkWBKgTJkAg/OpL13KyqW0P8OXlRLfeSBejDlRxZyhVVynst41UsNmj2gD03o/DElQHAmBOXaY1y+VB99oJIPnXUvVojKK2RU02F/cl8vgKVQd4etKpXHyD2ioZahuJVocOKY2DromQzmLtTUHCezhvvLSF+taX9HSavcBhBbWIpxjfMGzJ4rsey/2VwjyOooC/wABxajwlW+Ir0QiuEVJwRG2eWHC40fsvnQWMx2ItGLlph8x8RXqeJxdtN4J6VUY7Erc3URUHFEk2eZcc4hce1kYMivpMb+VZLB9lWvXIBaJ8TRqo8jXsPaThy3sM06ZPGIGsrrFZ3sVdN/D5gMo7x56+ExqaxajJPDuuptwRjkVPoZy12ffDswwy5SR7TSXI56nShuLYtHGQtAEfhJMjetp2g4gyDLbMHbYfWKwdzKXAcTJrHDLxvnZt7qlyopcSUbwoh/xMdT6bCgjw1mMqpJ9a9N4fwnC92c1vUwZ1nfYHlVXxjilnDjLbTMZAIXl0DOduWlX+KcZcGNW/vmVPDGSuRh2wuIQhgpUrsyyCPUGalPHMcNO+vepJ+e9WmJxuJY/2SiTtJJ+NQ3bd0/gWf8AF/tWhZW17aj8iruY/hsr17SYwad9cj309e12MBkXm9cp+oqXEWbqjW2I6if4jWg1STrbPnAmI32q1d29+FfIhLG11Zb4Ht1jVYMxRwNwVAkcxKxFaXDfaJZc/rVdCNtJH+mT8qx2GxVoaG2cs7+Kf5fKi7ODtXpCkDSddCeoGlZ80Mcvei18BqMkvZf7mkt/aWpYg4Zik+E5xnI6lSP41Ie3tgjwi6pMgyAcvQ6MflWft8FXT2h7oog9ms4/Vss+dUznp3s9iChqE/MvOzXaWxhlYXcTculmJE27pgRtMGa0mD7dYVpMui7eNSNuemkVgrXDbtogFWWB7S7fEfxq4s4cMgtXM5fNKZTqZEEGN/dVE3C7i3+lfQTnlv2l/JsrHavDsjMjM0Tsp1PTUVSL2juOcz2nWCYAAMCREkHU71iSjWWYcgyyNQdCY93+9W+A4hZUAAOJOjTLSSNGkkNtExzNGWPVFPfzj0Nfhe2JW4JtXCIiMv0MxNWWM7ULOYWrgmMohQSY29qKxt3tRbW4QVJQEgFInQnUjah8Z2qm4LdkG6DBzQVK+TSIn/CTTjGfDty5kVlyN8jXf8TX/wDlj/nX+VKqv77if+XHxalVPHL7YceU9MNsdaYR50I+JNNwbM7gcudegIlzgrPM0bUamNKG4hj1tLJ35DrVmyRHmT4nErbEsYFZziHHWYwmg+Zqt4hjGuHMx9w5CgDdqqU7JKJYLdnU05wGEE1XC7Uq36jZKhnHsHcfDXbdp2zFTlHU8h61XdieHXcPw9EvArcZrjMvMZmMT6VdJdpuNxGnkBXK7Wz8ONQjzkbdFC5W+SKfHYNW1NZ/HcKtTLbAyeWnvoLtjiuIoTkCpbJhe78bnpJI38hWDxSX83/mBdPOXzGDymdqz6PQZGreRL0W7NmXVxTpKzYdo+2Sovd4chmiJGqqPf8AiNVHD791bQKrn7xp11yzuxPPX6Vkyh6H4Vd8GxxVVtkNuYMaAHkCfSuu9LHFj9nfzvqYY6mU509l0LrCd+11gzCAjP0jlMHnWgbBC4Ac0OCGUxofevr1rK4HiJZblyYiARvI3n3aVI3aVVC5Bm8uY9ayZcOSUvZXI148kUrbNFjy6qcOYYiDmG0AQYJ16VQ2sK9h82XNmOm23Q9T9K7gu0SvdklgY1zRy0ABFSYriwdhlkAHXznQ6Tpv8qIwyQfDQOprisLXh6uCxABbUDXQ7j3UXiuDoUEt49P1iwGgaGQd+VVeIxU3VW2FyEgOec+RnSrXG8SW3bbMZTKNDMjxaAMNYkL5VW1ktU+ZP2Ut1yIOKWbuGIYAtayggsRM89vOoLeKuqO9yeAiZBMjy8zrtXMHxG7czi5H4O7EA+EzIhtAMuvX41Z4Li1uwzIYhlgqTKQZBA66xTlCtmrfWiuM+vQhwPaG+wOQTGkHQ+ulduccvrq2EWAC2vhbTU6QfhSw1hxdAtIzIczZoYhdRC7anXr9Jqx4vxu1lUMQWMrOgiY8YjmRyNVd1jUvc/ktu1swfhOLwuIYLcDI7bjLMgjcECDvzjeK0+I7HKFQ22BtDXYHXrB58oqowOFsi/aW1orIMxHMnRh0MxPoOlWOD7TLhL5wt95U6JcY7g6ZbvQ8s3x61Rmi1fdX9Pguvw5i4LptKxJ2QE6AEnfwJz9KtrXZ0oACAVHkqgRttWgwWKXQ+6dtfMH4VYOykeX18qywTzQd5NxSyODrhK37rd/P9KVT98fyiuVDvI/mn+7FcvJfIbesDrR3C8PlE9aA1Zgs1cDQAV7JHFY93rJ8SvG7ck7DatFebQ+6qBrXiI9ajMcSDF2JWRyqnJgwfSrskofL5GmXrNpxJEHyqtoaZVCpUWm3HQGBJp64lRUbROgq2mmtOfAoyd2sgEcyTHUyTQBxRJgUdZxR9k7xE1k1SUkrRfh4ovmO4hgLXgkKckZc2sGIkE7HU0Naw1m4IULI0I0NZ/tlhcTFlrNwmbgW4BzB2J/rnUOK7NwjXJZSBJIJmB0rj6jTd5U/dfpv8jbjdbWaS5wK2w2A9wquxfZDDuuVxI5a5T8RWb/TV/DhUh7wYwp1020ZtufOrDD9pWgi5adTyI1HqNxWXw2qx7xl8PvmXNJ7MrsZ9mCGe5vsgO6nxj4yKBvfZY0HLfM+awPka2NrioO5jqJE+6PT5URa4nacaOpB3Egz1q5a/XQ/F8kVPT430PK8Z2AxKyVIaI2OvpQgwt2yCt61cnTUAnTp/wDte22cSoA291Sm3afRkBmrV25l5ZI2v2ZFaaMXcTw9OJKjwJ/ezLB+FF4TFWzcDM0rrodSPTY71v8AtZ9n9vFhWsXO7dZjMAQZjQsPEAI03iaznYnsYe8u2sYhlWgA6jaQynmD1HSuhDXaXJic1Ldc11K7mpU1sZzE8RVbmbNmBn2ZnTYmliHF5c0yzDQDoDIBA8wNK2HaD7N7aS+HJIj2JmPJZEH1rMYfs1i70hUybRmXJsdNOVXwz6eS4oySrnug4ZtbrY1HCOMzZa2fCQrFSfDJA2nz29Kx33yxduPc7s+yIzMTJB1JGnLpWnwPYPFOCLt9U8GVYkkE6t852OvltTD9k7gaYkeoyg1RDV6PG2u839LLJylJpqIBwa7agM+ZYkyrb6GFE7a1YX79jEPlugEjRGLaRlACnedhtzJqA/ZpjMwttctm3uCCxj3gCDVtgfs9uowY4hIGhAtw2XyYtvUcmq0sXfeK/wBfoNTm9uEH7Kdorlq+cMoe7aBiACWtid1PNRMQdP4+pYfEhfa08/5zVX2f7P2sP4bawW3YzmM9W3NXN/gdu7pebMoIIA018wP4muRkT1ObvMMaXVut/WibyJKpsH/S6fmX5/ypUZ+hMP8A3KfBa7WnwWT8xV32PyZNw5N3PpRTNSiBFQ3Hk16rkcfmcuGgcRb1+ho5TUd9ZFJkiuurpqJ8v41X3Vy6jb+t6tWWNtRUL21bbQ9DUGhplNfUN5HrQYwjCrTE4QrrFQrVTRYpVyFh7YWmYhTmzqdIIK+fIzT7hgVXW71ws4ZQFEZCCSTprmEafOq5pNUyUbTssMLd6tmE865exJzi0NM1tiHjMoIIEMPUHz1qkOOa03iErz8qtcNjkbVWBMaAEa+tYHBw2ZpUlIMTh6BGAAgkMfLYadNqqL+CdLxfxPabKMmWckTmbOZJmRv0oR+0Ywy5sS7FLlxgv6vIUXNAVhzjrz3q5s8WR27sONgRHMHUEHmCKrnGv9E4tsjvcDtMSwG9A3+z1vkB5j+NXzYhRpIHSTTrwBy+7WoyguhJZJIy4wZsg5WgEiAZIBHMdDVthcQwHiE+6u4zgwuMLhJhfwA7nef9qKCSnhjbT+E1nyaVT5lne7CsY6IkR76ceO2CzLIZ0A8IjMc06L1216aUDZwN5kUXXXOPaKAhTqdgdtIpuE4CqXWubz/W1ZHoI8Tu/v8AwTWSLVsHxnFL/eM1uycpiFZhuBEiDpQT8axG/dFT5Q1aX7tXbNkanroKu7mK24V8yPGiXDcQtuBqCYEjnPu3ofil+8qr93TN4iHDaQAAZExP+1P4Rwruw2ZmeXZpYzlBOir0A5UatuSelUR0KjK+fxF3iArNrETrEQNdN+fOBVhhrNwnxyYjzHoTv8KJwq5dPL0oxDV+PRJ7vYjLMdtoTEgUSFqJXoPG8VVPCJZvyrqfXpXTxQSM0mWXeeVKqD9J3/7j/V/tSrRT8ivYu7hqAkdafeB51CFrqMxocDNdNdQUzOKQyC9odKheDvRF1wd6Au3oNJjH5WHsmR0NQ3Mp9tCp6rUysDT81RoaYF92U+y49zaULfwL8lJHlr9Ksmtqdx8KiFiNmIqEsdk1KijxGEnRh8RWf4hwXxZ7ZKsNiPOt7+sGzyPOonDHe3bb0FVvES4zz7iOPcWgl6z3o0zAgEGPxa1UL2jsLdVzbupAUaeyoWQAE6QeXQV6ddwtth48P/lJ/gaqcV2ewb+0l5fdBHzFV+Hj1JrK+hUjGWMcmaZy6SrAMNOm/wAquMNxi2Blzbaa76VTYrsFgn1F5l6Zrc/MEUBd+zVNkxdv3HMv0mqnpV0b+/1J9+6po3WHvd5orDaR+97q7axKFNobl/vWGTsbxG2ALOMtkKZUd5sf+pZHxqduC8XH4bLeYdf4vVUtLPo7Gsq6m2t4kVKbw6154eHcaH7JfTxfR6b3fGV/Yf6H/gaj4XJ6Eu9iehnE29VW6hdQCyfiXNsSJn4xQGBx1u7iBaLurIGMGVVhoOelZa2/FQJOF+BI+UTTLi8UYg9wgI2zB2j6VWtPJyv/ACT7yKVM9ExWKVWVFViGLagSqwJGY8p5VIjiK8+t8O4s5k3As9E0Hukmj8P2Wxzx3uKuRr7Pg+lW+Hl6fP6FfeRNk+MRBLsqgbkkD61AO0NptLZNw/ueL4tt86q8D2GsghrpLt1clj85rT4PAWbQhY9KsjpZXuyLyxBFt3ru57tOYGrH3ty9KL4alicttlZsufTxAgmJzDQ6g86NF9dhSW8OUD3a/CK2wwxjyKJZGyXux0rtR975/KlVvCV2OdKjuJRbLUT25q5orAL5NQirB8P0oVrBnpUaJWD3BUb2RuaKNmTrTbqxSAoccjAkhmBHTaOhqK3xkro6+o/lV09rfSqPG8O8/gKixljh8cj+ywP9cxU81kcTwtyZWRHOYPypLi8Tb/eH72vzGtAGurhFZi32nj+0tsPd4v5UVZ7UYdtO8Cno0qfnSsZexSK0JZ4hbbVWB9xB+lTi+OtFgOKdQDTDh1/KPhUgcV3MKNgB2waH8A+dN+5J+WPWi5pUUh2B/c1/e+NOFmPxOPU0VFLLRwoLYPkP94/xNdGb+8ap8ldyUuELIwG/O1PE82NOCU8JToVjAg6k1KiCuqtSqtOhWcX3CpVmkq08U0I5JpU+RSpgWpWm5KIy0stWEQfu6Y9qijXKAAGtVE+HFWLLTClKgKp8NQz4PWTV4bdRtapUOyiuYQULcwQ6VoXsVA+GpUOzK4jhCnlVPjuy6PrFbt8LUZw1R4Qs8pxfYkgyh19QfiKBPCMZaPhvX19zlx8HmvX2wc1C+A8qKYWeVW8fxC3+2J/+S2p/7Yqcdqsdb9pbT9IDrPzNbvHcGnUCqTEcBmk7GUf/AIiXU/tMKf8Aoefkyip8P9p9k+1ZvL6Kfoatk4ErjK6A+lDP2QtDbT0H8qAH2vtHwZ3Nxffbf+VFWu3+BP7cD3hh/Cq5uyabQT8B9KevYK03Ij4H6igC3TtvgT/6m38YqZe2OB/5m1/mFU1v7NcOfazH0T+VWOF7AYJNrCsf3vF9dKdCsLtdr8ExhcRbY9FOY/AUYnHbR9nOfdbuf/Wp8NwFVEKiqOgAUfKjrXDFXeKKYWV68TY+xYuN/kUf6mFPN/FH2LNsf47pEeiI0/GrlRbAIkCR1FQreA6k/uif9qfCKwS3gsSw8V1F/wACa/FiZ+FN/wCFs5m7iL7+WYKvqqAA+tFtibp9hAPNpPyEUO2GvMfE7ehgfAaUUhjf+C8L+X/t/lSqb7i3n8a5RXoBq4rlNXEKeYpNcHUVYROsK4BTTeXqKYcUnWgCQ1wCojjF86YccOhosAgrTStD/fTyWuG+52FFgTm3TO5pgznnSNkn8RoAcbPuphtL1FN+6jmSfWl90XpSA43dj8QqJ71vr8BU/wB2XpS7hfyiihgrIjDQj10+tD3uHA8vhVl3A6CmDBiZAj3SKVCKoYKNAKkGFA9qB76tDhupJ9TXLeGUTpRQyut2E5An3A1w3ANrbH0Aq17rnTMlFCKpXuEgC2B7yTU/cOfxAf4R/OjrSCpAtAFU3Did7r+kD6Vy1wO2DPiJ8zVxkFdyUUAAnDUGwom3ZjlRAWnEaU6AYLY5V0YenK1JrtMBmSlTu/FKgKK5qbSpUugDVpUqVIkh1dWlSoAItUQ1KlQJnUrr0qVSEMropUqAFXDSpUAIVIKVKgDg3rlvnSpUAdeo6VKkwGWqclKlSAetPpUqkgEKc+1KlQBC1RPSpVEaGUqVKgZ//9k="
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSRxye2TDzRDi_QOgeILnJMO6U3cEWJw6Fw&s"
      },
      {
        id: 104,
        name: "Fish Salad",
        description: "",
        price: 10.00,
        image: "https://static01.nyt.com/images/2025/08/26/multimedia/31EATrex-crispy-fish-salad-blvf/31EATrex-crispy-fish-salad-blvf-mediumSquareAt3X.jpg"
      },
      {
        id: 105,
        name: "Italian Salad",
        description: "Grilled Chicken, crisp bread, fresh vegetables, Fata cheese, Olive oil & italian dressing",
        price: 10.00,
        image: "https://cdn-aboak.nitrocdn.com/QJsLnWfsWAiuukSIMowyVEHtotvSQZoR/assets/images/optimized/rev-ca18e1d/www.slenderkitchen.com/sites/default/files/styles/featured_1500/public/recipe_images/grilled-chicken-Greek-salad.jpg"
      }
    ], 
    Drinks: [
	{
        id: 106,
        name: "Canned Soda",
        description: "Coca Cola, Pepsi, Sprite, Sunkist, Canada Dry, Inca Kola, Pepsi Zero",
        price: 1.00,
        image: "https://128786352.cdn6.editmysite.com/uploads/1/2/8/7/128786352/MO4JIAQJPD5WPHFIIKRQL5H2.jpeg"
      },{
        id: 107,
        name: "Energy Drinks",
        description: "Monster & Redbull",
        price: 2.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgyJR7neckezBI0k22WVg48xTBXfPj65saA&s"
      },{
        id: 108,
        name: "Cranberry",
        description: "Bottled",
        price: 2.49,
        image: "https://m.media-amazon.com/images/I/71PpMhJmtCL._AC_UF350,350_QL80_.jpg"
      },{
        id: 109,
        name: "Orange Juice",
        description: "Bottled",
        price: 1.49,
        image: "https://target.scene7.com/is/image/Target/GUEST_ecffb70d-fdb4-4b4d-9c7e-e4d1cb7e0196"
      },{
        id: 110,
        name: "Apple Juice",
        description: "Bottled",
        price: 1.49,
        image: "https://target.scene7.com/is/image/Target/GUEST_7cb1a77f-80cb-4ba3-8bbd-d82ea970e34d"
      },{
        id: 111,
        name: "Coffee",
        description: "",
        price: 1.49,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9TfIFqT5Np6d9CSiJB0QdXnOGE2NPaOXGQ&s"
      },{
        id: 112,
        name: "Water",
        description: "Bottled",
        price: 1.00,
        image: "https://www.coca-cola.com/content/dam/onexp/us/en/brands/dasani/desktop/dasani-water-quality-report-highlight.png"
      },{
        id: 113,
        name: "Snapple",
        description: "Bottled",
        price: 2.00,
        image: "https://images.albertsons-media.com/is/image/ABS/108100081-C1N1?$ng-ecom-pdp-desktop$&defaultImage=Not_Available"
      },{
        id: 114,
        name: "Gatorade",
        description: "",
        price: 2.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjtKXpVgD2JGeO-cN17b8vh-zE-0CFBxnyQ&s"
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
