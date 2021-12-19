import{ object, string, SchemaOf,boolean,date,ref,number }from "yup";
import { FormSchema } from "../@types/validation";

 const  formSchema=() : SchemaOf<FormSchema>=> {
    return object().shape({
    jopTitle: string().oneOf(['ReactJs'],'Pleace Select ReactJs').required("This Field Is Required"),

    jopField: string().oneOf(['TypeScript'],'Pleace Select TypeScript').required("This Field Is Requird"),

    jopLocation: string().oneOf(['Front_End_developer'],'Pleace Select Front_End_developer').required("This Field Is Requird"),

    startDate: date().required('This Field Is Requird'),

    endDate: date().when('currentlyWork',{
      is:true,
      then:date(),
      otherwise: date().min(ref('startDate')).required('This Field Is Requird')
    }),

    currentlyWork: boolean(),

    description: string().required("This Field Is Requird"),

    companyName: 
      string().required("This Field Is Required"),

    companyAdress: string().required("This Field Is Required"),

    companyIndustry: string().required("This Field Is Required"),

    companySize: 
      number()
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),

    companySector: string().required("This Field Is Required"),

    supervisorName: string().required("This Field Is Required"),

    supervisedEmployees: 
      number()
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),

    leavingReazon: string().required("This Field Is Required"),

    startSalary: 
      number()
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),

    endSalary: 
      number()
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),
    
    currency: string().required("This Field Is Required"),
  });
}

export default formSchema;