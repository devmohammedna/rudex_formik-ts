import { Dispatch } from "redux";
import { ActionsType } from "../../@types/types";
import { FormTypes  } from "../../Redux/DataForm/constants"
import  { FormConstants }  from '../../Redux/Form/constants'



export const fetchAlldataform = (payload:any):((dispatch:Dispatch<ActionsType>)=>Promise<void>) => async (dispatch:Dispatch<ActionsType>) => {
 
    dispatch({ type: FormTypes.START_LOADING });

   
    dispatch({ type: FormTypes.FETCH_ALL_DATA_FORMS, payload: payload });
 
  dispatch({ type: FormTypes.END_LOADING });
};

export const createNewdataform=(payload:any)=>{
    return ({
        type:FormTypes.CREATE_NEW_DATA_FORM,
        payload
    })
}

// export const deleteWorkExperiance = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOADING });
//     await await api.deleteOne(id);

//     dispatch({ type: DELETE_WORK_EXPERIANCE, payload: id });
//   } catch (error) {
//     dispatch({ type: ERROR, payload: error.message });
//   }
//   dispatch({ type: END_LOADING });
// };
export const updatedataform  = (payload:any):((dispatch:Dispatch<ActionsType>)=>Promise<void>) => async (dispatch:Dispatch<ActionsType>) => {
   try {
    dispatch({ type: FormTypes.START_LOADING });
    // checkCurrentlyWork(body);
    
    dispatch({ type: FormTypes.UPDATE_DATA_FORM, payload: payload });
  } catch (error:any) {
    dispatch({ type: FormTypes.ERROR, payload: error.message });
  }
  dispatch({ type: FormTypes.END_LOADING });
  dispatch({ type: FormConstants.FINISH_UPDATE });
 

};