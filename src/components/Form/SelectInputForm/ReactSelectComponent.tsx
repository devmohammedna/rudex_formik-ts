import React from "react";
import Select from "react-select";
import { FormikErrors, FormikTouched, FormikValues } from "formik";

interface Props {
  placeholder?:string,
  touched:FormikTouched<FormikValues>,
  errors:FormikErrors<FormikValues>,
  setFieldTouched :Function,
  value:FormikValues,
  setFieldValue:Function,
  props :{
    name:string,
    placeholder:string, 
    Options:{ label: string, value: string}[], 
    required :boolean,
    defaultValue:string
  }
}
function ReactSelectComponent({
  setFieldTouched,
  value,
  setFieldValue,
  touched,
  errors,
  props: { name, defaultValue, placeholder,Options },
}:Props) {
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
      setValue={value[name] ? { label: value[name], value: value[name] } : null}
      onChange={(value) => setFieldValue(name, value.value)}
      options={Options}
    />
     {errors[name] && touched[name] && (
        <div className="inputError">{errors[name]}</div>
      )}
    </>
  );
}

export default ReactSelectComponent;
