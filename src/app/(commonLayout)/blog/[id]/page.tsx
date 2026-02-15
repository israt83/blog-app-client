

import Image from "next/image"
import { notFound } from "next/navigation"
import { CalendarDays, Eye } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { blogService } from "@/services/blog.service"
// import { BlogPost } from "@/types"

//** dynamic 404 page show
// export const dynamicParams = false
//**  satic generation
// export async function generateStaticParams(){
//   const {data} = await blogService.getBlogPosts()

//   return data.data.map((post: BlogPost) =>({id: post.id})).splice(0, 3)
// }

const BlogPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const {data} = await blogService.getBlogById(id);

  const formateDate = new Date(data.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  

  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <Card className="overflow-hidden shadow-md">
        {/* Thumbnail */}
        {data.thumbnail && (
          <div className="relative h-[350px] w-full">
            <Image
              src={data.thumbnail}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <CardContent className="space-y-6 pt-6">
          {/* Featured Badge */}
          <div className="flex flex-wrap gap-2">
            {data.isFeatured && <Badge>Featured</Badge>}
            <Badge variant="secondary">{data.status}</Badge>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold leading-tight">
            {data.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarFallback>
                  {data.authorId.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground">
                Author ID: {data.authorId}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>
                {new Date(data.createdAt).toDateString()}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{data.views} views</span>
            </div>
          </div>

          <Separator />

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag : string) => (
              <Badge key={tag} variant="outline">
                #{tag}
              </Badge>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>{data.content}</p>
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

export default BlogPage
// 'use client'
// import { useParams } from 'next/navigation'
// const {id} = useParams()


