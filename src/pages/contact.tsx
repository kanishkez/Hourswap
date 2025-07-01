import React from 'react';

const Contact = () => (
  <div className="container py-12 max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
    <p className="mb-4">Have questions or need support? Reach out to the HourSwap team below.</p>
    <form className="space-y-6 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block font-medium mb-1">Name</label>
        <input id="name" name="name" type="text" className="w-full border rounded px-3 py-2" required />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium mb-1">Email</label>
        <input id="email" name="email" type="email" className="w-full border rounded px-3 py-2" required />
      </div>
      <div>
        <label htmlFor="message" className="block font-medium mb-1">Message</label>
        <textarea id="message" name="message" rows={5} className="w-full border rounded px-3 py-2" required />
      </div>
      <button type="submit" className="bg-primary text-white px-6 py-2 rounded font-semibold">Send Message</button>
    </form>
    <p className="mt-8">Or email us at <a href="mailto:support@hourswap.com" className="text-primary hover:underline">support@hourswap.com</a></p>
  </div>
);

export default Contact; 