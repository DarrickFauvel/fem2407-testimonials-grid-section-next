import Card from "./components/card"
import HiddenH1 from "./components/hidden-h1"

import data from "@/assets/data"

export default function Home() {
  const cardList = data.map((item) => <Card item={item} key={item.name} />)

  return (
    <main className="flex flex-col min-h-screen bg-fem-white-smoke p-6">
      <HiddenH1>Testimonials grid section</HiddenH1>
      <ul className="card-list grid gap-6">{cardList}</ul>
    </main>
  )
}
