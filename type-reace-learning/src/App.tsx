import Heading from "./component/Heading"
import Section from "./component/Section"
import Counter from "./component/Counter"
import { useState } from "react"
import List from "./component/List"

function App() {
  const [count,setCount] = useState<number>(1)
  return( 
  <>
    <Heading title={"Hello"}/>
    <Section title={"Different Title"}>This is my Section</Section>
    <Counter setCount={setCount}>Count is {count}</Counter>
    <List items={["☕ Coffee", "💻 Code"]} render={(item: string) => <span className="bold">{item}</span>}  />
  </>
  )
}

export default App;
