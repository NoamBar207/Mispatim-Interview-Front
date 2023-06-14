import { Link } from "react-router-dom";

export const AppHeader = () => {
  return (
    <header className="app-header-container">
      <div className="logo">Noam's App</div>
      <nav className="nav">
        <Link className="nav-link" to="/">
          Users
        </Link>
        <Link className="nav-link" to="/blog">
          Blog
        </Link>
      </nav>
    </header>
  );
};
