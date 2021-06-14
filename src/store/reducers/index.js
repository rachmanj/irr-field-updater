import { combineReducers } from 'redux';
import invoices from './invoice.reducer';
import notifications from './notification.reducer';

const appReducers = combineReducers({
  invoices,
  notifications,
});

export default appReducers;
