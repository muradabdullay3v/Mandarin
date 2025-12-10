import Link from "next/link";
import Image from "next/image";

import NavbarActions from "./_components/navbar-actions";
import Container from "../wrappers/container";
import DropdownLinks from "../dropdown-links";
import { RESOURCES_LINKS, SERVICES_LINKS } from "./constants";

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
          <DropdownLinks title="Xidmət" links={SERVICES_LINKS}/>
          <DropdownLinks title="Resurslar" links={RESOURCES_LINKS}/>
          <Link href="/contact">Haqqımızda</Link>
        </div>

        <NavbarActions />
      </Container>
    </nav>
  );
}
