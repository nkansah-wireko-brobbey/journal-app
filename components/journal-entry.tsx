import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge"


export function JournalEntry() {
  return (
    <Card className="w-full bg-blue-900/10 backdrop-blur-lg border border-white/20 shadow-xl">
      <CardHeader>
        <CardTitle  className="flex justify-between items-center">Create project <Badge variant={"secondary"} className="text-xs">12.11.2022</Badge></CardTitle>
        
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">

       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sunt excepturi asperiores voluptas beatae fugiat perspiciatis minima. Dolore temporibus blanditiis quia! Vel fuga, tempore odio quasi quaerat hic totam sequi.
        </p>
      </CardContent>
   
    </Card>
  )
}
