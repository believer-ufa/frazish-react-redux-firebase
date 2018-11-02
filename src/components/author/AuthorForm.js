import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import addAuthor from '../../store/actions/addAuthor';
import toggleModal from '../../store/actions/toggleModal';

class AuthorForm extends React.Component {
  state = { name: '', image: '' };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = () => {
    const { name, image } = this.state;
    this.props.addAuthor({ name, image });
    this.props.toggleModal();
    //this.setState({ ...initialState });
  };
  handleCancel = () => {
    //this.setState(initialState);
    this.props.toggleModal();
  };

  render() {
    const previewImage = this.state.image
      ? this.state.image
      : 'https://i.warosu.org/data/lit/img/0103/79/1512891765207.jpg';
    const previewName = this.state.name ? this.state.name : 'Shakespear W.';
    return (
      <div>
        <Dialog open={this.props.openModal} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add a new Author</DialogTitle>
          <DialogContent>
            <DialogContentText>Please, don't create duplicates. Be sure that it's not exist yet.</DialogContentText>
            <br />
            <Grid container>
              <Grid item sm={6}>
                <TextField onChange={this.handleChange} autoFocus id="name" label="Name" type="text" />
              </Grid>
              <Grid item sm={6}>
                <TextField onChange={this.handleChange} id="image" label="Image" type="text" />
              </Grid>
              <Grid item xs={12}>
                <br />
                <Typography variant="subtitle1">Preview:</Typography>
                <List>
                  <ListItem divider>
                    <Avatar alt={previewName} src={previewImage} />
                    <ListItemText primary={previewName} />
                    <ListItemSecondaryAction>
                      <MoreVertIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
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

const mapStateToProps = state => {
  return {
    openModal: state.option.openModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAuthor: author => dispatch(addAuthor(author)),
    toggleModal: () => dispatch(toggleModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorForm);
