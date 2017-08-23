import React,{ PropTypes } from 'react';
import TextField from 'material-ui/TextField';

export default class ToDoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text || '',
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
    }
  }

  render() {
    return (
      <TextField
        hintText="Enter ToDo"
        fullWidth
        value={this.state.text}
        onChange={(event) => {
          this.setState({
            text: event.target.value,
          });
        }}
        onKeyDown={(e) => {
          if (e.which === 13) {
            this.props.onSave(this.state.text);
            this.setState({ text: '' });
          }
        }}
      />
    );
  }
}

ToDoInput.propTypes = {
  text: PropTypes.string,
  onSave: PropTypes.func,
};

ToDoInput.defaultProps = {
  text: '',
  onSave: null,
};
