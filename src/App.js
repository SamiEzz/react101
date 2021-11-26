import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    cryptos: [
      { id: 1, name: "BTC" },
      { id: 2, name: "ETH" },
      { id: 3, name: "ALPHA" },
      { id: 4, name: "RPL" }
    ]
  };

  render() {
    const title = "Crypto list";
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.cryptos.map((crypto) => (
            <li>
              {crypto.id} - {crypto.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
