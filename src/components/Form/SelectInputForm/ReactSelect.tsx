import React from 'react';
import { Field } from "formik";



export default function ReactSelect(props) {
    return (
      <Field>
            {({field: { value }, form:{setFieldValue, errors, touched, setFieldTouched
            }})=>
            <>
                {props.as({value, setFieldValue, setFieldTouched, props,touched,errors })}
            </>
            }
            </Field>
    );
}
