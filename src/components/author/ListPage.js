import React, { Component } from 'react';
import { Button, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import AuthorForm from './ModalForm';
import AuthorList from './List';

import { connect } from 'react-redux';

export class AuthorListPage extends Component {
  state = { openModal: false, modalData: null };

  toggleModal = data => {
    const modalData = data ? data : { name: '', image: '' };
    console.log('this.state.modalData', this.state.modalData);
    this.setState({ openModal: !this.state.openModal, modalData });
  };

  render() {
    return (
      <main>
        <Grid container>
          {/*<Grid item xs={0} sm={3} md={4}>{' '}</Grid> */}
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <AuthorList authors={this.props.authors} toggleModal={this.toggleModal} />
            <Button style={fabStyle} onClick={this.toggleModal} variant="fab" color="primary" aria-label="Add">
              <AddIcon />
            </Button>
          </Grid>
          {/*<Grid item xs={0} sm={3} md={4}>{' '}</Grid> */}
        </Grid>
        <AuthorForm openModal={this.state.openModal} toggleModal={this.toggleModal} data={this.state.modalData} />
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
