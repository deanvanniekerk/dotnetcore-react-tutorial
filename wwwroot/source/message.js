import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class Message extends React.Component {
constructor(props) {
      super(props);
      this.state = { message: '' };
      this.handleChange = this.handleChange.bind(this);
   }
   handleChange(event) {
      this.setState({message: event.target.value});
   }
   render() {
      return <div>
      <h3>Message: {this.state.message}</h3>
      <span className="text-primary">Enter message:</span> <input type="text" value={this.state.message} onChange={this.handleChange} />
      </div>;
   }
}