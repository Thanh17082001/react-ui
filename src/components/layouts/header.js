

function Header({ children }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {children}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
