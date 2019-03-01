import React from 'react';

const Selected = (props) => {
    if(props.selectedProduct){
        return (
                <p>{props.selectedProduct.name}</p>
            );
    }
    
    return (
        <p></p>
    )
}

const ProductsList = (props) => {
    const {items} = props.products
    const {selectedProduct} = props.products;
    console.log(selectedProduct);
    return (
        <div>
            <Selected selectedProduct={selectedProduct} />
            {items.map(product => {
                return(
                    <div>
                        <p>{product.name}</p>
                        <button onClick={() => props.viewProduct(product.id)}>View</button>
                    </div>
                )
            })}
        </div>
    );
}

export default ProductsList
