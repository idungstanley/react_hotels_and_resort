import { Actiontype } from '../constants/action-type'

export const searchAction = (data) => {
  return {
    type: Actiontype.SEARCH,
    payload: data,
  }
}
