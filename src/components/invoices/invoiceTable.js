import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Button,
} from '@material-ui/core';
import Moment from 'react-moment';

const InvoicesTable = ({ invoices, gotoEdit }) => {
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>ID Invoce</TableCell>
              <TableCell>Days</TableCell>
              <TableCell>Receive Date</TableCell>
              <TableCell>Processed Date</TableCell>
              <TableCell>action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices
              ? invoices.map((item, i) => (
                  <TableRow key={item.i}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{item.inv_id}</TableCell>
                    <TableCell>{item.days}</TableCell>
                    <TableCell>
                      <Moment format="DD-MMM-YYYY">{item.receive_date}</Moment>
                    </TableCell>
                    <TableCell>
                      <Moment format="DD-MMM-YYYY">
                        {item.mailroom_bpn_date}
                      </Moment>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => gotoEdit(item.inv_id)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              : 'Data Not Found'}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default InvoicesTable;
