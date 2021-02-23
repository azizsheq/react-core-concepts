import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Anwar', 'Kamal', 'Robin', 'Chandu']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'PDF Reader', price: '$60.99'},
    {name: 'Editor', price: '$80.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <h1 className="" style={{color: "blue"}}>My Heading</h1>
        <Person name="Rubel" age="22"></Person>
        <Person name="Jamal" age="44"></Person>
        <Person name={names[0]} age="66"></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  // destructuring the object 
  const {name, price} = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      {/* <h2>{props.name} </h2>
      <h1>{props.price}</h1> */}
      {/* <h2>{props.product.name} </h2>
      <h1>{props.product.price}</h1>  */}
      <h2>{name} </h2>
      <h1>{price}</h1> 
      <button>Buy now</button>
    </div>
  );
}
function Person(props) {
  const nameStyle ={
    color: 'green',
  }
  console.log(props);
  return (
    <div style={{border:'2px solid red', margin:'10px'}}>
      <h2>Name: <span style={nameStyle}>{props.name}</span></h2>
      <p>Age is {props.age}</p>
    </div>
  ); 
}

export default App;