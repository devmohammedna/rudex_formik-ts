import { Formik } from 'formik'
import { useDispatch } from "react-redux";
import {FormSchema} from '../../utils/validation'
import {
  createNewdataform,
  updatedataform,
} from "../../redux/DataForm/actions";
import CustomForm from './CustomForm'
import { useSelector } from "react-redux";
// import initialValues from '../../Utils/initialValues';

const initialValue={  
  jopTitle: "",
  jopField: "",
  jopLocation: "",
  startDate: "",
  endDate: "",
  currentlyWork: false,
  description: "",
  companyName: "",
  companyAdress: "",
  companyIndustry: "",
  companySize: "",
  companySector: "",
  supervisorName: "",
  supervisedEmployees: "",
  leavingReazon: "",
  startSalary: "",
  endSalary: "",
  currency: "",
}
export default function ReactForm() {
   const dispatch = useDispatch();
    const {
    FormReduser: { isUpdate, dataform },
  } = useSelector((state) => state);
    return (
        <div>
           <Formik
           enableReinitialize={true}
           initialValues={initialValue}
            onSubmit={(values, { resetForm }) => {
        
            isUpdate
            ? dispatch(updatedataform(values))
            : dispatch(createNewdataform(values));

             resetForm();
     
          }}
           validationSchema={FormSchema}
           children={CustomForm}
           
           /> 
        </div>
    )
}
