import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home"
import Perritos from "./components/Perritos"
import Gatitos from "./components/Gatitos"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home perritos={<Perritos />} gatitos={<Gatitos />}/>}>
          <Route path="/perritos" element={<Perritos />} />
          <Route path="/gatitos" element={<Gatitos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Router history={browserHistory}>
<Route path="/" component={Home}>
  <Route path="/perritos" component={Perritos} />
  <Route path="/gatitos" component={Gatitos} />
</Route>
</Router> */
}
