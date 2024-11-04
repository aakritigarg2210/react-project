import "./productDetails.css"

const ProductDetails = (props) => {
    const {title , subTitle ,description , price , buttonText} = props;
    return (
        <div className="productDetails">
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <input type="button" value={buttonText}></input>
        </div>
    )
}

export default ProductDetails;