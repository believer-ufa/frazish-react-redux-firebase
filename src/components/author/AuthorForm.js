import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';

const fabStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

const initialState = {
  open: false,
  name: 'Shakespear W.',
  image: 'https://i.warosu.org/data/lit/img/0103/79/1512891765207.jpg'
};

class AuthorForm extends React.Component {
  state = initialState;

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleClose = () => {
    this.setState(initialState);
    console.log('state', this.state);
  };

  render() {
    return (
      <div>
        <Button style={fabStyle} onClick={this.handleClickOpen} variant="fab" color="primary" aria-label="Add">
          <AddIcon />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
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
              <Grid item sm={12}>
                <br />
                <Typography variant="subtitle1">Preview:</Typography>
                <List>
                  <ListItem divider>
                    <Avatar alt={this.state.name} src={this.state.image} />
                    <ListItemText primary={this.state.name} />
                    <ListItemSecondaryAction>
                      <MoreVertIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AuthorForm;
