import Counter from "./Counter";
import Calculator from "./Calculator";
import PassProps from "./PassProps";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <Counter />
      <Calculator />
      <PassProps title="Hello World" message="This is a message passed as props." />
      <PassProps title="Another Title" message="Another message for the second component." />
      <PassProps title="Final Title" message="Final message in the last component." />
      <UserProfile />
    </div>
  );
}

export default App;
