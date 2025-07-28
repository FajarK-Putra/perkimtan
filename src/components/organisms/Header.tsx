"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../atoms/Logo";
import NavLink from "../molecules/NavLink";
import Icon from "../atoms/Icon";

const navigationItems = [
  { href: "/", label: "Beranda", isActive: true },
  { href: "/profil", label: "Profil" },
  { href: "/bidang", label: "Bidang" },
  { href: "/layanan", label: "Layanan" },
  { href: "/berita", label: "Berita" },
  { href: "/kontak", label: "Kontak" }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#003366] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Icon name="phone" size="sm" className="mr-1" />
              (0751) 7051234
            </span>
            <span className="flex items-center">
              <Icon name="email" size="sm" className="mr-1" />
              info@perkimtan.sumbarprov.go.id
            </span>
          </div>
          <div className="hidden md:block">
            <span>Provinsi Sumatera Barat</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Logo size="lg" />
            <Image
              src="/app/assets/img/logo-sumbar-new.png"
              alt="Logo Sumbar"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="font-bold text-[#003366] text-lg leading-tight">
                Dinas Perumahan, Kawasan Permukiman<br />
                dan Pertanahan
              </h1>
              <p className="text-sm text-gray-600">Provinsi Sumatera Barat</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <NavLink 
                key={item.href} 
                href={item.href} 
                isActive={item.isActive}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "close" : "menu"} size="md" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto">
            {navigationItems.map((item) => (
              <NavLink 
                key={item.href} 
                href={item.href} 
                variant="mobile"
                isActive={item.isActive}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}