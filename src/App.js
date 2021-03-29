import "./App.css";
import brightcovePlayerLoader from "@brightcove/player-loader";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    brightcovePlayerLoader({
      refNode: "#container",
      refNodeInsert: "replace",
      accountId: "6044537283001",
      playerId: "j14Ja0Eth",
      embedId: "default",
      videoId: "6231380154001",
    });
  }, []);
  return <div id="container"></div>;
}

export default App;
