import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "paragraph",
    type: "registry:ui",
    registryDependencies: [],
    files: [
      {
        path: "./ui/paragraph.tsx",
        type: "registry:ui",
      },
    ],
  },
];
