import InputFields from "../../../Common/Form/InputFields.jsx";
import PropTypes from "prop-types";
import FormHandlingButton from "../../../Common/Form/FormHandlingButton.jsx";
import {useDispatch} from "react-redux";
import {storeProductBasicDetails} from "../../../../utilities/slice/productBasicDetailsSlice.js";

const ProductBasicDetailsForm = ({
  setProductBasicDetails,
  handleNextFormRendering,
  productBasicDetails,
}) => {

    const dispatch = useDispatch();
  const handleInputField = () => {
    const { name, value } = event.target;
    setProductBasicDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
const handleSubmit = () => {
    event.preventDefault();

    dispatch(storeProductBasicDetails(productBasicDetails))

    handleNextFormRendering()
}

  return (
    <form className="max-w-sm mx-auto"   onSubmit={handleSubmit}>
      <div className="mb-8 font-bold font-large">
        <h1>Product Basic Details</h1>
      </div>
      <InputFields
        type="text"
        name="product_name"
        labelName="Product Name"
        handleInputField={handleInputField}
      />
      <InputFields
        type="number"
        name="product_quantity"
        labelName="Product Quantity"
        handleInputField={handleInputField}
      />
      <InputFields
        type="number"
        name="product_price"
        labelName="Product Price"
        handleInputField={handleInputField}
      />

      <FormHandlingButton

        buttonName="Fill warranty Details"
      />
    </form>
  );
};

ProductBasicDetailsForm.propTypes = {
  setProductBasicDetails: PropTypes.func.isRequired,
  handleNextFormRendering: PropTypes.func.isRequired,
  productBasicDetails: PropTypes.object.isRequired,
};

export default ProductBasicDetailsForm;
