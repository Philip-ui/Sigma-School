import './App.css'
import friedChic from './assets/fried-chicken.jpg'
import nuggets from './assets/nuggets.jpg'
import IceCream from './assets/ice-cream.jpg'
import ApplePie from './assets/apple-pie.jpg'
import BurgerMenu from './assets/burger-menu.jpg'


function MenuItem({ name, price, nutritionInfo }) {
  return (
    <>
      <p>
        <strong>{name}</strong> | {price}
        <NutritionalInfo nutritionInfo={nutritionInfo} />
      </p>

    </>
  );
}

function NutritionalInfo({nutritionInfo}) {
   const { calories, protein, carbs, fat } = nutritionInfo
  return (
    <div>
      <p>Calories: {calories} kcal</p>
      <p>Protein: {protein} g</p>
      <p>Carbs: {carbs} g</p>
      <p>Fat: {fat} g</p>
    </div>
  );
}

function Category({title, foods}) {
  return (
    <div>
      <h2>{title}</h2>
      {foods}    
    </div>
  );
}

const desserts = (
  <>
  <div className="meals">
    <div className="chicken">
      <img src={IceCream}  alt="Ice Cream" />
      <p className='chic_text'><MenuItem name={"Ice Cream"} price={"RM 5.00"} nutritionInfo={{ calories: 207, protein: 2, carbs: 33, fat: 6 }} /></p>
    </div>
    <div className="chicken">
      <img src={ApplePie}  alt="Ice Cream" />
      <p className='chic_text'><MenuItem name={"Apple Pie"} price={"RM 2.00"} nutritionInfo={{ calories: 270, protein: 1, carbs: 43, fat: 10 }} /></p>
    </div>
  </div>
  </>
);

const friedChicken = (  
    <>
    <div className="meals">
      <div className="chicken">
        <img src={friedChic}  alt="Fried Chicken" />
        <p className='chic_text'><MenuItem name={"2pc Fried Chicken Set"} price={"RM 10.00"} nutritionInfo={{ calories: 540, protein: 31, carbs: 35, fat: 29 }} /></p>
      </div>
      <div className="chicken">
          <img src={nuggets}  alt="nuggets" /> 
          <p className='chic_text'><MenuItem name={"6 piece nugget"} price={"RM 6.00"} nutritionInfo={{ calories: 270, protein: 13, carbs: 16, fat: 16 }} /></p>
      </div>
    </div>
    </>
  );


function App() {
  return(
    <>
    <div className="container">
      <h1>Uncle Haris Fried Chicken</h1>
      <br /><br />
      <img src={BurgerMenu} alt="Burger Menu" />
      <br /><br />
      <Category title={"Fried Chicken"} foods={friedChicken} />
      <Category title={"Desserts"} foods={desserts} />
       
    </div>     
    </>
  );
}

export default App;