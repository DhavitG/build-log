// function App() {
//   return (
//     <div className="grid grid-cols-12">
//       <div className="bg-blue-300 col-span-4">child1</div>
//       <div className="bg-green-300 col-span-6">child2</div>
//       <div className="bg-purple-300 col-span-2">child3</div>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="bg-blue-300 col-span-1 sm:col-span-5">child1</div>
      <div className="bg-green-300 col-span-1 sm:col-span-5">child2</div>
      <div className="bg-purple-300 col-span-1 sm:col-span-2">child3</div>
    </div>
  );
}

export default App;
