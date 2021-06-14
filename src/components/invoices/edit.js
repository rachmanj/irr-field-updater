import React, { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import { errorHelper } from 'utils/tools';
import Loader from 'utils/loader';
import { validation, formValues, getValuesToEdit } from './formValues';

import { useDispatch, useSelector } from 'react-redux';
import { invoiceEdit, invoiceById } from 'store/actions/invoice.actions';
import { clearCurrentInvoice } from 'store/actions/index';

import {
  Container,
  TextField,
  Button,
  Divider,
  Typography,
} from '@material-ui/core';

const EditInvoice = props => {
  const [values, setValues] = useState(formValues);
  const [loading, setLoading] = useState(false);
  const invoices = useSelector(state => state.invoices);
  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: values,
    validationSchema: validation,
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  const handleSubmit = values => {
    setLoading(true);
    dispatch(invoiceEdit(values, props.match.params.id));
  };

  useEffect(() => {
    if (notifications) {
      setLoading(false);
    }
  }, [notifications]);

  useEffect(() => {
    const param = props.match.params.id;
    if (param) {
      dispatch(invoiceById(param));
    }
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (invoices && invoices.byId) {
      setValues(getValuesToEdit(invoices.byId));
    }
  }, [invoices]);

  useEffect(() => {
    return () => {
      dispatch(clearCurrentInvoice());
    };
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4">Edit Invoice</Typography>
      {loading ? (
        <Loader />
      ) : (
        <>
          <form
            className="mt-3"
            onSubmit={formik.handleSubmit}
            style={{ marginTop: '10px' }}
          >
            <div className="form-group">
              <TextField
                style={{ width: '50%', marginBottom: '20px' }}
                name="inv_id"
                label="Invoice ID"
                variant="outlined"
                {...formik.getFieldProps('inv_id')}
                {...errorHelper(formik, 'inv_id')}
              />
            </div>

            <div className="form-group">
              <TextField
                style={{ width: '50%', marginBottom: '20px' }}
                name="receive_date"
                label="Enter receive_date"
                variant="outlined"
                type="date"
                {...formik.getFieldProps('receive_date')}
                {...errorHelper(formik, 'receive_date')}
              />
            </div>

            <div className="form-group">
              <TextField
                style={{ width: '50%', marginBottom: '20px' }}
                name="mailroom_bpn_date"
                label="Enter mailroom_bpn_date"
                variant="outlined"
                type="date"
                {...formik.getFieldProps('mailroom_bpn_date')}
                {...errorHelper(formik, 'mailroom_bpn_date')}
              />
            </div>

            <Divider className="mt-3 mb-3" />

            <Button variant="contained" color="primary" type="submit">
              Save Invoice
            </Button>
          </form>
        </>
      )}
    </Container>
  );
};

export default EditInvoice;
