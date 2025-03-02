
import PropTypes from 'prop-types'

const InputFields=({type,name,labelName,value,handleInputField})=>{
    return (
        <div className="mb-5">
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {labelName}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                className="input-field"
                defaultValue={value || ''}
                onChange={handleInputField}
                required
            />
        </div>

    )

}
InputFields.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequire,
    handleInputField: PropTypes.func.isRequired,

}
export default InputFields;