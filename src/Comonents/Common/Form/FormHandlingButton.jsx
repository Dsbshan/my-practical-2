import PropTypes from "prop-types";


const FormHandlingButton =({executingMethod,buttonName})=>{
    return (
        <button
            type="button"
            onClick={executingMethod}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            {buttonName}
        </button>
    )
}
FormHandlingButton.propTypes = {
    executingMethod: PropTypes.func.isRequired,
    buttonName: PropTypes.string.isRequired
}
export default FormHandlingButton;