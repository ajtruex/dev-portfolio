"use client"
import React, { useState } from "react"
import { useRouter } from "next/router"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const [email, setEmail] = useState("")
  // const saveToDatabase = async (item) => {
  //   const res = await fetch("api/data", {
  //     method: "POST",
  //     body: JSON.stringify(item),
  //   })
  //   const data = await res.json()
  // }
  const submitData = async (e) => {
    try {
      const body = { email }
      await fetch(`/api/data`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      router.push("/")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="w-full py-12 ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-gray-700">
                Revolutionize Your Email Experience
              </h1>
              <p className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-800 mx-auto">
                Join us and take control of your inbox. Fast, secure, and
                designed for modern life.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <form className="flex space-x-2" onSubmit={submitData}>
                <Input
                  className="max-w-lg flex-1 bg-gray-800 text-white border-gray-900"
                  placeholder="Enter your email"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      submitData()
                    }
                  }}
                  value={email}
                />
                <Button
                  className="bg-white text-black"
                  onClick={() => submitData()}
                  type="submit"
                >
                  Join Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
