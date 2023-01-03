import { useRef } from "react";
import styled from "styled-components";
import Message from "./components/Message";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

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
                console.log(inputRef.current.value);
                inputRef.current.value = "";
              }
            }}
          >
            Submit
          </button>
        </InnerContainer>
        <InnerContainer></InnerContainer>
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
