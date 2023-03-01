import { NextPage } from "next/types"
import { ReactNode } from "react"
import Footer from "components/Footer"
import NavBar from "components/NavBar"


const Layout: NextPage = ({ children }: {children?: ReactNode}) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
export default Layout