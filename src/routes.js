import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from 'components/navigation/header';
import InvoicesList from 'components/invoices';
import EditInvoice from 'components/invoices/edit';

const Routes = props => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/invoices/edit_invoice/:id" component={EditInvoice} />
        <Route path="/" component={InvoicesList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;