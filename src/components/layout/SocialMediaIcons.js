"use client";

import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const WHATSAPP_PHONE = "+2348160874826";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}`;

export default function SocialMediaIcons() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const socials = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/company/lexora-africa",
      color: "hover:text-blue-400",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      onClick: () => setShowWhatsApp(true),
      color: "hover:text-green-400",
      isButton: true,
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/lexora.africa",
      color: "hover:text-pink-400",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      href: "https://youtube.com/@lexora-africa",
      color: "hover:text-red-400",
    },
  ];

  return (
    <>
      <div className="flex gap-6">
        {socials.map((social) => {
          const Icon = social.icon;

          if (social.isButton) {
            return (
              <button
                key={social.name}
                onClick={social.onClick}
                className={`text-paper/60 transition-colors duration-200 ${social.color}`}
                aria-label={social.name}
              >
                <Icon size={20} />
              </button>
            );
          }

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-paper/60 transition-colors duration-200 ${social.color}`}
              aria-label={social.name}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>

      {showWhatsApp && (
        <WhatsAppChat onClose={() => setShowWhatsApp(false)} />
      )}
    </>
  );
}

/* =========================
   WHATSAPP CONCIERGE POPUP
========================= */

function WhatsAppChat({ onClose }) {
  const quickReplies = [
    "I need legal consultation",
    "I need regulatory compliance support",
    "I need licensing & approvals assistance",
    "I have a corporate legal enquiry",
  ];

  const openWhatsApp = (text) => {
    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl">

      {/* HEADER */}
      <div className="flex items-center justify-between bg-green-600 px-6 py-4">
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-green-700 p-1">
            <Image
              src="/assets/LexoraLogoWhite.png"
              alt="Lexora"
              width={45}
              height={45}
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <p className="font-semibold text-white">
              Chat with Lexora
            </p>
            <p className="text-xs text-green-100">
              Secure WhatsApp consultation
            </p>
          </div>

        </div>

        <button
          onClick={onClose}
          className="text-white/80 hover:text-white"
        >
          ✕
        </button>
      </div>

      {/* BODY */}
      <div className="bg-gray-50 p-5">

        <p className="text-sm text-gray-600">
          Select an option below or start a direct conversation with our legal team.
        </p>

        <div className="mt-4 space-y-2">
          {quickReplies.map((item) => (
            <button
              key={item}
              onClick={() => openWhatsApp(item)}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm text-gray-700 transition hover:border-green-500 hover:bg-green-50"
            >
              {item}
            </button>
          ))}
        </div>

      </div>

      {/* INPUT AREA */}
      <div className="border-t border-gray-200 bg-white p-4">

        <button
          onClick={() =>
            openWhatsApp("Hello Lexora, I would like legal assistance.")
          }
          className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
        >
          <FaWhatsapp size={18} />
          Continue on WhatsApp
        </button>

        <p className="mt-2 text-center text-xs text-gray-500">
          Chat directly with {WHATSAPP_PHONE}
        </p>

      </div>

    </div>
  );
}