// ...existing code...
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
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function Header() {
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
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
                <SignedIn>
                  <Link href="/dashboard">
                    {/* Render as span to avoid nested <a> when Link creates an anchor */}
                    <NavbarButton
                      as="span"
                      variant="gradient"
                      className="hidden md:inline-flex items-center gap-2 font-semibold"
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      {/* 👇 Hide text when navbar is scrolled */}
                      {!visible && <span>Industry Insights</span>}
                    </NavbarButton>
                  </Link>

                  {/* Growth Tools Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <NavbarButton
                        variant="primary"
                        className="flex items-center gap-2 font-semibold"
                      >
                        <StarsIcon className="h-4 w-4" />
                        {/* 👇 Hide text when navbar is scrolled */}
                        {!visible && (
                          <span className="hidden md:block">Growth Tools</span>
                        )}
                        <ChevronDown className="h-4 w-4" />
                      </NavbarButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem asChild>
                        <Link
                          href="/resume"
                          className="flex items-center gap-2"
                        >
                          <FileText className="h-4 w-4" />
                          Build Resume
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/ai-cover-letter"
                          className="flex items-center gap-2"
                        >
                          <PenBox className="h-4 w-4" />
                          Cover Letter
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/interview"
                          className="flex items-center gap-2"
                        >
                          <GraduationCap className="h-4 w-4" />
                          Interview Prep
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SignedIn>

                <SignedOut>
                  <SignInButton>
                    <NavbarButton variant="primary">Sign In</NavbarButton>
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
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
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
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 block py-2 font-medium"
              >
                {item.name}
              </Link>
            ))}

            <SignedIn>
              <div className="flex items-center justify-center gap-4 py-3">
                {/* Dashboard Icon Button */}
                <Link
                  href="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {/* render span to avoid nested anchors */}
                  <NavbarButton
                    as="span"
                    variant="gradient"
                    className="h-12 w-12 flex items-center justify-center rounded-full shadow-md"
                  >
                    <LayoutDashboard className="h-5 w-5" />
                  </NavbarButton>
                </Link>

                {/* Growth Tools Icon Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <NavbarButton
                      variant="primary"
                      className="h-12 w-12 flex items-center justify-center rounded-full shadow-md"
                    >
                      <StarsIcon className="h-5 w-5" />
                    </NavbarButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="rounded-xl p-2 shadow-lg bg-popover"
                  >
                    <DropdownMenuItem asChild>
                      <Link
                        href="/resume"
                        className="flex items-center gap-2 px-2 py-1"
                      >
                        <FileText className="h-4 w-4" /> Resume
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/ai-cover-letter"
                        className="flex items-center gap-2 px-2 py-1"
                      >
                        <PenBox className="h-4 w-4" /> Cover Letter
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/interview"
                        className="flex items-center gap-2 px-2 py-1"
                      >
                        <GraduationCap className="h-4 w-4" /> Interview
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* User Profile (mobile nav) */}
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors shadow-md">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-full h-full rounded-full",
                        userButtonPopoverCard:
                          "shadow-xl bg-neutral-900 text-white",
                        userPreviewMainIdentifier: "font-semibold text-white",
                      },
                    }}
                    afterSignOutUrl="/"
                  />
                </div>
              </div>
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <NavbarButton
                  variant="primary"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </NavbarButton>
              </SignInButton>
            </SignedOut>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
