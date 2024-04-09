import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-2xl font-semibold mb-4">Customer Service</p>
          <p className="text-lg mb-2">For any inquiries or assistance regarding your orders, please contact our customer service team.</p>
          <p className="text-lg">Phone: 123-456-7890</p>
          <p className="text-lg">Email: info@example.com</p>
        </div>
        <div>
          <p className="text-2xl font-semibold mb-4">Business Inquiries</p>
          <p className="text-lg mb-2">For business partnership opportunities or other inquiries related to our food delivery services, please contact our business team.</p>
          <p className="text-lg">Phone: 987-654-3210</p>
          <p className="text-lg">Email: business@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
