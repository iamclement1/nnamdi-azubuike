import { ProjectData } from '@/util/data'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../card'
import { Button } from '../button'

const FeatureProject = () => {
  return (
    <div className='text-[#6C6C6B]'>
      <h1>Featured Projects</h1>
      {
        ProjectData.map((project) => (
          <Link key={project.id} href={project.uri} className="text-[#6C6C6B]">
            <Card className='bg-[#181810] text-[#6C6C6B] my-3'>
              <CardHeader>
                <CardTitle>{project?.name}</CardTitle>
              </CardHeader>
              <CardContent className='text-[#6C6C6B] text-md my-2'>
                <p>{project?.desc}</p>
              </CardContent>
              <CardFooter>
                <Link href={project?.uri} className='underline text-sm'>{project?.action}</Link>
              </CardFooter>
            </Card>
          </Link>
        ))
      }
      <Button className='my-4 underline bg-[#181810] text-[#6C6C6B]'>
        <Link href={'/projects'}>
          View More Projects
        </Link>
      </Button>
    </div>
  )
}

export default FeatureProject