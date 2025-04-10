import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./app/store";

import { NavBar } from "./components/puppies/NavBar";
import PuppyDetails from "./components/puppies/PuppyDetails";
import PuppyList from "./components/puppies/PuppyList";
import PuppyForm from "./components/puppies/PuppyForm";

import "./App.scss";

/**
 * @component
 * This app shows a list of puppy bowl players from the API.
 * Users can view players in the roster, add a player to the roster,
 * see more details about a specific player, and remove a player from the roster.
 */
export default function App() {
  const [selectedPuppyId, setSelectedPuppyId] = useState();
  const [search, setSearch] = useState("");

  return (
    <Provider store={store}>
      <Router>
        <NavBar setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={[
              <PuppyForm />,
              <PuppyList
                setSelectedPuppyId={setSelectedPuppyId}
                search={search}
              />,
            ]}
          />
          <Route
            path={`/puppy/${selectedPuppyId}`}
            element={
              <PuppyDetails
                selectedPuppyId={selectedPuppyId}
                setSelectedPuppyId={setSelectedPuppyId}
              />
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}
