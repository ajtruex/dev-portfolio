import "./globals.css"
import { Inter } from "next/font/google"
import NavigationMenuDemo from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Andrew Truex",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationMenuDemo />
        {children}
      </body>
    </html>
  )
}
