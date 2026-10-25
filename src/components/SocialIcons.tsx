"use client";

import {
  SiApplemusic,
  SiBandcamp,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiSpotify,
  SiSubstack,
  SiTiktok,
  SiX,
  SiYoutube,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { socials } from "@/data/content";

export const socialLinks = [
  { label: "Instagram", href: socials.instagram, Icon: SiInstagram },
  { label: "Spotify", href: socials.spotify, Icon: SiSpotify },
  { label: "YouTube", href: socials.youtube, Icon: SiYoutube },
  { label: "X", href: socials.x, Icon: SiX },
  { label: "TikTok", href: socials.tiktok, Icon: SiTiktok },
  { label: "Apple Music", href: socials.appleMusic, Icon: SiApplemusic },
  { label: "Bandcamp", href: socials.bandcamp, Icon: SiBandcamp },
  { label: "Facebook", href: socials.facebook, Icon: SiFacebook },
  { label: "Substack", href: socials.substack, Icon: SiSubstack },
  { label: "LinkedIn", href: socials.linkedin, Icon: FaLinkedinIn },
  { label: "GitHub", href: socials.github, Icon: SiGithub },
];

export function SocialIcons({
  size = "text-lg",
  className = "",
  itemClassName = "opacity-70 hover:opacity-100",
}: {
  size?: string;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-4 ${className}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`${size} transition-opacity ${itemClassName}`}
        >
          <Icon aria-hidden />
        </a>
      ))}
    </div>
  );
}
