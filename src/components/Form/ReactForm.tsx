import { Formik } from 'formik'
import { useDispatch } from "react-redux";
import formSchema from '../../Helpers/validation'
import {
  createNewdataform, updatedataform,} from "../../Redux/DataForm/actions";
import { ThunkDispatch } from "redux-thunk";
import CustomForm from './CustomForm'
import { useSelector } from "react-redux";
import { AppState } from '../../Redux/store';
import { ActionsType } from '../../@types/types';
import { FormSchema } from "../../@types/validation";

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
   const dispatch = useDispatch<ThunkDispatch<AppState,any ,ActionsType>>();
    const {FormReduser: { isUpdate,dataform }, } = useSelector((state:AppState):AppState => state);
    return (
        <div>
           <Formik
           enableReinitialize={true}
           initialValues={isUpdate ? dataform : initialValue}
            onSubmit={(values, { resetForm }) => {
                isUpdate
          ? dispatch(updatedataform(values as FormSchema))
          :  dispatch(createNewdataform(values as FormSchema));

             resetForm();
     
          }}
           validationSchema={formSchema}
           children={CustomForm}
           
           /> 
        </div>
    )
}
