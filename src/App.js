import { Component } from "react";
import Navbar from "./Components/Navbar";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
});

export class App extends Component {
  render() {
    return (
      <main>
        <ApolloProvider client={client}>
          <Navbar />
        </ApolloProvider>
      </main>
    );
  }
}

export default App;
