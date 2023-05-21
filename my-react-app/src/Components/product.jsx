import "../style/product.css";

function product( {data} ) {
    return (
        <div className="container">
          {data.map((item, index) => {
            return (
              <div className="product-root" key={index}>
                <div className="product">
                  <img class = "img-product" src="/cars/goodPic.jpg" alt="car" />
                </div>
                <h3>{data[index].name}</h3>
              </div>
            );
          })}
        </div>
      );   
}

export default product;
