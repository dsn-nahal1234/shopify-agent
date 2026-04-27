import Link from 'next/link';

export default function Success() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-4xl font-black text-blue-600 mb-4">Message Sent! ✅</h1>
      <p className="text-gray-600 mb-8 text-lg">Thank you for reaching out. We will get back to you within 24 hours.</p>
      <Link href="/" className="bg-black text-white px-8 py-3 rounded-lg font-bold">
        Back to Homepage
      </Link>
    </div>
  );
}