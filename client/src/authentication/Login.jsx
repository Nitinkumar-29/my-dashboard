import React from "react";
import { Form, Input } from "antd";

export const Login = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const validatePassword = (rule, value) => {
    if (value.length < 8) {
      return Promise.reject("Password must be at least 8 characters");
    }
    return Promise.resolve();
  };
  const validateEmail = (rule, value) => {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!re.test(value)) {
      return Promise.reject("Invalid email address");
    }
    return Promise.resolve();
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-gray-100 p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Continue
        </h2>
        <Form
          form={form}
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, validator: validateEmail }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, validator: validatePassword }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
