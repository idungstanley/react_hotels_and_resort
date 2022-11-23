import { Actiontype } from "../constants/action-type";

export const  selectAutosuggestion = (data)=>{
return {
 type: Actiontype.SELECT_AUTOSUGGESTION,
 payload: data
}
}