import type { Metadata } from "next";
import SideBarLayout from "@/components/sidebar"
import './globals.css'
import Provider from "@/components/provider"

export const metadata: Metadata = {
  title: "Coffee Bar",
  description: "Share && Drink ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body>
        <Provider> 
          <SideBarLayout />
              {children}
          </Provider>
        </body>
    </html>
  );
}
