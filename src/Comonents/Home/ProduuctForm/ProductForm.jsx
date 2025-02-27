import ProductBasicDetailsForm from "./ProductBasicDetailsForm/ProductBasicDetailsForm.jsx";
import ProductWarrantyDetailsForm from "./ProductWarrantyDetailsForm/ProductWarantyDetailsForm.jsx";
import {useState} from "react";

const ProductForm = () => {
     const [currentForm, setCurrentForm] = useState(1);
   const handleNextFormRendering=()=>{
       setCurrentForm((prevState)=>prevState+1)
  }
  const handleBackFormRendering=()=>{
    setCurrentForm((prevState)=>prevState-1)
  }

     const productFormMapper={
       1:<ProductBasicDetailsForm  handleNextFormRendering ={handleNextFormRendering}/>,
       2:<ProductWarrantyDetailsForm  handleBackFormRendering={handleBackFormRendering}/>
     }


     const renderProductForm =() => {
       return productFormMapper[currentForm];
     }
  return (
      <div className="mt-10">


        {renderProductForm()}


      </div>
  );
};
export default ProductForm;
