import React from 'react';
import Button from '@material-ui/core/Button';
import { Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class ItemMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleEdit = event => {
    const { handleEdit, id } = this.props;
    //handleEdit(id);
    //const { id, name, image } = this.props.author;

    this.setState({ anchorEl: null });
    this.props.toggleModal(this.props.author);
  };

  handleDelete = event => {
    const { id, name, image } = this.props.author;
    console.log('delete', id);
    this.setState({ anchorEl: null });
  };

  handleClose = event => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
          <MoreVertIcon />
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          <MenuItem onClick={this.handleEdit}>Edit</MenuItem>
          <MenuItem onClick={this.handleTranslate}>Translate</MenuItem>
          <MenuItem onClick={this.handleDelete}>Delete</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default ItemMenu;

/* const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthorMenu); */
