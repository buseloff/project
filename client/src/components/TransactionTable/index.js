import React, { Component } from "react";
import styles from "./TransactionTable.sass";
import CONSTANTS from "../../constants";
import PropTypes from "prop-types";

const TransactionTable = (props) => {
  const { data } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Earned/Spent</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        {data.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>
              {transaction.type === CONSTANTS.INCOME ? "Earned" : "Spent"}
            </td>
            <td>
              {transaction.type === CONSTANTS.INCOME
                ? `+${transaction.sum}$`
                : `-${transaction.sum}$`}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      sum: PropTypes.number,
    })
  ),
};

export default TransactionTable;
