import { PortfolioData } from "@/util/data";
import Link from "next/link";


export default function Home() {
  return (
    <main className="grid md:grid-cols-2 bg-black md:p-36 md:gap-12">
      <div className="md:overflow-y-hidden">
        <p className=" text-[#D3BD44] font-extrabold text-[50px] leading-none ">
          Hi, I&apos;m Nnamdi.
        </p>
        <div className="flex gap-5 text-sm text-gray-400 my-3">
          <p className="underline">Software Engineer</p>
          <p className="underline">Community Preacher</p>
          <p className="underline">Writer</p>
        </div>
        <p className="my-8 text-gray-400">
          I&apos;m a proficient and forward-thinking software engineer, specializing in pioneering innovative products and solutions, particularly within the frontend ecosystem.
        </p>
        <p className="my-8 text-gray-400">
          In addition to my technical expertise, I devote time to documenting my learning journey by researching and crafting articles on frontend technologies. You can find my insights shared on platforms such as Hashnode, as well as my experiences on Medium.
        </p>
        <div>
          <div className="flex gap-6 text-gray-400">
            {PortfolioData.map((portfolio) => (
              <div key={portfolio.id} className="">
                <Link href={portfolio.uri} target="_blank" rel="noopener noreferrer" className="underline">
                  {portfolio.name}
                </Link>
              </div>
            ))}

          </div>
        </div>
      </div>
      <div className="h-screen md:overflow-y-auto text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, deleniti minus. Error sunt, perspiciatis molestias nesciunt vero blanditiis illo, ullam ab natus velit sint ut in? Incidunt doloribus ullam hic excepturi consectetur tempore tenetur, animi iusto quos soluta ex recusandae deserunt ab earum eveniet natus ipsum quia tempora velit quod. Debitis ullam autem ex, neque natus earum perspiciatis id. Ut voluptatum ullam fugiat nostrum, repellendus vitae, perferendis, voluptates omnis error nobis consequatur corrupti quod neque numquam suscipit quia at molestiae alias et blanditiis consectetur maiores deserunt reiciendis eaque. Molestiae minima eligendi sapiente fuga dolores explicabo hic laborum quidem, ad laboriosam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo distinctio debitis earum porro quas. Earum expedita quibusdam, unde molestias error impedit sit rerum deleniti voluptate qui facere placeat officia laboriosam soluta consequuntur! Veritatis qui molestias possimus nulla eaque saepe neque exercitationem harum, dolorem sapiente molestiae magnam tenetur sit totam doloremque ut quos aut non in deserunt iste itaque. Voluptatibus cupiditate blanditiis officiis, tempore minima perspiciatis eum dolor beatae, non tenetur omnis iusto soluta cumque corporis odio eaque libero. Laboriosam corporis repellendus illo quidem architecto ipsum accusamus esse, quae reprehenderit culpa rerum quas hic reiciendis, illum aspernatur non odit nemo accusantium fuga eum consequuntur voluptate labore maiores! Minus molestiae cupiditate nihil odio ad, animi amet porro illo nobis maiores exercitationem deleniti est nulla officia aspernatur. Reprehenderit laudantium commodi quaerat ipsam, consequatur impedit aliquam porro beatae magni voluptatem. Pariatur atque, ducimus ullam aspernatur, voluptatibus dolore velit modi blanditiis aut, laborum quidem unde quia! Alias, cum sapiente quidem aliquid voluptatibus facilis eius optio sequi, inventore quia magnam ducimus minima labore ullam aperiam quas dolorum expedita facere totam harum maxime omnis unde id ipsam! Totam, quod, facilis libero odio repudiandae maiores enim repellendus vero nam assumenda sunt minima neque nesciunt iste facere non voluptatibus corrupti hic eligendi soluta numquam sint mollitia qui. Numquam amet, iusto consectetur ad corporis quas quaerat recusandae ipsa. Assumenda consectetur est dolor soluta illo explicabo quae. Labore, eveniet. Nobis veritatis, laudantium eos in dolore ducimus vero quam ut fugiat possimus temporibus porro architecto quasi sunt, ipsam distinctio dolores rerum quis sequi hic voluptatem iusto soluta. Cumque veniam, quisquam reprehenderit harum molestiae aut tempora ratione velit qui sapiente nemo atque ducimus vel tempore saepe culpa error quibusdam. Corporis exercitationem dolorum eaque repellendus odit, quia iusto est odio consectetur vitae soluta illo magnam rem facere pariatur eos at nobis nulla maxime magni! Dolorem consectetur enim doloremque aperiam! Tenetur iusto, corporis perspiciatis nam, neque assumenda beatae aspernatur natus error nihil non. Autem reiciendis, laborum facilis atque ea ut, dolores nihil perferendis impedit, recusandae nemo iusto dicta? Doloribus officiis incidunt cupiditate qui pariatur veniam doloremque unde, voluptatem quas obcaecati aliquid voluptate sed laudantium eius quibusdam molestiae. Doloribus nemo quod numquam temporibus delectus nisi, accusamus vel. Quam, quos dolorem ipsam voluptatem odio maxime illo odit aut esse dicta vero. Tempora facilis dignissimos ab placeat, molestias quas ipsam? Repudiandae nisi, corporis cum et laudantium rerum nemo placeat laborum! Et voluptatibus quam ducimus suscipit nulla accusamus dolores?

        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero amet neque repudiandae sequi eos maxime beatae earum odit? Et quas nulla itaque eaque cum assumenda magni eligendi veniam pariatur vitae ipsa repudiandae eveniet ea, earum voluptate temporibus illo accusantium commodi, molestiae, rerum dolorum deleniti nesciunt debitis. Ad adipisci laborum ipsum quasi quod placeat alias vero maxime dicta quaerat quidem corrupti, veritatis debitis optio provident. Error repellendus quidem beatae cum laudantium, sint illo alias unde ipsa quibusdam. Consectetur eum quasi nisi dolore, ab ipsum, minima, quidem vel cum quaerat ex nulla hic suscipit distinctio ducimus ullam fuga vero delectus modi tempore rem recusandae odit! Eius culpa vero libero, natus obcaecati facilis dolores, ab ipsa vel ut quis molestias cupiditate adipisci ducimus nam. Architecto, debitis a quae distinctio nihil cumque at, ipsum enim ex quasi praesentium dicta nisi laboriosam quisquam libero assumenda quas eos corporis labore eaque eligendi. Excepturi unde vero architecto. Deleniti quis sed sapiente accusamus quas repellat qui magni eos optio non accusantium fugit quibusdam eligendi autem possimus delectus ab doloribus expedita similique, saepe dolores nostrum! Praesentium molestiae nihil blanditiis reprehenderit hic voluptatem, nisi facere fugit eligendi voluptas distinctio, dignissimos tenetur deserunt nesciunt officia delectus aperiam quia quisquam eius laborum.
      </div>
    </main>
  );
}
