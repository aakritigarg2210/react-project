
import './App.css';
import ProductDetails from './components/productDetails';

function App() {
  const array = [{
    title:"iPhone",
    subTitle:"Phone Details",
    description:"Good Phone",
    price:99000,
    buttonText:"Buy"
  },{
    title:"Samsung",
    subTitle:"Phone Details",
    description:"Good Phone",
    price:729000,
    buttonText:"Buy"
  },{
    title:"Nokia",
    subTitle:"Phone Details",
    description:"Good Phone",
    price:12000,
    buttonText:"Buy"
  },{
    title:"onePlus",
    subTitle:"Phone Details",
    description:"Good Phone",
    price:50000,
    buttonText:"Buy"
  }]

  return (
    <div className="body">
      <h1>Headless Configuration Project</h1>
      <div className="wrapper">
        {array.map((item) => (
            <ProductDetails
              title= {item.title}
              subTitle= {item.subTitle}
              description= {item.description}
              price= {item.price}
              buttonText= {item.buttonText}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
