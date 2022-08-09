import HorizontalLayout from './Horizontal'
import VerticalLayout from './Vertical'

const Layout = ({ children }) => {
  return (
    <>
      <HorizontalLayout />
      {children}
      <VerticalLayout />
    </>
  )
}

export default Layout
