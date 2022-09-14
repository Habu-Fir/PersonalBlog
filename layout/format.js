import Header from "../components/headers"
import Footer from "../components/footer"
import Head from "next/head"


const Format = ({children}) => {
  return (
<>
<Head> 
  <title>My personal blog</title>
</Head>
<Header></Header>
<main>{children}</main>
<Footer></Footer>
</>
  )
}

export default Format