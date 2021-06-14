import {
  GET_OLD_INVOICES,
  GET_INVOICE_BY_ID,
  CLEAR_CURRENT_INVOICE,
} from '../types';

export default function invoicesReducer(state = {}, action) {
  switch (action.type) {
    case GET_OLD_INVOICES:
      return { ...state, oldInvoices: action.payload };
    case GET_INVOICE_BY_ID:
      return { ...state, byId: action.payload };
    case CLEAR_CURRENT_INVOICE:
      return { ...state, byId: '' };
    default:
      return state;
  }
}
