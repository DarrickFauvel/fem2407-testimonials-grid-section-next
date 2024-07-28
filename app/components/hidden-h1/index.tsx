import { ReactNode } from "react"

type HiddenH1Props = {
  children: ReactNode
}

const HiddenH1 = ({ children }: HiddenH1Props) => {
  return <h1 className="sr-only">{children}</h1>
}
export default HiddenH1
