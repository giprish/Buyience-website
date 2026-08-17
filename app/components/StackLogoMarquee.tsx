"use client";

import Image from "next/image";
import { stackLogos } from "./stack-logos";

function LogoSequence({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul className="stack-logo-marquee__sequence" aria-hidden={ariaHidden || undefined}>
      {stackLogos.map((item) => (
        <li key={item.name} className="stack-logo-marquee__item" title={item.name}>
          <span className="stack-logo-marquee__tile" aria-label={ariaHidden ? undefined : item.name}>
            <Image
              src={item.logo}
              alt={ariaHidden ? "" : item.name}
              width={40}
              height={40}
              className="stack-logo-marquee__logo"
              unoptimized
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

const MARQUEE_COPIES = 4;

export default function StackLogoMarquee() {
  return (
    <div className="stack-logo-marquee" aria-label="Integrations">
      <div className="stack-logo-marquee__track">
        {Array.from({ length: MARQUEE_COPIES }, (_, index) => (
          <LogoSequence key={index} ariaHidden={index > 0} />
        ))}
      </div>
    </div>
  );
}
