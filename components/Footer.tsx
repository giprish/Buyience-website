import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export default function Footer() {
  const columns = [
    {
      title: "Our Solutions",
      links: [
        { label: "B2B Storefront", href: "/solutions" },
        { label: "AI Quote Engine", href: "/ai-quote-engine" },
        { label: "CPQ Configurator", href: "/solutions" },
        { label: "Order Management", href: "/solutions" },
        { label: "Supplier Management", href: "/solutions" },
        { label: "Inventory Management", href: "/solutions" },
      ],
    },
    {
      title: "More Solutions",
      links: [
        { label: "Platform Overview", href: "/platform" },
        { label: "MACH Architecture", href: "/mach-architecture" },
        { label: "Digital Sales Room", href: "/solutions" },
        { label: "Wordpress Plugin", href: "/platform#wordpress" },
        { label: "Integrations", href: "/integrations" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "About", href: "#about" },
        { label: "Solutions", href: "/solutions" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact" },
        { label: "Become a Solution Partner", href: "/solutions" },
        { label: "Become a Technology Partner", href: "/become-a-technology-partner" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms and Conditions", href: "#terms" },
        { label: "Refund Policy", href: "#refund" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 text-xs sm:text-sm text-slate-500 font-medium">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 mb-16">
          {/* Brand Info Column */}
          <div className="lg:col-span-1 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/buyience.png"
                alt="Buyience"
                width={120}
                height={28}
                className="h-7 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-500 leading-relaxed text-xs max-w-[200px]">
              Next-generation B2B commerce. Built for speed, flexibility, and growth.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3.5 mt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-brand-purple transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-brand-purple transition-colors cursor-pointer"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col items-start gap-4">
              <h4 className="font-extrabold uppercase text-slate-800 tracking-wider text-xs">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-500 hover:text-brand-purple hover:underline transition-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-400">
          <div>© 2026 Buyience. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="#privacy" className="hover:text-brand-purple">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#terms" className="hover:text-brand-purple">
              Terms & Conditions
            </Link>
          </div>
          <div>Designed for modern commerce</div>
        </div>
      </Container>
    </footer>
  );
}
