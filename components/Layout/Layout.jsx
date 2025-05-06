// Importing necessary modules and components
import { Outlet } from "react-router"; // Outlet component to render child routes dynamically
import Header from "./Header"; // Importing the Header component for consistent top navigation
import "./Layout.css"; // Importing the custom CSS for styling the Layout component

export default function Layout() {
  return (
    <>
      {/* Rendering the Header component at the top of every page */}
      <Header />

      {/* Main content area where nested routes will be rendered */}
      <main>
        {/* The Outlet component is used to render the matched child route */}
        <Outlet />
      </main>
    </>
  );
}
