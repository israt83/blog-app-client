import Image from "next/image"
import { CalendarDays, Clock, MessageCircle } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function BlogDetailsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <Card className="overflow-hidden">
        {/* Cover Image */}
        <div className="relative h-[350px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Blog Cover"
            fill
            className="object-cover"
          />
        </div>

        <CardContent className="space-y-6 pt-6">
          {/* Category */}
          <Badge>Web Development</Badge>

          {/* Title */}
          <h1 className="text-3xl font-bold leading-tight">
            How to Build Scalable Web Applications with Next.js
          </h1>

          {/* Author & Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/100" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground">
                John Doe
              </span>
            </div>

            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>Feb 15, 2026</span>
            </div>

            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
            </div>

            <div className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span>12 Comments</span>
            </div>
          </div>

          <Separator />

          {/* Blog Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              Next.js is a powerful React framework that enables you to build
              scalable and production-ready web applications with ease.
            </p>

            <h2>Why Choose Next.js?</h2>
            <p>
              It provides built-in features such as file-based routing,
              server-side rendering (SSR), static site generation (SSG), and
              API routes.
            </p>

            <h2>Performance Optimization</h2>
            <p>
              With automatic code splitting, image optimization, and edge
              rendering, Next.js ensures high performance out of the box.
            </p>

            <blockquote>
              “Performance is not an option — it’s a feature.”
            </blockquote>

            <p>
              By combining these features, developers can create scalable,
              maintainable, and high-performance applications.
            </p>
          </div>

          <Separator />

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button>Like</Button>
            <Button variant="outline">Share</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}