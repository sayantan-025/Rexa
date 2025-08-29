"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../global/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { HoverBorderGradient } from "./hover-border-gradient";
import { motion } from "motion/react";

export function Header() {
  const navItems = [
    { name: "Tools", link: "/dashboard" },
    { name: "Insights", link: "/insights" },
    { name: "Pricing", link: "/pricing" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  // 👇 Scroll effect: hide text when scrolling down
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest <= 20); // only visible near top
  });

  return (
    <div className="sticky top-0 z-50 w-full transition-colors duration-300">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          {(visible: boolean) => (
            <>
              <NavbarLogo />
              <NavItems items={navItems} />

              <div className="flex items-center gap-4">
                <SignedOut>
                  <SignInButton>
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 1,
                      }}
                      className="relative z-10flex flex-wrap items-center justify-center gap-4"
                    >
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                      >
                        <span>Login</span>
                      </HoverBorderGradient>
                    </motion.div>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10",
                        userButtonPopoverCard: "shadow-xl",
                        userPreviewMainIdentifier: "font-semibold",
                      },
                    }}
                    afterSignOutUrl="/"
                  />
                </SignedIn>
              </div>
            </>
          )}
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />

            {/* 👇 Login/User button moved here */}
            <div className="flex items-center gap-3">
              <SignedOut>
                <SignInButton>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 1,
                    }}
                    className="relative z-10flex flex-wrap items-center justify-center gap-4"
                  >
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                      <span>Login</span>
                    </HoverBorderGradient>
                  </motion.div>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9",
                      userButtonPopoverCard:
                        "shadow-xl bg-neutral-900 text-white",
                      userPreviewMainIdentifier: "font-semibold text-white",
                    },
                  }}
                  afterSignOutUrl="/"
                  // ✅ close menu after user menu interaction
                  // Clerk does not expose `onClick`, so we wrap it
                  // We close when the avatar is clicked
                  userProfileMode="modal"
                  // we can use a container div to detect clicks
                />
              </SignedIn>

              {/* Mobile Menu Toggle */}
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {/* nav links */}
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)} // ✅ close when navigating
                className="relative text-neutral-600 dark:text-neutral-300 block py-2 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
