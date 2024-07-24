// EmailComposer.tsx
import React, { useState } from "react";
import Modal from "./Modal";
import EmailInputField from "./EmailInputField";
import "./EmailComposer.css";

const EmailComposer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toEmails, setToEmails] = useState<string[]>([]);
  const [ccEmails, setCcEmails] = useState<string[]>([]);
  const [bccEmails, setBccEmails] = useState<string[]>([]);

  return (
    <div className="email-composer">
      <button onClick={() => setIsModalOpen(true)}>Compose Email</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Compose Email</h2>
        <EmailInputField label="To" emails={toEmails} setEmails={setToEmails} />
        <EmailInputField label="CC" emails={ccEmails} setEmails={setCcEmails} />
        <EmailInputField
          label="BCC"
          emails={bccEmails}
          setEmails={setBccEmails}
        />
        <textarea
          placeholder="Email content..."
          className="email-content"
        ></textarea>
        <button className="send-button">Send</button>
      </Modal>
    </div>
  );
};

export default EmailComposer;
