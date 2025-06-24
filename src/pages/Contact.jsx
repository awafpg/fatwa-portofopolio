import React, { useState } from "react";
import NavBar from "../components/NavBar";

export default function ContactPage() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const emailReceiver = "awafpg@gmail.com";
    const mailtoLink = `mailto:${emailReceiver}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    const a = document.createElement("a");
    a.href = mailtoLink;
    a.target = "_blank";
    a.click();

    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen font-sans">
      {/* NAVBAR */}
      <NavBar />

      {/* Contact Form */}
      <section className="flex flex-col items-center justify-center px-4 py-10">
        <div className="mb-8">
          <img src="/Logo.jpg" alt="logo" className="h-20" />
        </div>
        <div className="w-full max-w-lg bg-white p-8 rounded shadow-md">
          <form onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="subject" className="block font-semibold mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Masukan Subject"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Masukan Pesan"
                className="w-full p-2 border rounded h-32"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-[#eb374e] text-white px-6 py-2 rounded hover:bg-[#d10621]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
