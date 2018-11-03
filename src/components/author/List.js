import React, { Fragment } from 'react';
import AuthorListItem from './ListItem';
import { List } from '@material-ui/core';

const AuthorList = props => {
  return (
    <Fragment>
      <List>
        {props.authors.map((author, index) => (
          <AuthorListItem author={author} key={author.id} toggleModal={props.toggleModal} />
        ))}
      </List>
    </Fragment>
  );
};

export default AuthorList;
