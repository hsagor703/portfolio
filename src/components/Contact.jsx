import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone } from "lucide-react";
import Swal from "sweetalert2";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    // return
    const response = await fetch("https://formspree.io/f/xzdznzkk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      Swal.fire({
        title: "Submitted Successfully",
        icon: "success",
        draggable: true,
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      Swal.fire({
        title: "Submitted Fail !!!",
        icon: "error",
        draggable: true,
      });
    }
  };

  return (
    <section className="scroll-mt-32" id="connect">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-white dark:bg-[#1A1A35] border border-slate-200 dark:border-white/10 rounded-full px-4 py-2 shadow-sm mb-6">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                📬 Let's Talk
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-900 dark:text-white mb-6">
              Let's Connect & <br />
              <span className="text-primary">Collaborate</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Have a project in mind or want to discuss a potential partnership?
              I'm always open to new opportunities and challenges. Fill out the
              form or reach out directly.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                <i className="ri-mail-send-line text-2xl"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Email Address
                </p>
                <a className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">
                  hsagor703@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                <Phone />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Phone
                </p>
                <a className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">
                  +8801560012582
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <a
                href="https://github.com/hsagor703"
                target="blank"
                className="w-14 h-14 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm"
              >
                <i className="ri-github-fill text-2xl"></i>
              </a>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Follow on GitHub
                </p>
                <a
                  className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary transition-colors"
                  href="https://github.com/hsagor703"
                  target="blank"
                >
                  @hsagor703
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <a
                href="https://www.linkedin.com/in/jonyshagor703/"
                target="blank"
                className="w-14 h-14 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm"
              >
                <i className="ri-linkedin-fill text-2xl"></i>
              </a>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Connect on LinkedIn
                </p>
                <a
                  className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary transition-colors"
                  href="https://www.linkedin.com/in/jonyshagor703/"
                  target="blank"
                >
                  Jony Shagor
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-black/20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

          <form
            action="https://formspree.io/f/xzdznzkk"
            method="POST"
            className="space-y-5 relative z-10"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <Input
                  className="w-full rounded-xl bg-slate-50 dark:bg-[#0B0B1E] border-slate-200 dark:border-white/10 focus:border-primary focus:ring-primary dark:text-white px-4 py-3 outline-none transition-all placeholder:text-slate-400"
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  className="w-full rounded-xl bg-slate-50 dark:bg-[#0B0B1E] border-slate-200 dark:border-white/10 focus:border-primary focus:ring-primary dark:text-white px-4 py-3 outline-none transition-all placeholder:text-slate-400"
                  id="email"
                  placeholder="john@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1"
                htmlFor="subject"
              >
                Subject
              </label>
              <Input
                className="w-full rounded-xl bg-slate-50 dark:bg-[#0B0B1E] border-slate-200 dark:border-white/10 focus:border-primary focus:ring-primary dark:text-white px-4 py-3 outline-none transition-all placeholder:text-slate-400"
                id="subject"
                placeholder="Project Inquiry"
                type="text"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1"
                htmlFor="message"
              >
                Message
              </label>
              <Textarea
                className="w-full rounded-xl bg-slate-50 dark:bg-[#0B0B1E] border-slate-200 dark:border-white/10 focus:border-primary focus:ring-primary dark:text-white px-4 py-3 outline-none transition-all placeholder:text-slate-400 resize-none"
                id="message"
                placeholder="Tell me about your project..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button
              className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-1"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
