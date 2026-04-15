import './Input.css';

export default function Input({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  icon,
  error,
  textarea = false,
  rows = 5,
  required = false,
  className = '',
  ...props
}) {
  const Component = textarea ? 'textarea' : 'input';

  return (
    <div className={`input-group ${error ? 'input-group--error' : ''} ${className}`}>
      {label && (
        <label htmlFor={name} className="input-group__label">
          {label}
          {required && <span className="input-group__required">*</span>}
        </label>
      )}
      <div className="input-group__wrapper">
        {icon && <span className="input-group__icon">{icon}</span>}
        <Component
          id={name}
          name={name}
          type={textarea ? undefined : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input-group__field ${icon ? 'input-group__field--with-icon' : ''}`}
          rows={textarea ? rows : undefined}
          required={required}
          {...props}
        />
      </div>
      {error && <span className="input-group__error">{error}</span>}
    </div>
  );
}
