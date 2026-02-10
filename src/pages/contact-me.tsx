import { useState } from 'react';
import { Button, Input, message } from "antd";

export function ContactMe() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit() {
    if (Date.now() - lastSubmitTime < 5000) {
      message.warning("Please wait a moment before submitting again");
      return;
    }
    
    if (!name.trim() || !contact.trim() || !userMessage.trim()) {
      message.warning("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      // api call
      setUserMessage('');
      setName('');
      setContact('');
      setLastSubmitTime(Date.now());
      message.success("Message sent successfully! I'll get back to you soon.");
    } catch (e: any) {
      switch (e.body?.statusCode) {
        case 409:
          message.info("Message already sent by this contact");
          break;
        default:
          message.error("Something went wrong, please try again later");
          break;
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  const contactMethods = [
    {
      name: "Email",
      value: "code.harshkanjariya@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&to=code.harshkanjariya@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-red-500 to-pink-500"
    },
    {
      name: "WhatsApp",
      value: "+91 7802004735",
      href: "https://wa.me/+917802004735",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-6 sm:py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Methods */}
          <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Contact Information</h2>
              <div className="space-y-3 sm:space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-300 hover:shadow-md border border-gray-200 hover:border-transparent"
                  >
                    <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${method.color} text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">{method.name}</p>
                      <p className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors truncate">
                        {method.value}
                      </p>
                    </div>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Connect With Me</h3>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="https://github.com/harshkanjariya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-lg bg-gray-100 hover:bg-gray-800 hover:text-white transition-all duration-300 group flex-shrink-0"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/harsh-kanjariya-276693176"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-300 group flex-shrink-0"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 border border-gray-100 order-1 md:order-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Send a Message</h2>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  value={name}
                  size="large"
                  placeholder="Your name"
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Email or Phone <span className="text-red-500">*</span>
                </label>
                <Input
                  value={contact}
                  size="large"
                  placeholder="your.email@example.com"
                  onChange={(e) => setContact(e.target.value)}
                  className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={userMessage}
                  className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all duration-200"
                  rows={5}
                  placeholder="Tell me about your project..."
                  onChange={(e) => setUserMessage(e.target.value)}
                />
              </div>
              
              <Button
                type="primary"
                size="large"
                onClick={submit}
                loading={isSubmitting}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 border-none hover:from-blue-700 hover:to-purple-700 h-11 sm:h-12 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center px-2">
          <p className="text-xs sm:text-sm md:text-base text-gray-600">
            I typically respond within 24-48 hours. For urgent matters, please reach out via WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
