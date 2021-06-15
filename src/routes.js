import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainLayout from 'hoc/mainLayout';
import Header from 'components/navigation/header';
import InvoicesList from 'components/invoices';
import EditInvoice from 'components/invoices/edit';

const Routes = props => {
  return (
    <BrowserRouter basename="/field-updater">
      <Header />
      <MainLayout>
        <Switch>
          <Route path="/invoices/edit_invoice/:id" component={EditInvoice} />
          <Route path="/" component={InvoicesList} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Routes;
