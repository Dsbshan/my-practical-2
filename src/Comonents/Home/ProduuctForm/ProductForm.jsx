import InputFields from "../../Common/Form/InputFields.jsx";

const ProductForm = () => {
  return (
    <div className="mt-10">
      <form className="max-w-sm mx-auto">
        <div className="mb-8 font-bold font-large">
          <h1>Product Basic Details</h1>
        </div>
          <InputFields type="text" name="product_name" labelName="Product Name" />
          <InputFields type="number" name="product_quantity" labelName="Product Quantity" />
          <InputFields type="number" name="product_price" labelName="Product Price" />

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create New Product
        </button>
      </form>
    </div>
  );
};
export default ProductForm;
