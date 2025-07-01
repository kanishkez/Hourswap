import React from 'react';

const Terms = () => (
  <div className="container py-12 max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
    <p className="mb-4">By using HourSwap, you agree to the following terms and conditions:</p>
    <ul className="list-disc pl-6 mb-4">
      <li>You are responsible for the information you share and the services you offer or request</li>
      <li>All exchanges are based on time, not money</li>
      <li>Respect other members and maintain a safe, supportive environment</li>
      <li>HourSwap is not liable for any direct or indirect damages resulting from use of the platform</li>
    </ul>
    <p className="mt-8">For questions, contact us at <a href="/contact" className="text-primary hover:underline">Contact Us</a>.</p>
  </div>
);

export default Terms; 