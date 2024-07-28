import Attribution from "./components/attribution"
import Card from "./components/card"
import HiddenH1 from "./components/hidden-h1"

import data from "@/assets/data"

export default function Home() {
  const cardList = data.map((item) => <Card item={item} key={item.name} />)

  return (
    <main className="relative flex flex-col md:justify-center items-center min-h-screen bg-fem-white-smoke p-6">
      <HiddenH1>Testimonials grid section</HiddenH1>
      <ul className="card-list grid gap-x-[30px] gap-y-6 max-w-[69.375rem] xl:max-h-[572px]">
        {cardList}
      </ul>
      <Attribution />
    </main>
  )
}
