import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/neet" element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11Program />}
            />
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12Program />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div style={{ height: "90vh" }}>
        <Outlet />
      </div>
      Footer
    </div>
  );
}

function Header() {
  return (
    <div>
      <Link to="/">Allen</Link>|
      <Link to="/neet/online-coaching-class-11">Class 11th</Link>|
      <Link to="/neet/online-coaching-class-12">Class 12th</Link>
    </div>
  );
}

function ErrorPage() {
  return <div>Sorry, page not found!</div>;
}

function Landing() {
  return <div>Welcome to Allen</div>;
}

function Class11Program() {
  return <div>NEET programs for Class 11th</div>;
}

function Class12Program() {
  return <div>NEET programs for Class 12th</div>;
}

export default App;
