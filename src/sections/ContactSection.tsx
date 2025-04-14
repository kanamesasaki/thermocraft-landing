// src/sections/ContactSection.tsx
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <p className="mb-4">
          Have questions or need technical support? We'd love to hear from you!
        </p>
        
        <p className="mb-4">
          Please email us at: <a href="mailto:support@thermocraft.space" className="text-blue-600 hover:text-blue-800 font-medium">support@thermocraft.space</a>
        </p>
      </div>
      
    </div>
  );
};

export default ContactSection;