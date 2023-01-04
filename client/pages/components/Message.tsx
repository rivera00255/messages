import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "..";
import { useRef } from "react";

export type MessageType = {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

const Message = ({ item }: { item: MessageType }) => {
  // console.log(item);
  const inputRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const { mutate: updateMessage } = useMutation(
    ({ id, content }: { id: string; content: string }) => {
      return axios.put(`${baseUrl}/messages`, { id, content });
    },
    { onSuccess: () => queryClient.invalidateQueries(["messages"]) }
  );

  const { mutate: deleteMessage } = useMutation(
    (id: string) => {
      return axios.delete(`${baseUrl}/messages`, { data: { id } });
    },
    { onSuccess: () => queryClient.invalidateQueries(["messages"]) }
  );

  return (
    <Wrapper>
      <input type="text" defaultValue={item.content} ref={inputRef} />
      <div>
        <button
          onClick={() => {
            if (inputRef.current) {
              updateMessage({ id: item.id, content: inputRef.current.value });
            }
          }}
        >
          Edit
        </button>
        <button onClick={() => deleteMessage(item.id)}>Del</button>
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
    &:focus {
      outline: none;
      border-bottom: 1px solid #bdbdbd;
    }
  }
  button {
    background: #bdbdbd;
    color: #fff;
    border-radius: 5px;
    padding: 2px 8px;
    margin-left: 4px;
  }
`;
