import React from "react";

const Footer = () => {
  return (
    <footer className="pt-10 pb-10 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-slate-500 dark:text-slate-400">
        © 2026 Jony Shagor. All rights reserved.
      </p>
      <div className="flex gap-6">
        {/* <a
          className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
          href="#"
        >
          <i className="ri-twitter-x-line text-xl"></i>
        </a> */}
        <a
          className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
          href="https://www.linkedin.com/in/jonyshagor703/"
          target="blank"
        >
          <i className="ri-linkedin-fill text-xl"></i>
        </a>
        <a
          className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
          href="https://github.com/hsagor703"
          target="blank"
        >
          <i className="ri-github-fill text-xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
