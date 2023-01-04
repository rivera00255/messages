import { Request, Response } from "express";
import { readDB, writeDB } from "../dbController";
import { v4 } from "uuid";

type Message = {
  id: string;
  cotent: string;
  createdAt: string;
  updatedAt: string;
};

const setMessages = (data: any) => writeDB(data);

export const create = (req: Request, res: Response) => {
  try {
    const messages = readDB();
    const timestamp = new Date().toISOString();
    const newMessage = {
      id: v4(),
      content: req.body.content,
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    messages.unshift(newMessage);
    setMessages(messages);
    res.send(newMessage);
  } catch (e) {
    res.status(500).send({ error: e });
  }
};

export const getList = (req: Request, res: Response) => {
  try {
    const messages: Message[] = readDB();
    res.send(messages);
  } catch (e) {
    res.send({ error: e });
  }
};

export const update = (req: Request, res: Response) => {
  try {
    const messages = readDB();
    const messageIndex = messages.findIndex(
      (item: Message) => item.id === req.body.id
    );
    if (messageIndex < 0) throw Error("not found");

    const timestamp = new Date().toISOString();
    const newMessage = {
      ...messages[messageIndex],
      content: req.body.content,
      updatedAt: timestamp,
    };
    console.log(newMessage);
    messages.splice(messageIndex, 1, newMessage);
    setMessages(messages);
    res.send(newMessage);
  } catch (e) {
    res.status(500).send({ error: e });
  }
};

export const deleteMessage = (req: Request, res: Response) => {
  try {
    const messages = readDB();
    console.log(req.body);
    const message = messages.find((item: Message) => item.id === req.body.id);
    if (!message) throw Error("not found");

    messages.splice(message, 1);
    setMessages(messages);
    res.send(req.body.id);
  } catch (e) {
    res.status(500).send({ error: e });
  }
};
