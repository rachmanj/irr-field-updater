import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const Header = props => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Invoices
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
