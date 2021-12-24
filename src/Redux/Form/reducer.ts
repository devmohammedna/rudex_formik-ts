import { FormConstants} from "./constants";
import {FormSchema} from "../../@types/validation"

export default function FormReduser(state: { isUpdate: boolean } = { isUpdate: false }, action:{ type: string, payload: FormSchema }) {
  switch (action.type) {
    case FormConstants.INITIAL_FORM:
      return {
        ...state,
        formdata: action.payload,
        isUpdate: true,
      };
    case FormConstants.FINISH_UPDATE:
      return {
        ...state,
        formdata: state,
        isUpdate: false,
      };
    default:
      return state;
  }
}