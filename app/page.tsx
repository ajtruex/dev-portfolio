import Image from "next/image"
import Toolbar from "@/components/Toolbar"
import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Popover from "@/components/Popover"

export default function Home() {
  return (
    <div>
      <h1>Next.js + TypeScript + Tailwind CSS</h1>
      <Toolbar />
      <Contact />
      <Hero />
      <Popover />
    </div>
  )
}
