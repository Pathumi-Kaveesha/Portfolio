import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageSquare,
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email" });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials
      const serviceId = "service_j975xfg";
      const templateId = "template_vy4cdlj";
      const publicKey = "Ec1KyS4APwKXr2M0T";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: PERSONAL_INFO.name,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-gradient-to-br from-[#1a1512] via-[#0a0806] to-[#1a1512] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E5D3C5]/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "700ms" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A882]/10 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "1000ms" }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,211,197,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(229,211,197,.04)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] animate-pulse" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,211,197,0.08),transparent_50%)] animate-pulse" />

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0806] via-[#0a0806]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 relative group cursor-pointer mb-6">
              <div className="absolute inset-0 bg-[#E5D3C5]/20 rounded-full blur-xl transition-all duration-500" />
              <div className="relative flex items-center gap-2 bg-gradient-to-r from-[#E5D3C5]/10 via-[#D4A574]/10 to-[#C9A882]/10 border border-[#E5D3C5]/30 rounded-full px-3 py-1.5 backdrop-blur-md">
                <MessageSquare className="w-4 h-4 text-[#E5D3C5]" />
                <span className="text-xs text-white font-semibold uppercase tracking-wider">
                  Get In Touch
                </span>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas
              to life.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn delay={100}>
            <div className="bg-white/5 border border-[#E5D3C5]/20 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/5 border border-[#E5D3C5]/20 rounded-xl text-white focus:border-[#E5D3C5]/50 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/5 border border-[#E5D3C5]/20 rounded-xl text-white focus:border-[#E5D3C5]/50 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/5 border border-[#E5D3C5]/20 rounded-xl text-white resize-none focus:border-[#E5D3C5]/50 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-500"
                    rows={5}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#E5D3C5] to-[#D4A574] text-black font-semibold rounded-xl flex items-center justify-center gap-2 group hover:from-[#D4A574] hover:to-[#C9A882] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-[#E5D3C5] disabled:hover:to-[#D4A574]"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send
                    className={`w-5 h-5 ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-1 transition-transform"}`}
                  />
                </button>

                {status.message && (
                  <div
                    className={`p-4 rounded-xl ${
                      status.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Let's Connect
                </h3>
              </div>

              <div className="space-y-4">
                <div className="group relative bg-white/5 border border-[#E5D3C5]/20 rounded-2xl p-6 hover:border-[#E5D3C5]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#E5D3C5]" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-white hover:text-[#E5D3C5] transition-colors font-medium"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white/5 border border-[#E5D3C5]/20 rounded-2xl p-6 hover:border-[#E5D3C5]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#E5D3C5]" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">Location</p>
                      <p className="text-white font-medium">
                        {PERSONAL_INFO.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {Object.entries(SOCIAL_LINKS)
                    .slice(0, 3)
                    .map(([platform, url]) => {
                      const Icon =
                        socialIcons[platform as keyof typeof socialIcons];

                      return Icon ? (
                        <a
                          href={url}
                          key={platform}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white/5 rounded-xl border border-[#E5D3C5]/20 hover:border-[#E5D3C5]/50 hover:bg-white/10 transition-all duration-300 group"
                        >
                          <Icon className="w-6 h-6 text-gray-400 group-hover:text-[#E5D3C5] transition-colors" />
                        </a>
                      ) : null;
                    })}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0806] via-[#0a0806]/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Contact;
