import styled from "styled-components";

const Header = () => {
  return (
    <Headers>
      <nav>
        <h1>Messages</h1>
      </nav>
    </Headers>
  );
};

export default Header;

const Headers = styled.header`
  width: 100%;
  margin: 10px 0;
  > nav {
    width: 960px;
    margin: 0 auto;
    text-align: center;
  }
`;
