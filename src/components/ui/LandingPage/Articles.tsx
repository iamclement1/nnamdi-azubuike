import { ArticlesData } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../card'
import { Button } from '../button'

const Articles = () => {
  return (
    <main className='text-[#6C6C6B] my-3'>
      <h1>Recent Articles</h1>
      {
        ArticlesData.map((article) => (
          <Link href={article.uri} target='_blank' key={article.id}>
            <Card className='bg-[#181810] text-[#6C6C6B] my-3 hover:bg-[#2A2B27] transition-all duration-300'>
              <div className="flex px-5 py-3 text-xs">
                <div className="flex gap-3">
                  <div>{article.date}</div> -
                  <div>{article.readTime} mins read</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardFooter>
                <Link href={article?.uri} className='underline text-sm'>{article?.readMore}</Link>
              </CardFooter>
            </Card>
          </Link>
        ))
      }
      <Button className='my-4 underline bg-[#181810] text-[#D3BD44]'>
        <Link href={'/articles'}>
          Find More Here
        </Link>
      </Button>
    </main>
  )
}

export default Articles