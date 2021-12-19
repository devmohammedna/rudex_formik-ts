import { Field } from 'formik'
import React from 'react'

export default function IuputForm({  type, name,label,checkBoxLabel, placeholder, errors, touched, component='input'}) {
    return (
        <div>
            <Field   
            
             type={type}
             name={name}
             placeholder={placeholder}
             autoComplete={'off'}
             component={component}
            
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
