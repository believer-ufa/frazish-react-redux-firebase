import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

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

// Здесь можно подключить какие-то дополнительные hoc'и к
// компоненту, внутри функции compose
const hoc = compose(
  // мы вызывем connect без всяких параметров, чтобы упростить код,
  // и чтобы получить ф-ю dispatch в наш компонент и далее использовать
  // её для выполнения action'ов
  connect(),
);

class AuthorFormClass extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    forwardedRef: PropTypes.func,
  };

  static defaultProps = {
    forwardedRef: undefined,
  };

  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      data: initialState,
    };

    if (this.props.forwardedRef) {
      this.props.forwardedRef(this);
    }
  }

  open = (data = initialState) => {
    this.setState({
      opened: true,
      data,
    });
  };

  close = () => {
    this.setState({
      opened: false,
      data: initialState,
    });
  };

  handleChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.id]: e.target.value,
      }
    });
  };

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { name, image } = this.state.data;
    dispatch(addAuthor({ name, image }));
    this.close();
  };

  render() {
    const { name, image } = this.state.data;
    return (
      <div>
        <Dialog open={this.state.opened} onClose={this.close} aria-labelledby="form-dialog-title">
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
                <AuthorListItem author={{ name, image }} />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.close} color="primary">
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

const AuthorForm = hoc(AuthorFormClass);

// Мы оборачиваем наш компонент другими hoc'ами, это создаёт проблему.
// Чтобы родительские компоненты могли легко добраться до
// кода и методов основного класса, мы возвращаем компонент с помощью спец.
// ф-ии React.forwardRef, которая появилась совсем недавно.
// Подробнее: https://reactjs.org/docs/forwarding-refs.html
export default React.forwardRef((props, ref) => (
  <AuthorForm {...props} forwardedRef={ref} />
));
