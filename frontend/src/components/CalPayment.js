import React, { Component } from "react";
import { SOURCE, DESTINATION, NOOFTICKETS } from "./TicketBooking";

export const TOTALAMMOUNT = "TOTALAMMOUNT";

export default class CalPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: ""
    };
  }

  calPay() {
    let total = this.state.total;

    if (SOURCE === "Gambir" && DESTINATION === "Bandung") {
      // this.state.total = NOOFTICKETS * 370;
      this.setState({ total: NOOFTICKETS * 370 });
      sessionStorage.setItem(TOTALAMMOUNT, total);
    } else if (SOURCE === "Gambir" && DESTINATION === "Bandung") {
      this.setState({ total: NOOFTICKETS * 50 });
      sessionStorage.setItem(TOTALAMMOUNT, total);
    }
  }

  render() {
    return <div />;
  }
}

// module.exports = new calPay();
