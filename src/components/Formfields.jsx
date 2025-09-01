
export const FormFields = ({ type, fieldName, placeholder, fieldId, label, onChange, inputClass, labelClass }) => {
    return (
        <>
            <label className={labelClass} htmlFor={fieldId}>{label}</label>
            <input
                text={type}
                id={fieldId}
                name={fieldName}
                onChange={onChange}
                placeholder={placeholder}
                className={inputClass}
            />
        </>
    )
}