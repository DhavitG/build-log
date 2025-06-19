import Button from "./Components/Button";
import Header from "./Components/Header";
import Input from "./Components/Input";

function App2() {
  return (
    <div className="h-screen bg-blue-700 flex flex-cols items-center justify-center">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="w-full max-w-lg text-center">
        <Header />
        <Input type="text" placeholder="Enter email id..." />
        <Button disabled={true}>Verify</Button>
      </div>
    </div>
  );
}

export default App2;
