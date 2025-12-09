import Link from "next/link";
import Image from "next/image";

import NavbarActions from "./navbar-actions";
import Container from "../wrappers/container";

export default function Navbar() {
  return (
    <nav className="bg-primary">
      <Container className="flex items-center gap-8 justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 text-xl font-semibold"
        >
          <Image
            src="/images/mandarin-logo.png"
            alt="Logo"
            width={50}
            height={50}
            priority
          />
          <p className="text-primary-foreground text-xl">Mandarin</p>
        </Link>

        <div className="hidden md:flex gap-8 text-primary-foreground font-normal items-center text-lg">
          <Link href="/about">Xidmət</Link>
          <Link href="/services">Resurslar</Link>
          <Link href="/contact">Haqqımızda</Link>
        </div>

        <NavbarActions />
      </Container>
    </nav>
  );
}
