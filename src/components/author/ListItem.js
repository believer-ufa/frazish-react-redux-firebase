import React, { Fragment } from 'react';
import { ListItem, ListItemSecondaryAction, ListItemText, Avatar } from '@material-ui/core';
import ItemMenu from './ListItemMenu';
const AuthorListItem = props => {
  const { author } = props;

  return (
    <Fragment>
      <ListItem divider>
        <Avatar alt={author.name} src={author.image} />
        <ListItemText primary={author.name} />
        <ListItemSecondaryAction>
          <ItemMenu author={author} openModal={props.openModal} />
        </ListItemSecondaryAction>
      </ListItem>
    </Fragment>
  );
};

export default AuthorListItem;
