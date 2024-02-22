import * as React from "react";
import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { fontSizeKeywords } from "./fontSizeKeywords";

const twMerge = extendTailwindMerge({
  // use the `extend` key in case you want to extend instead of override
  extend: {
    classGroups: {
      "font-size": [{ text: fontSizeKeywords }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[];
}
