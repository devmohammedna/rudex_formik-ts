import { Form } from 'formik'
import React from 'react'
import IuputForm from './InputForm'
import ReactSelect from "./SelectInputForm/ReactSelect";
import ReactSelectComponent from "./SelectInputForm/ReactSelectComponent";
import { useDispatch, useSelector } from "react-redux";
import { FINISH_UPDATE } from "../../redux/Form/constant";

export default function CustomForm({errors,touched, values }) {
      const { isUpdate } = useSelector((state) => state.FormReduser);
  const dispatch = useDispatch();
    return (
        <Form>
        <h4>Job Details</h4>
         <ReactSelect
          name='jopTitle'
          Options={jopOptions}
          placeholder="Job Title"
        
          as={ReactSelectComponent}
        />
        <ReactSelect
          name='jopField'
          Options={jopOptions}
          placeholder="Job Field"
          
          as={ReactSelectComponent}
        />
        <ReactSelect
          name='jopLocation'
          Options={jopOptions}
          placeholder="Job Location"
         
          as={ReactSelectComponent}
        />
    
     <div className={values?.currentlyWork ?'input-full-width': "box-date"}>
        <IuputForm 
          type="date"
          name="startDate"
          label="Start Date"
          touched={touched}
          errors={errors}
         />
         {!values.currentlyWork &&
          <IuputForm 
          type="date"
          name="endDate"
          label="End Date"
          touched={touched}
          errors={errors}
          />
         }
         </div>
         <div className="checkbox">
        <IuputForm
          type="checkbox"
          name="currentlyWork"
          checkBoxLabel="Currently Work There"
          touched={touched}
          errors={errors}
        />
      </div>
       <IuputForm
        component="textarea"
        name="description"
        placeholder="Job Description"
        touched={touched}
        errors={errors}
      />
       <h4>Company Details</h4>
       <IuputForm
        type="text"
        name="companyName"
        placeholder="Company Name"
        touched={touched}
        errors={errors}
        />
        <IuputForm
         type="text"
        name="companyAdress"
        placeholder="Company Adress"
        touched={touched}
        errors={errors}
        />
        <IuputForm
          type="text"
        name="companyIndustry"
        placeholder="Company Industry"
        touched={touched}
        errors={errors}
        />
           <IuputForm
         type="text"
        name="companySize"
        placeholder="Company Size"
        touched={touched}
        errors={errors}
        />
           <IuputForm
         name="companySector"
        placeholder="Company Sector"
        touched={touched}
        errors={errors}
        />
         <IuputForm
        type="text"
        name="supervisorName"
        placeholder="Supervisor Name"
        touched={touched}
        errors={errors}
      />
      <IuputForm
        type="text"
        name="supervisedEmployees"
        placeholder="# of Employees Supervised by You"
        touched={touched}
        errors={errors}
      />
      <IuputForm
        type="text"
        name="leavingReazon"
        placeholder="Reason Of Leaving"
        touched={touched}
        errors={errors}
      />
        <h4>Compensation</h4>
         <div className="box-salary">
        <IuputForm
          type="text"
          name="startSalary"
          placeholder="Start Salary"
          touched={touched}
          errors={errors}
        />
        <IuputForm
          type="text"
          name="endSalary"
          placeholder="End Salary"
          touched={touched}
          errors={errors}
        />
        <ReactSelect
          name='currency'
          placeholder="Currency"
          Options={currencyOptions}
          defaultValue={values.currency}
          as={ReactSelectComponent}
        />
      </div>
        <button className="submit" type="submit">
        submit
      </button>
      {isUpdate && (
        <button
          className="addNew"
          onClick={() => dispatch({ type: FINISH_UPDATE })}
        >
          Add New
        </button>
      )}
        </Form>
    )
}
const jopOptions = [
  {
    label: "ReactJs",
    value: "ReactJs",
  },
  {
    label: "NextJs",
    value: "NextJs",
  },
    {
    label: "Front_End_developer",
    value: "Front_End_developer",
  },
  {
    label: "TypeScript",
    value: "TypeScript",
  },
]
const currencyOptions = [
  {
    label: "$",
    value: "$",
  },
  {
    label: "€",
    value: "€",
  },
    {
    label: "₪",
    value: "₪",
  },
]