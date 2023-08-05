

import Search from './search';
function Header({ children }) {

  return (
    <header>
      <nav>
        <ul>
          {children.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <Search></Search>
      </nav>
    </header>
  );
}

export default Header;
