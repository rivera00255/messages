import { Request, Response } from "express";
import { readDB, writeDB } from "../dbController";

type Message = {
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
    const messages: Message = readDB();
    res.send(messages);
  } catch (e) {
    res.send({ error: e });
  }
};
