'use client'; // Required for using hooks like useRouter and useState

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    // Web3Forms needs the access_key in the data
    formData.append("access_key", "660dea3e-835d-4eb0-acb4-ad8aa32765c9"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // This is the "App Router" magic!
        router.push('/contact/success');
      } else {
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Check your connection.");
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto p-10 md:p-20 font-sans leading-relaxed">
        <Link href="/" className="text-blue-600 hover:underline mb-8 block">← Back to Home</Link>
        
        <h1 className="text-4xl font-black mb-4 text-black font-sans">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {/* Contact Info Sidebar */}
          <section className="space-y-8">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-2">Email Support</h2>
              <p className="text-xl font-medium">support@dsn-nahal.work</p>
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-2">Business Address</h2>
              <p className="text-gray-700">
                Shopify Compliance Agent<br />
                [Your Real Address]<br />
                India
              </p>
            </div>
          </section>

          {/* The Interactive Form */}
          <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-1">Name</label>
                <input name="name" required type="text" className="w-full p-3 border border-gray-200 rounded-lg bg-white" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Email</label>
                <input name="email" required type="email" className="w-full p-3 border border-gray-200 rounded-lg bg-white" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Message</label>
                <textarea name="message" required className="w-full p-3 border border-gray-200 rounded-lg bg-white h-32"></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white font-bold py-4 rounded-lg transition-all ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}