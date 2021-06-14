import React from 'react';
import { toast } from 'react-toastify';

export const showToast = (type, msg) => {
  switch (type) {
    case 'SUCCESS':
      toast.success(msg, {
        position: toast.POSITION.TOP_LEFT,
      });
      break;
    case 'ERROR':
      toast.error(msg, {
        position: toast.POSITION.TOP_LEFT,
      });
      break;
    default:
      return false;
  }
};

export const errorHelper = (formik, value) => ({
  error: formik.errors[value] && formik.touched[value] ? true : false,
  helperText:
    formik.errors[value] && formik.touched[value] ? formik.errors[value] : null,
});
