import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectData } from "@/util/data";
import Link from "next/link";

export default function Page() {
  return (
    <main className="text-white pt-28 md:px-8 px-3">
      <div className="grid md:grid-cols-2 md:gap-6">
        {
          ProjectData.map((project) => (
            <Link href={project.uri} target='_blank' key={project.id} className="text-[#6C6C6B]">
              <Card className='bg-[#181810] text-[#6C6C6B] my-3 hover:bg-[#2A2B27] transition-all duration-300'>
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
      </div>
    </main>
  );
}