import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  }

  render() {
    let remChars = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message}/>
        {remChars}
      </div>
    );
  }
}

export default TwitterMessage;
