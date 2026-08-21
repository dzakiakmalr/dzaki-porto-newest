import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";

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

export const fontVariables = `${space.variable} ${jakarta.variable}`;
export { space, jakarta };