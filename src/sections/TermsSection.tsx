// src/sections/TermsSection.tsx
import React from 'react';

const TermsSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Terms & Conditions</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-4">Terms of Use</h3>
        <p className="mb-4">
            By accessing and using this application, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, you should not use this application.
        </p>
    </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-4">Disclaimer of Warranty</h3>
        <p className="mb-4">
          The software is provided "as is", without warranty of any kind, express or implied,
          including but not limited to the warranties of merchantability, fitness for a particular purpose and
          noninfringement.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-4">Privacy Policy</h3>
        <p className="mb-4">
          Our service uses Google Analytics to collect anonymous usage data only after you consent
          through the cookie banner. This analytics service helps us understand how users interact with our
          application so we can improve it.
        </p>
        <p className="mb-4">
          We collect no personal information unless explicitly provided by you through our
          Contact form / email. Any personal information you provide is used solely for the purpose of responding to
          your inquiry and will never be shared with third parties without your explicit consent.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-4">Limitation of Liability</h3>
        <p className="mb-4">
          In no event shall the developer be liable for any claim, damages or other liability
          arising from the use of this software or the information it provides.
        </p>
      </section>
    </div>
  );
};

export default TermsSection;