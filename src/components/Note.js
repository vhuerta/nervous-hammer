import React from 'react';
import createReactClass from 'create-react-class';

const Note = createReactClass({
  edit() {
    alert('Editing note');
  },
  remove() {
    alert('Removing note');
  },
  render() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit}>Edit</button>
          <button onClick={this.remove}>X</button>
        </span>
      </div>
    );
  },
});

export default Note;
