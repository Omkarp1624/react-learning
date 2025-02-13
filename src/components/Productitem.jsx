export default function Productitem(props) {
    return (
      <>
        <div className="product-item">
          <h1>{props.name}</h1>
          <h3>Price: ₹{props.price}</h3>   
        </div>
      </>
    );
  }
  
