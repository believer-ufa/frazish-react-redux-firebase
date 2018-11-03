import React from 'react';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography
} from '@material-ui/core';
import { connect } from 'react-redux';
import addAuthor from '../../store/actions/addAuthor';
import AuthorListItem from './ListItem';

const initialState = { name: '', image: '' };

class AuthorForm extends React.Component {
  /*  componentDidMount = () => {
    const defaultState = this.props.data ? this.props.data : initialState;
    this.setState(defaultState);
    console.log('this.setState(defaultState)', this.state);
  }; */
  state = this.props.data ? this.props.data : initialState;

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = () => {
    const { name, image } = this.state;
    this.props.addAuthor({ name, image });
    this.props.toggleModal();
    this.setState(initialState);
  };

  handleCancel = () => {
    this.props.toggleModal();
    this.setState(initialState);
  };

  render() {
    const previewImage = this.state.image
      ? this.state.image
      : 'https://i.warosu.org/data/lit/img/0103/79/1512891765207.jpg';
    const previewName = this.state.name ? this.state.name : 'Shakespear W.';
    const { name, image } = this.props.data ? this.props.data : { name: '', image: '' };
    console.log('this.props.data', this.props.data);
    console.log(this.state);
    return (
      <div>
        <Dialog open={this.props.openModal} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add a new Author</DialogTitle>
          <DialogContent>
            <DialogContentText>Please, don't create duplicates. Be sure that it's not exist yet.</DialogContentText>
            <br />
            <Grid container>
              <Grid item sm={6}>
                <TextField
                  onChange={this.handleChange}
                  autoFocus
                  id="name"
                  label="Name"
                  type="text"
                  defaultValue={name}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField onChange={this.handleChange} id="image" label="Image" type="text" defaultValue={image} />
              </Grid>
              <Grid item xs={12}>
                <br />
                <Typography variant="subtitle1">Preview:</Typography>
                <AuthorListItem author={{ name: previewName, image: previewImage }} />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAuthor: author => dispatch(addAuthor(author))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthorForm);
