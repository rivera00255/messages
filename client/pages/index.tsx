import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useMemo, useRef } from "react";
import styled from "styled-components";
import Message, { MessageType } from "./components/Message";

export const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const { mutate: createMessage } = useMutation(
    ({ content }: { content: string }) => {
      return axios.post(`${baseUrl}/messages`, { content });
    },
    { onSuccess: () => queryClient.invalidateQueries(["messages"]) }
  );

  const { data: messages } = useQuery(["messages"], () => {
    return axios.get(`${baseUrl}/messages`);
  });

  const messageList = useMemo(() => messages?.data, [messages]);
  // console.log(messageList);

  return (
    <Section>
      <div>
        <InnerContainer>
          <label>
            <input type="text" placeholder="messages..." ref={inputRef} />
          </label>
          <button
            onClick={() => {
              if (inputRef.current) {
                // console.log(inputRef.current.value);
                createMessage({ content: inputRef.current.value });
                inputRef.current.value = "";
              }
            }}
          >
            Submit
          </button>
        </InnerContainer>
        <ListContainer>
          {messageList?.map((item: MessageType) => (
            <Message key={item.id} item={item} />
          ))}
        </ListContainer>
      </div>
    </Section>
  );
}

const Section = styled.section`
  > div {
    width: 960px;
    margin: 0 auto;
    padding: 40px 0;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  > label {
    > input {
      border: 1px solid #bdbdbd;
      border-radius: 5px;
      padding: 4px;
      width: 520px;
      margin-right: 8px;
    }
  }
  > button {
    background: #757575;
    color: #fff;
    border-radius: 5px;
    padding: 4px 16px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
