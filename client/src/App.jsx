import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Projects } from "./pages/Projects";
import { ProjecDetails } from "./pages/ProjectDetails"



const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  <ApolloProvider client={client}>
  <BrowserRouter>
  <Routes>
  <Route path="/projects" element={<Projects />} />
  <Route path="/projects/:projectId" element={<ProjecDetails />} />
  </Routes>
  </BrowserRouter>
  </ApolloProvider>;
}

export default App;
