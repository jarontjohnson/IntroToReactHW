import Cart from "./Cart"
import Nav from "./Nav"
import Cities from "./Cities"
import Message from "./Message"
import Like from "./Like"


const App = () => {
  const cities = [
    "los angeles",
    "san francisco",
    "san jose",
  ]

  const student = "Jay"

  return (
    <>
      <Cities myCities={cities} jay={student}/>
      <Nav/>
      <Cart/>
      <Message/>
      <Like/>
    </>
  )
}

export default App