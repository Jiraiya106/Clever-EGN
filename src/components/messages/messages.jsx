import { message } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMessagesRequest } from "../../store/messages/action-creators";
import "./messages.css";

export const Messages = () => {
  const dispatch = useDispatch();
  const { messages, totalResults, isLoading, isError } = useSelector(
    (state) => state.messages
  );

  useEffect(() => {
    dispatch(getMessagesRequest());
  }, []);
  const getDate = (date) => new Date(Date.parse(date)).toLocaleString;
  const onFinish = ({ mesages }) => {
    dispatch(sendMessage(message))
  }

  return (
    <div className="messages">
      <h2>ЧАТ</h2>
      {messages.map((message) => (
        <div>{message.text}
          <div className="messages">
            <div className="date">{getDate(message.date)}</div>
            <div className="user">{message.user}</div>
            <div className="text">{message.text}</div>
            <div className=" likes">Likes: {message.likes}</div>
          </div>
        </div>
      ))}
       <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item name="message" label="input text">
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
