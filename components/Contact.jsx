"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [email, setEmail] = useState("")
  // const [name, setName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const name = `${firstName} ${lastName}`

  const router = useRouter()

  const submitData = async (e) => {
    try {
      const body = { name, email }
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
    <div className="flex items-center justify-center h-screen">
      <Card className="border-black border-2">
        <CardContent>
          <div className="space-y-8 border-black">
            <div className="space-y-2 mt-4">
              <h2 className="text-3xl font-semibold">Contact Us</h2>
              <p className="text-zinc-500 dark:text-zinc-400">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible. possible.
              </p>
            </div>
            <form className="space-y-4" onSubmit={submitData}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    placeholder="Enter your first name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    placeholder="Enter your last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
              <Button
                className="bg-gray-800 text-white"
                type="submit"
                onClick={submitData}
              >
                Send message
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
