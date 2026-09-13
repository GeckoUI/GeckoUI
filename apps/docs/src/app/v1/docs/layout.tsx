import { baseOptions } from "@/lib/layout.shared";
import { sourceV1 } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";

import { VersionSelect } from "@/components/version-select";

export default function Layout({ children }: LayoutProps<"/v1/docs">) {
  return (
    <DocsLayout tree={sourceV1.pageTree} sidebar={{ banner: <VersionSelect /> }} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
