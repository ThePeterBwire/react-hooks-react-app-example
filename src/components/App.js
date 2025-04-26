
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"; // New import

function App() {
  return (
    <div className="App">
      <h1>Now</h1>  {/* Changed from time display */}
      <ExampleComponent />
      <TestComponent />  {/* New component */}
    </div>
  );
}

export default App;