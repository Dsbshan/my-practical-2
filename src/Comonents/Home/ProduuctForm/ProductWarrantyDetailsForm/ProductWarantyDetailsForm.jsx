import InputFields from "../../../Common/Form/InputFields.jsx";
import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
const ProductWarrantyDetailsForm = ({handleBackFormRendering}) => {
  return (
      <form className="max-w-sm mx-auto">
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
          <button
              type="button"
              onClick={handleBackFormRendering}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
              back to Basic Details
          </button>
      </form>
  );
};
ProductWarrantyDetailsForm.PropTypes={
    handleBackFormRendering:PropTypes.func.isRequired
}
export default ProductWarrantyDetailsForm;
