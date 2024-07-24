"use client";

// app/08-email-composer/page.tsx
import React from "react";
import EmailComposer from "../../components/EmailComposer";

const EmailComposerPage: React.FC = () => {
  return (
    <div>
      <h1>Email Composer</h1>
      <EmailComposer />
    </div>
  );
};

export default EmailComposerPage;
