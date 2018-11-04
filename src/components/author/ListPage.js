import React, { Component } from 'react';
import { Button, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import AuthorForm from './ModalForm';
import AuthorList from './List';

import { connect } from 'react-redux';

export class AuthorListPage extends Component {

  openModal = data => {
    // Так как у нас есть доступ к методам компонента формы, мы
    // можем вызывать их и передавать в них какие-то данные.
    // А дальше компонент уже разберётся, что с ними делать :)
    this.authorForm.open(data);
  };

  authorFormRef = (el) => {
    this.authorForm = el;
  };

  render() {
    return (
      <main>
        <Grid container>
          {/*<Grid item xs={0} sm={3} md={4}>{' '}</Grid> */}
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <AuthorList authors={this.props.authors} openModal={this.openModal} />
            <Button style={fabStyle} onClick={this.openModal} variant="fab" color="primary" aria-label="Add">
              <AddIcon />
            </Button>
          </Grid>
          {/*<Grid item xs={0} sm={3} md={4}>{' '}</Grid> */}
        </Grid>
        <AuthorForm ref={this.authorFormRef} />
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.author.authors
  };
};

export default connect(mapStateToProps)(AuthorListPage);

const fabStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};
