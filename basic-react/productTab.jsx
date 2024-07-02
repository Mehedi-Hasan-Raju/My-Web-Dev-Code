import Product from "./product.jsx";
import Price  from "./Price.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap:"wrap",
    justifyContent: "center",
    alignItems: "center",
  }
    return (
        <div style ={styles} > 
            
            <Product title="Logitec MX Master" idx={0}/>
            <Product title="Apple pencil (2nd Gen)" idx={1}/>
            <Product title="Zebronics Zeb-transformer" idx={2}/>
            <Product title="petronics Toad 23" idx={3}/>
        </div> 
        );
}

export default ProductTab;
