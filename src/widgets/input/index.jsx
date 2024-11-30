import { useState } from "react";

export const Input = ({className, onChange}) => {
  const [value, setValue] = useState("")
  return (
    <div>
      <input className={`${className}`} onChange={(e)=>{setValue(e.target.value);
      onChange(e.target.value)}} value={value} />
    </div>
  );
};
