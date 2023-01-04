import styled from "styled-components";

export type MessageType = {
  content: string;
  createdAt: string;
  updatedAt: string;
};

const Message = ({ item }: { item: MessageType }) => {
  // console.log(item);
  return (
    <Wrapper>
      <input type="text" defaultValue={item.content} />
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
  margin-bottom: 20px;
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
