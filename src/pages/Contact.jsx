import { useState } from "react";

const Contact = () => {
  const EMAIL_ACCESS_KEY = import.meta.env.VITE_EMAIL_ACCESS_KEY;
  const URL_EMAIL_API = "https://api.web3forms.com/submit";
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", EMAIL_ACCESS_KEY);

    const response = await fetch(URL_EMAIL_API, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      e.target.reset();
    } else {
      console.error(data);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      className="min-h-screen px-4 py-14 md:py-20 
      bg-gradient-to-br dark:from-[#f5f5f5] dark:via-[#fff] dark:to-[#e99b63] 
      from-[#181818] via-[#232323] to-[#e99b63]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e99b63]">
            Contact Me
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for collaboration or opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-8 shadow-lg"
          >
            <input type="hidden" name="from_name" value="Portfolio Contact" />

            {/* NAME */}
            <div className="mb-6">
              <label className="block mb-2 text-white dark:text-[#232323]">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e99b63] text-white dark:text-[#232323]"
                placeholder="Enter your name"
              />
            </div>

            {/* EMAIL */}
            <div className="mb-6">
              <label className="block mb-2 text-white dark:text-[#232323]">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e99b63] text-white dark:text-[#232323]"
                placeholder="Enter your email"
              />
            </div>

            {/* SUBJECT */}
            <div className="mb-6">
              <label className="block mb-2 text-white dark:text-[#232323]">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e99b63] text-white dark:text-[#232323]"
                placeholder="Subject"
              />
            </div>

            {/* MESSAGE */}
            <div className="mb-8">
              <label className="block mb-2 text-white dark:text-[#232323]">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e99b63] resize-none text-white dark:text-[#232323]"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#e99b63] to-[#d88a57] text-white font-semibold rounded-lg hover:scale-[1.02] transition"
            >
              Send Message
            </button>

            {result && (
              <p className="mt-4 text-center text-sm text-gray-300 dark:text-gray-600">
                {result}
              </p>
            )}
          </form>

          {/* Contact Info Section */}
          <div>
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6 dark:text-[#232323] text-white">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#e99b63] flex items-center justify-center">
                    <i className="bx bx-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-[#232323] text-white">
                      Email
                    </h4>
                    <a
                      href="mailto:ilhamarifinhrp.work@gmail.com"
                      className="text-gray-400 dark:text-gray-600 hover:text-[#e99b63] transition-colors"
                    >
                      ilhamarifinhrp.work@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#e99b63] flex items-center justify-center">
                    <i className="bx bxl-github text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-[#232323] text-white">
                      GitHub
                    </h4>
                    <a
                      href="https://github.com/IlhamArifinnn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 dark:text-gray-600 hover:text-[#e99b63] transition-colors"
                    >
                      github.com/IlhamArifinnn
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#e99b63] flex items-center justify-center">
                    <i className="bx bxl-linkedin text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-[#232323] text-white">
                      LinkedIn
                    </h4>
                    <a
                      href="https://www.linkedin.com/in/ilhamarifinnn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 dark:text-gray-600 hover:text-[#e99b63] transition-colors"
                    >
                      linkedin.com/in/ilhamarifinnn
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#e99b63] flex items-center justify-center">
                    <i className="bx bx-download text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-[#232323] text-white">
                      Resume
                    </h4>
                    <a
                      href="/cv-IlhamArifin.pdf"
                      download
                      className="text-gray-400 dark:text-gray-600 hover:text-[#e99b63] transition-colors"
                    >
                      Download My CV
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700 dark:border-gray-300">
                <p className="text-gray-400 dark:text-gray-600 text-sm">
                  I typically respond within 24 hours. Looking forward to
                  connecting with you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
