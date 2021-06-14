import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@material-ui/core';

import InvoicesTable from './invoiceTable';
import { getOldInvoicesActions } from 'store/actions/invoice.actions';

const InvoicesList = props => {
  const invoices = useSelector(state => state.invoices);
  const dispatch = useDispatch();

  const gotoEdit = id => {
    props.history.push(`/invoices/edit_invoice/${id}`);
  };

  useEffect(() => {
    dispatch(getOldInvoicesActions());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Typography variant="h4">Invoices List</Typography>
        <InvoicesTable
          invoices={invoices.oldInvoices}
          gotoEdit={id => gotoEdit(id)}
        />
      </Container>
    </>
  );
};

export default InvoicesList;
