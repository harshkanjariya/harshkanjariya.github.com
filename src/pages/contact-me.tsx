import { useState } from 'react';
import { Button, Input, message } from "antd";

export function ContactMe() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(Date.now());

  async function submit() {
    if (Date.now() - lastSubmitTime < 5000) return;
    try {
      // api call
      setUserMessage('');
      setName('');
      setContact('');
      setLastSubmitTime(Date.now());
      message.success("Message dropped, I'll get back to you soon");
    } catch (e: any) {
      switch (e.body.statusCode) {
        case 409:
          message.info("Message already dropped by this contact");
          break;
        default:
          message.info("Something went wrong, please try again later");
          break;
      }
    }
  }

  return (
    <div className="flex flex-col items-center p-0 md:p-4">
      <div className="flex flex-col w-full md:max-w-xl p-5 mt-5 bg-white rounded shadow">
        <div className="flex flex-col md:flex-row-reverse justify-between mb-4">
          <a
            href="https://wa.me/+917802004735"
            target="_blank"
            rel="noreferrer"
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded"
          >
            <img src="/logo/whatsapp.png" alt="whatsapp" className="w-5 h-5" />
            <span className="ml-2">+91 7802004735</span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=code.harshkanjariya@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded"
          >
            <img src="/logo/email.png" alt="email" className="w-5 h-5" />
            <span className="ml-2">code.harshkanjariya@gmail.com</span>
          </a>
        </div>
        <div className="flex flex-row items-center mb-5">
          <div className="w-full h-[1px] bg-gray-300"></div>
          <span className="bg-white px-3 text-gray-600 text-sm">OR</span>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
        <h3 className="text-lg font-semibold text-center mb-4">Drop me a message</h3>
        <div className="flex flex-col gap-4">
          <Input
            value={name}
            className="border p-2 rounded focus:ring focus:ring-blue-500"
            placeholder="Name"
            onChange={(v) => setName(v.target.value)}
          />
          <Input
            value={contact}
            className="border p-2 rounded focus:ring focus:ring-blue-500"
            placeholder="Email or phone"
            onChange={(v) => setContact(v.target.value)}
          />
          <textarea
            value={userMessage}
            className="resize-none w-full p-2 border rounded focus:ring focus:ring-blue-500"
            cols={30}
            rows={10}
            placeholder="Message"
            onChange={(e) => setUserMessage(e.currentTarget.value)}
          />
        </div>
        <div className="flex justify-end mt-5">
          <Button type="primary" onClick={submit}>Submit</Button>
        </div>
      </div>
    </div>
  );
}
