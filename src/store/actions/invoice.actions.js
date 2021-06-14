import * as actions from './index';
import axios from 'axios';

axios.defaults.headers.patch['Content-Type'] = 'application/json';

export const getOldInvoicesActions = () => {
  return async dispatch => {
    try {
      const invoices = await axios.get(`/api/invoices/oldinvoices`);
      dispatch(actions.getOldInvoices(invoices.data));
    } catch (error) {
      throw error;
    }
  };
};

export const invoiceById = id => {
  return async dispatch => {
    try {
      const invoice = await axios.get(`/api/invoices/${id}`);
      dispatch(actions.getInvoiceById(invoice.data));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};

export const invoiceEdit = (values, id) => {
  return async dispatch => {
    try {
      await axios.patch(`/api/invoices/${id}`, values);
      dispatch(actions.successGlobal('Update done !!'));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};
