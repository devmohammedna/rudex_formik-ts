import  { FormConstants }  from '../Redux/Form/constants'
import { FormTypes } from "../Redux/DataForm/constants";
import {FormSchema} from "./validation"

export interface IFetchAllWorkExperiances {
  type: FormTypes.FETCH_ALL_DATA_FORMS;
  payload: FormSchema[];
}

export interface IStartLoading {
  type: FormTypes.START_LOADING;

}
export interface ICreateNewWorkExperiance {
  type: FormTypes.CREATE_NEW_DATA_FORM;
  payload: FormSchema;
}
export interface IEndLoading {
  type: FormTypes.END_LOADING;

}
export interface IUpdateWorkExperiance {
  type: FormTypes.UPDATE_DATA_FORM;
  payload: FormSchema;
}
export interface IError {
  type: FormTypes.ERROR;
  payload: any;
}
export interface IStateItemReducer {
  isLoading: boolean;
//   item: ListItem;
  error: string;
}
export interface IFinishUpdate {
  type: FormConstants.FINISH_UPDATE;
  // payload: any;
}
export interface AddItemAction {
  type: FormConstants.INITIAL_FORM;
  payload: FormSchema;
}


export type ActionsType = | AddItemAction | IFetchAllWorkExperiances |ICreateNewWorkExperiance | IUpdateWorkExperiance| IStartLoading|IFinishUpdate | IEndLoading | IError;

