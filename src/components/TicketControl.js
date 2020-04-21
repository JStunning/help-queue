import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import HaveYou1 from './HaveYou1';
import HaveYou2 from './HaveYou2';
import HaveYou3 from './HaveYou3';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    if(this.state.counter <= 3){
      this.setState((state) => {
        return {counter: state.counter + 1}
      });
    } else {
      this.setState((state) => {
        return {counter: 0}
      });
    }

    console.log("hello")
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.counter === 4) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket List";
    } else if (this.state.counter === 1) {
      currentlyVisibleState = <HaveYou1 />
      buttonText = "Yes";
    } else if (this.state.counter === 2) {
      currentlyVisibleState = <HaveYou2 />
      buttonText = "Yes";
    } else if (this.state.counter === 3) {
      currentlyVisibleState = <HaveYou3 />
      buttonText = "Yes";
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;