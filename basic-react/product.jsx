import "./product.css";
import Price  from "./Price.jsx";

function Product({title,price,features,idx}) {
    let oldPrices = ["12,495","11,900","1,599","599"];
    let newPrices = ["9,999","8,999","900","400"];
    let Description = [["8000 DPI","5 programmable buttons"],
        ["intuitive surface","designes for ipad pro"],
        ["designed for iPad pro","intuitive surface"],
        ["wirless","optical oreantation"]];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}



export default Product;
