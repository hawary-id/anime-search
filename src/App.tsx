import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6">
      <Button>Test Shadcn</Button>
    </div>
  );
}

export default App;
