import React from 'react';

export function Accounts({ url }) {
  //   const url =
  //     'https://the-problem-solver-sample-data.azurewebsites.net/accounts';

  const [accounts, setAccounts] = React.useState([]);
  React.useEffect(() => {
    async function loadData() {
      const rsp = await fetch(url);
      const accounts = await rsp.json();
      setAccounts(accounts);
    }

    if (url) {
      loadData();
    }

    // return () => {}
  }, [url]);

  return (
    <div>
      <h2>Accounts</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Surname</th>
            <th>E-Mail</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((a) => (
            <tr key={a.id}>
              <td>{a.firstname}</td>
              <td>{a.surname}</td>
              <td>{a.email}</td>
              <td>{a.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
