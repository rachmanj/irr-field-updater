import {
  GET_OLD_INVOICES,
  GET_INVOICE_BY_ID,
  CLEAR_CURRENT_INVOICE,
  ERROR_GLOBAL,
  SUCCESS_GLOBAL,
  CLEAR_NOTIFICATION,
} from '../types';

/// invoices
export const getOldInvoices = data => ({
  type: GET_OLD_INVOICES,
  payload: data,
});

export const getInvoiceById = invoice => ({
  type: GET_INVOICE_BY_ID,
  payload: invoice,
});

export const clearCurrentInvoice = () => ({
  type: CLEAR_CURRENT_INVOICE,
});

/// NOTIFICATIONS

export const errorGlobal = msg => ({
  type: ERROR_GLOBAL,
  payload: msg,
});

export const successGlobal = msg => ({
  type: SUCCESS_GLOBAL,
  payload: msg,
});

export const clearNotification = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_NOTIFICATION,
    });
  };
};
