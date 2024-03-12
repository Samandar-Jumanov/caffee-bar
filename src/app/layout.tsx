import type { Metadata } from "next";
import SideBarLayout from "@/components/sidebar"
import './globals.css'
import Provider from "@/components/provider"
import { GlobalContextProvider } from "@/components/context";


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
            <GlobalContextProvider > 
               <SideBarLayout />
                 {children}
             </GlobalContextProvider>
          </Provider>
        </body>
    </html>
  );
};



