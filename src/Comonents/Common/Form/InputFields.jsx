
import PropTypes from 'prop-types'

const InputFields=({type,name,labelName})=>{
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
                required
            />
        </div>

    )

}
InputFields.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired
}
export default InputFields;