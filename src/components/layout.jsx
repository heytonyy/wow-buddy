// components/Layout.js

import NavigationBar from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  )
}