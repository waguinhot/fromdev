const Input = ({ type, name, id, label, place, change }) => {
  return (
    <div className="divInput">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={place}
        onChange={change}
        className=""
      />
    </div>
  );
};
export default Input;
