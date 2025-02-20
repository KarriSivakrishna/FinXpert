import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { ClerkProvider } from "@clerk/nextjs";


const inter=Inter({subsets:["latin"]});

export const metadata = {
  title: "FinXpert",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  console.log("Clerk publishable key:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  return (
   <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/*header*/}
        <Header/>
        <main className="min-h-screen">{children}</main>
        {/*footer*/}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with ❤️ by SivaKrishna</p>
          </div>
        </footer>
      </body>
    </html>
   </ClerkProvider>
  );
}
