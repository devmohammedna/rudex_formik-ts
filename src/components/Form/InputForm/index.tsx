import { Field, FormikErrors, FormikTouched, FormikValues  } from 'formik'
import React from 'react'
interface Props {
  type?:string,
  name:string,
  placeholder?:string,
  label?:string,
  checkBoxLabel?:string,
  component?:string,
  touched:FormikTouched<FormikValues>,
  errors:FormikErrors<FormikValues>,
  disabled?:boolean,
  required?:boolean,
}
export default function IuputForm({  type, name,label,required,checkBoxLabel, placeholder, errors, touched, component='input'}:Props) {
    return (
        <div>
            <Field   
            
             type={type}
             name={name}
             placeholder={placeholder}
             autoComplete={'off'}
             component={component}
             required={required}
             />
              {/* {label && (
             <label className="label" htmlFor={name}>
              {label}
             </label>
             )} */}
              {checkBoxLabel && <label htmlFor={name}>{checkBoxLabel}</label>}
             {errors[name] && touched[name] &&
             <span className="error">{errors[name]}</span>
             }
        </div>
    )
}
