import { Space_Grotesk, Plus_Jakarta_Sans, Fraunces } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const fontVariables = `${space.variable} ${jakarta.variable} ${fraunces.variable}`;
export { space, jakarta, fraunces };