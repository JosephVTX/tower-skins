export default function InputLabel({ required = false, value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-sm py-2 ` + className}>
            {value ? value : children}
            {required && <span className="ml-2 text-red-500">*</span>}
        </label>
    );
}
