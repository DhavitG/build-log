// function App() {
//   return (
//     <div className="grid grid-cols-12">
//       <div className="bg-blue-300 col-span-4">child1</div>
//       <div className="bg-green-300 col-span-6">child2</div>
//       <div className="bg-purple-300 col-span-2">child3</div>
//     </div>
//   );
// }

import { SidebarClass1 } from "./Components/answers/1-basic-project";

// export default App;

function App() {
  return (
    <div className="h-screen bg-white dark:bg-black">
      {/* <SidebarClass1 /> */}
      <h1 className="text-black dark:text-white">hello</h1>
      <button
        onClick={() => {
          document.querySelector("html").classList.toggle("dark");
        }}
        className="text-black dark:text-white"
      >
        Toggle theme
      </button>
    </div>
  );
}

export default App;
