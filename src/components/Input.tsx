type BaseProp = {
  title: string;
  htmlFor: string;
  id: string;
  required?: boolean;
  name: string;
  placeholder?: string;
};

type NewInputProp = {
  type: React.HTMLInputTypeAttribute;
} & BaseProp;

export function Input(prop: NewInputProp) {
  const { type, id, required, htmlFor, name, placeholder, title } = prop;
  return (
    <>
      <label htmlFor={htmlFor}>{title}</label>
      <input
        className="form-field"
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
      />
    </>
  );
}
