import InputFields from "../../../Common/Form/InputFields.jsx";
import PropTypes from "prop-types";
import FormHandlingButton from "../../../Common/Form/FormHandlingButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
    resetProductBasicDetails,
    storeProductBasicDetails
} from "../../../../utilities/slice/productBasicDetailsSlice.js";
import { useEffect, useState } from "react";
import reset from '../../../../assets/reset.png'

const ProductBasicDetailsForm = ({
  setProductBasicDetails,
  handleNextFormRendering,
  productBasicDetails,
}) => {
  const dispatch = useDispatch();

  const [existingProductDetails,setExistingProductDetails]=useState({})


  const alreadyAddedProductDetails = useSelector(
    (state) => state.productDetails.product.productBasicDetails,
  );

  useEffect(() => {
      setExistingProductDetails(alreadyAddedProductDetails)
  },[alreadyAddedProductDetails])



  const handleInputField = () => {
    const { name, value } = event.target;
    setProductBasicDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
      event.preventDefault();
      if (productBasicDetails.product_name !== '') {
          dispatch(storeProductBasicDetails(productBasicDetails));
          handleNextFormRendering();
          return
      }
      dispatch(storeProductBasicDetails(existingProductDetails));
      handleNextFormRendering();
  };
  const resetBasicDetailsForm = () => {
      dispatch(resetProductBasicDetails());
  }

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <button type='button' onClick={resetBasicDetailsForm}>
           <img src={reset}/> </button>
      <div className="mb-8 font-bold font-large">
        <h1>Product Basic Details</h1>
      </div>
      <InputFields
        type="text"
        name="product_name"
        labelName="Product Name"
        value={existingProductDetails.product_name}
        handleInputField={handleInputField}
      />
      <InputFields
        type="number"
        name="product_quantity"
        labelName="Product Quantity"
        value={existingProductDetails.product_quantity}
        handleInputField={handleInputField}
      />
      <InputFields
        type="number"
        name="product_price"
        labelName="Product Price"
        value={existingProductDetails.product_price}
        handleInputField={handleInputField}
      />

      <FormHandlingButton buttonName="Fill warranty Details" />
    </form>
  );
};

ProductBasicDetailsForm.propTypes = {
  setProductBasicDetails: PropTypes.func.isRequired,
  handleNextFormRendering: PropTypes.func.isRequired,
  productBasicDetails: PropTypes.object.isRequired,
};

export default ProductBasicDetailsForm;
