import styled from "styled-components";

const Message = () => {
  return (
    <Wrapper>
      <input type="text" />
      <div>
        <button>Edit</button>
        <button>Del</button>
      </div>
    </Wrapper>
  );
};

export default Message;

const Wrapper = styled.div`
  width: 760px;
  background: #fafafa;
  border-radius: 5px;
  box-shadow: 2px 2px 3px #eee;
  padding: 20px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > input {
    padding: 4px;
    min-width: 50%;
    max-width: 600px;
    background: #fafafa;
  }
  button {
    background: #bdbdbd;
    color: #fff;
    border-radius: 5px;
    padding: 2px 8px;
    margin-left: 4px;
  }
`;
