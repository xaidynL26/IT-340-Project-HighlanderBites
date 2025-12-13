
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
        image: "https://chatgpt.com/backend-api/estuary/content?id=file_00000000f58c71fdab06c2fa1221ce46&ts=490439&p=fs&cid=1&sig=21d8cf34c26ffd9a47bd8adb9bdd7dfb4fd52f3882a3b1f7248d25c5ee5e65ed&v=0"
      },
      {
        id: 3,
        name: "Taylor Ham Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://chatgpt.com/backend-api/estuary/content?id=file_00000000cf4471fd9b37cb9002f8b8b0&ts=490440&p=fs&cid=1&sig=350afbd7023d7f740727ad430a74ee4b1b24c292b6380ce38ed878d0972b14ff&v=0"
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
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSl1YuIl_r-en4qw2IRTIUVyFMDY8IOOP6R-dkX_aEJeCMfXAG1bDpqJxN8EcD5RfeKKqMRymeSPC_EPAK9cqCDiTSfdyKcqsaNztm6Gn-QiPXKBfVgHg66E_mWtRRXNjFV-KkpZamBryV4SgHOeqG2WixfFtWQkdN9-a7JTmFf0EnXBUQ=s1024-rj"
      },
      {
        id: 17,
        name: "Italian Sandwich",
        description: "Taylor Ham, Sausage with Egg Cheese (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSm5xexce8ZCtqn_h04YZV_Lvn18vWPMxVgtEC8PPZUcMEnlbCQIshBij07dXfjhoFEFdfW0IlsYjD83JFKTHRVeVCGBV59O8_ir9llp_PoJwP9D6zz4nTlgzg_TLJ8FuK5iurM1YTdV14jxjQLsNId7CDBsrxWBTQ-hhb4pVNvPsL7_EA=s1024-rj"
      }
    ],

    lunch: [
      {
        id: 18,
        name: "Lamb over rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 7.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSm0cVV9reUh9mYFbBO3mvcwTwIN0hx978_2eqnXI1-n76CEEhxVDAYfXyFkWQet9MxBoCqYOib2Xjqff7NJPoJdiAQkQjLoEtNECVGmR4XJndyAI9TYF2fbUj_r_opiecn43o7RepFeALvb8jDz4JHf8NTIImPdlfh-cTt-ud63B_uNoQ=s1024-rj"
      },
{
        id: 19,
        name: "Lamb over rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 9.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSm0cVV9reUh9mYFbBO3mvcwTwIN0hx978_2eqnXI1-n76CEEhxVDAYfXyFkWQet9MxBoCqYOib2Xjqff7NJPoJdiAQkQjLoEtNECVGmR4XJndyAI9TYF2fbUj_r_opiecn43o7RepFeALvb8jDz4JHf8NTIImPdlfh-cTt-ud63B_uNoQ=s1024-rj"
      },

      {
        id: 20,
        name: "Chicken Over Rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 7.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSlkNGLZUR1ZoGagV0jU2JWRiC_BDlVLBQ14Ye0EShpQmRJ5kmL63eiwlTfbWa1rTKWJ88F-x5xfO31l3Rq0eJXxut2FROwnGWT97mZ4c0wvJ9oMt_f_LlFz6Yl37sOtl2FG5QJjCVysxOhO4rTmENkZFNnjN9Zx8eeFvei7EovB0mSwhg=s1024-rj"
      },
{
        id: 21,
        name: "Chicken Over Rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 9.00,
        image:"https://lh3.googleusercontent.com/gg-dl/ABS2GSlkNGLZUR1ZoGagV0jU2JWRiC_BDlVLBQ14Ye0EShpQmRJ5kmL63eiwlTfbWa1rTKWJ88F-x5xfO31l3Rq0eJXxut2FROwnGWT97mZ4c0wvJ9oMt_f_LlFz6Yl37sOtl2FG5QJjCVysxOhO4rTmENkZFNnjN9Zx8eeFvei7EovB0mSwhg=s1024-rj"
      },
	{
        id: 22,
        name: "Chicken and Lamb Over Rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 9.00,
        image:"https://lh3.googleusercontent.com/gg-dl/ABS2GSmFjavj2AZoa8MLzztcOUFydjplbnP27x9rr8XuJviI7JeULA3OXYbDPQetggOiWYsJDAyo-S_gBVibrCEdUISn9rsQ683UDmAw1OImbtqWLGM5vapiCgrYdKrGDTGnTitkvGxW70GybCAY9TK9z6mdh3fZwRhEKLCokk5q0BaYNFmJaw=s1024-rj"
      },{
        id: 23,
        name: "Chicken and Lamb Over Rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 10.00,
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSmFjavj2AZoa8MLzztcOUFydjplbnP27x9rr8XuJviI7JeULA3OXYbDPQetggOiWYsJDAyo-S_gBVibrCEdUISn9rsQ683UDmAw1OImbtqWLGM5vapiCgrYdKrGDTGnTitkvGxW70GybCAY9TK9z6mdh3fZwRhEKLCokk5q0BaYNFmJaw=s1024-rj"
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
        image: "https://lh3.googleusercontent.com/gg-dl/ABS2GSnsBZs0y1RfsqrU8eGeDT5cJRdiToqHeHgF92NUEXhSiSyYDml4Y-a83wX2h4Itk7rZJvMtvPfbzb8yek0uUn1muEBspzJCNRAyM8GI-A8S_3ADHFlSTE1yW3LjpQ9tMLhev5FMp6lziK6dP6sbGNfvMAbv4CkCdsoj0u8S0eih1Ww=s1024-rj"
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
