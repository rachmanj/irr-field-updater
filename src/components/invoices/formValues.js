import * as Yup from 'yup';

export const formValues = {
  inv_id: '',
  receive_date: '',
  mailroom_bpn_date: '',
};

export const getValuesToEdit = invoice => {
  return {
    inv_id: invoice.inv_id,
    receive_date: invoice.receive_date,
    mailroom_bpn_date: invoice.mailroom_bpn_date,
  };
};

export const validation = () =>
  Yup.object({
    inv_id: Yup.string().required('Required'),
    receive_date: Yup.date().required('Rrequired'),
    mailroom_bpn_date: Yup.date().required('Required'),
  });
