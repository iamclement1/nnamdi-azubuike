import { ArticlesData } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";
import { Button } from "../button";
import Image from "next/image";

const Articles = () => {
  return (
    <main className="text-[#6C6C6B] my-3">
      <h1>Recent Articles</h1>
      {ArticlesData.slice(0, 3).map((article) => (
        <Link href={article.uri} target="_blank" key={article.id}>
          <Card className="bg-[#181810] text-[#6C6C6B] my-3 hover:bg-[#2A2B27] transition-all duration-300">
            <div className="flex px-5 py-3 text-xs">
              <div className="flex gap-3">
                <div>{article.date}</div> -
                <div>{article.readTime} mins read</div>
              </div>
            </div>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardFooter>
              <Link href={article?.uri} className="underline text-sm">
                {article?.readMore}
              </Link>
            </CardFooter>
          </Card>
        </Link>
      ))}
      <Button className="my-4 underline bg-[#181810] text-[#D3BD44]">
        <Link href={"/articles"}>Find More Here</Link>
      </Button>
    </main>
  );
};

export default Articles;

export const HomeArticles = () => {
  return (
    <main>
      <section className="grid md:grid-cols-2">
        <div>
          {ArticlesData.slice(0, 1).map((article) => (
            <Link href={article.uri} key={article.id}>
              <Card className="bg-black text-[#6C6C6B] transition-all duration-300">
                <CardHeader>
                  <CardTitle>
                    {/* {article.title} */}
                    {article.image && (
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={1200}
                        height={300}
                        className="hover:scale-110 transition-all duration-300 overflow-hidden"
                      />
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[#6C6C6B] text-md my-2">
                  <div className="flex py-3 text-xs">
                    <div className="flex gap-3">
                      <div>{article.date}</div> -
                      <div>{article.readTime} mins read</div>
                    </div>
                  </div>
                  <h1 className="text-[#D3BD44] font-extrabold text-2xl">
                    {article.title}
                  </h1>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-[#B7B6B5] ">{article?.desc}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};
