import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-1">
          <Image src="/logo.png" alt="Gecko UI" width={24} height={24} />
          <span className="font-semibold">Gecko UI</span>
        </div>
      )
    },
    themeSwitch: {
      enabled: true,
      mode: "light-dark-system"
    },
    githubUrl: "https://github.com/geckoui/geckoui"
  };
}
