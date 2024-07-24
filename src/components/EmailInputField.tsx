// EmailInputField.tsx
import React, { useState } from "react";
import "./EmailInputField.css";

interface EmailInputFieldProps {
  label: string;
  emails: string[];
  setEmails: React.Dispatch<React.SetStateAction<string[]>>;
}

const EmailInputField: React.FC<EmailInputFieldProps> = ({
  label,
  emails,
  setEmails,
}) => {
  const [inputValue, setInputValue] = useState("");

  // Email validation regex
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      const trimmedValue = inputValue.trim();
      if (validateEmail(trimmedValue) && !emails.includes(trimmedValue)) {
        setEmails([...emails, trimmedValue]);
        setInputValue("");
      }
    }
  };

  const removeEmail = (index: number) => {
    const newEmails = [...emails];
    newEmails.splice(index, 1);
    setEmails(newEmails);
  };

  return (
    <div className="email-input-container">
      <label>{label}</label>
      <div className="email-chip-container">
        {emails.map((email, index) => (
          <div key={index} className="email-chip">
            {email}
            <button type="button" onClick={() => removeEmail(index)}>
              &times;
            </button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add email..."
        />
      </div>
    </div>
  );
};

export default EmailInputField;
