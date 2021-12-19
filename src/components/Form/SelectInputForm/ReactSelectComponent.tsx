import React from "react";
import Select from "react-select";

function ReactSelectComponent({
  setFieldTouched,
  value,
  setFieldValue,
  touched,
  errors,
  props: { name, defaultValue, placeholder,Options },
}) {
  return (
    <>
    <Select
      onBlur={() => setFieldTouched([name], true)}
      className="basic-single"
      classNamePrefix="select"
      defaultValue={defaultValue || ""}
      placeholder={placeholder}
      isSearchable={true}
      name={name}
      options={Options}
      setValue={value[name]}
      onChange={(value) => setFieldValue(name, value.value)}
    />
     {errors[name] && touched[name] && (
        <div className="inputError">{errors[name]}</div>
      )}
    </>
  );
}

export default ReactSelectComponent;
