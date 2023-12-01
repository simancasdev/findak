import Admin from "navigation";
import {store} from "redux/store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Admin />
    </Provider>
  );
}

export default App;
