import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Menu from './AuthorMenu';

import AddIcon from '@material-ui/icons/Add';
import { Grid } from '@material-ui/core';

const authors = [
  {
    id: '111',
    name: 'F.M.Dostoevsky',
    image: 'https://i.warosu.org/data/lit/img/0103/79/1512891765207.jpg'
  },
  {
    id: '222',
    name: 'L.N.Tolstoy',
    image: 'https://i.warosu.org/data/lit/img/0103/79/1512891765207.jpg'
  },
  {
    id: '333',
    name: 'J.R.R.Tolkien',
    image: 'https://i.warosu.org/data/lit/img/0103/79/1512891765207.jpg'
  },
  {
    id: '4',
    name: 'W.Shakespear',
    image: 'https://i.warosu.org/data/lit/img/0103/79/1512891765207.jpg'
  },
  {
    id: '5',
    name: 'Ch.Dickens',
    image: 'https://i.warosu.org/data/lit/img/0103/79/1512891765207.jpg'
  }
];

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

export class AuthorList extends Component {
  handleEdit = e => {
    console.log('handleEdit');
  };
  handleDelete = id => {
    console.log('handleDelete, id', id);
  };
  render() {
    return (
      <main>
        <Grid container>
          {/*           <Grid item xs={0} sm={3} md={4}>
            {' '}
          </Grid> */}
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <List>
              {authors.map((author, index) => (
                <ListItem divider key={author.id}>
                  <Avatar alt={author.name} src={author.image} />
                  <ListItemText primary={author.name} />
                  <ListItemSecondaryAction>
                    <Menu id={author.id} handleDelete={this.handleDelete} />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Grid>
          {/*           <Grid item xs={0} sm={3} md={4}>
            {' '}
          </Grid> */}
        </Grid>
        <Button style={style} variant="fab" color="primary" aria-label="Add">
          <AddIcon />
        </Button>
      </main>
    );
  }
}

export default AuthorList;
