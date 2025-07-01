import React from 'react';

const Privacy = () => (
  <div className="container py-12 max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how HourSwap collects, uses, and protects your information.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>Personal information you provide during registration (name, email, etc.)</li>
      <li>Profile and service information you choose to share</li>
      <li>Usage data and analytics</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>To provide and improve our services</li>
      <li>To communicate with you about your account</li>
      <li>To ensure the safety and security of our community</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">Your Choices</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>You can update your profile and privacy settings at any time</li>
      <li>You may request deletion of your account and data</li>
    </ul>
    <p className="mt-8">For questions, contact us at <a href="/contact" className="text-primary hover:underline">Contact Us</a>.</p>
  </div>
);

export default Privacy; 