import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import clsx from 'clsx'



const JournalEntryDetails = ({className}:{className?: string}) => {
  return (
    <Card className={clsx("w-full bg-slate-900/10 backdrop-blur-lg border border-white/20 shadow-xl",className)}>
      <CardHeader>
        <CardTitle  className="flex justify-between items-center">Create project <Badge variant={"secondary"} className="text-xs">12.11.2022</Badge></CardTitle>
        
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">

       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sunt excepturi asperiores voluptas beatae fugiat perspiciatis minima. Dolore temporibus blanditiis quia! Vel fuga, tempore odio quasi quaerat hic totam sequi.

       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sunt excepturi asperiores voluptas beatae fugiat perspiciatis minima. Dolore temporibus blanditiis quia! Vel fuga, tempore odio quasi quaerat hic totam sequi.

       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sunt excepturi asperiores voluptas beatae fugiat perspiciatis minima. Dolore temporibus blanditiis quia! Vel fuga, tempore odio quasi quaerat hic totam sequi.
        </p>
      </CardContent>
   
    </Card>
  )
}

export default JournalEntryDetails