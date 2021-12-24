import { Dispatch } from 'redux'
import  { FormConstants }  from './constants'
import {
  ActionsType,
  AddItemAction,
} from "../../@types/types";
import {FormSchema} from "../../@types/validation"

export const initialForm=(data:FormSchema) => (dispatch:Dispatch<ActionsType>)=>{
    return (
    dispatch(  {
        type:FormConstants.INITIAL_FORM,
        payload:data
    }))
}
