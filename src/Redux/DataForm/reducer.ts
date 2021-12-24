import { FormTypes } from "../../Redux/DataForm/constants";
import { FormSchema } from "../../@types/validation";
import { ActionsType } from "../../@types/types";
export interface IState {
  isLoading:boolean,
  error: string,
  dataform: FormSchema[]
}
export default function DataFormReduser( initialState:IState = { isLoading: false, error: "", dataform: [] }, action:ActionsType) {
  switch (action.type) {
    case FormTypes.START_LOADING:
      return {
           ...initialState,
        isLoading: true,
      };
    case FormTypes.END_LOADING:
      return { ...initialState, isLoading: false };
      case FormTypes.ERROR:
      return { ...initialState, error: action.payload };
       case FormTypes.FETCH_ALL_DATA_FORMS:
      return {
        ...initialState,
        dataform: [action.payload],
        error: "",
      };
      case FormTypes.CREATE_NEW_DATA_FORM:
      return {
        ...initialState,
        dataform: [action.payload, ...initialState.dataform],
        error: "",
      };

    // case DELETE_DATA_FORM:
    //   return {
    //     ...initialState,
    //     dataform: initialState.dataform.filter(
    //       (item) => item._id !== action.payload
    //     ),
    //   };
     
    default:
      return initialState;
  }
}