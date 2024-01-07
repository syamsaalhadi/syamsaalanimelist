import { getAnimeResponse } from "@/libs/api-libs"
import Animelist from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async ({params}) => {
  const {keyword} = params
  
  const decodedKeyword = decodeURI(keyword)

  const searchAnime = await getAnimeResponse("anime", `q="${decodedKeyword}`)
  
  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${decodedKeyword}...`}  />
        <Animelist api={searchAnime}/>
      </section>
    </>
  )
}

export default Page
