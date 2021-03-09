import React from 'react';

const url = 'https://the-problem-solver-sample-data.azurewebsites.net/accounts';

export function Accounts() {
  return (
    <div>
      <h2>Accounts</h2>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Surname</th>
            <th>E-Mail</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Firstname</td>
            <td>Surname</td>
            <td>E-Mail</td>
            <td>Balance</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
