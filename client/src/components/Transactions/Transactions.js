import React, { Component } from "react";
import styles from "./Transactions.module.sass";
import Header from "../../components/Header/Header";

class Transactions extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className={styles.contestsContainer}>
          <table>
            <caption>
              <b>Your transactions</b>
            </caption>
            <tr>
              <th>Id</th>
              <th>Earned/Spent</th> <th>Sum</th>
            </tr>
            <tr>
              <td>1</td> <td>Earned</td> <td>+350$</td>
            </tr>
            <tr>
              <td>2</td> <td>Spent</td> <td>+350$</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Transactions;
