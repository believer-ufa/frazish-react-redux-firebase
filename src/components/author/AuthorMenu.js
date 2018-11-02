import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import toggleModal from '../../store/actions/toggleModal';

class AuthorMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleEdit = event => {
    const { handleEdit, id } = this.props;
    //handleEdit(id);
    this.setState({ anchorEl: null });
    this.props.toggleModal();
  };

  handleDelete = event => {
    const { handleDelete, id } = this.props;
    handleDelete(id);
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

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthorMenu);
