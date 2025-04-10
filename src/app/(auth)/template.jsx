"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forgot Password",
    href: "/forgot-password",
  },
];

const AuthLayout = ({ children }) => {
  const pathname = usePathname();
  const [ip, setIp] = useState("");
  return (
    <div>
      <input
        value={ip}
        onChange={(e) => {
          setIp(e.target.value);
        }}
      />
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            href={link.href}
            key={link.href}
            style={{ color: isActive ? "red" : "blue" }}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
};
export default AuthLayout;
