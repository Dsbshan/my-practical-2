import InputFields from "../../../Common/Form/InputFields.jsx";
import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
const ProductWarrantyDetailsForm = ({handleBackFormRendering}) => {
  return (
      <form className="max-w-sm mx-auto">
          <button type='button' onClick={handleBackFormRendering}>Go Back</button>
          <div className="mb-8 font-bold font-large">
              <h1>Product Warranty Details</h1>
          </div>
          <InputFields
              type="text"
              name="warranty_period"
              labelName="Warranty Period"
          />
          <InputFields
              type="date"
              name="warranty_start_date"
              labelName="Warranty Start Date"
          />
          <InputFields
              type="date"
              name="warranty_end_date"
              labelName="Warranty End Date"
          />

      </form>
  );
};
ProductWarrantyDetailsForm.PropTypes={
    handleBackFormRendering:PropTypes.func.isRequired
}
export default ProductWarrantyDetailsForm;
