import InputFields from "../../../Common/Form/InputFields.jsx";
import PropTypes from "prop-types";
import FormHandlingButton from "../../../Common/Form/FormHandlingButton.jsx";

const ProductBasicDetailsForm = ({ handleNextFormRendering }) => {
  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-8 font-bold font-large">
        <h1>Product Basic Details</h1>
      </div>
      <InputFields type="text" name="product_name" labelName="Product Name" />
      <InputFields
        type="number"
        name="product_quantity"
        labelName="Product Quantity"
      />
      <InputFields
        type="number"
        name="product_price"
        labelName="Product Price"
      />

       <FormHandlingButton executingMethod = {handleNextFormRendering} buttonName='Fill warranty Details' />
    </form>
  );
};

ProductBasicDetailsForm.propTypes = {
  handleNextFormRendering: PropTypes.func.isRequired,
};

export default ProductBasicDetailsForm;
