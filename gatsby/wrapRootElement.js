const React = require("react")
// const Layout = require("./src/components/layout").default
const { ThemeProvider } = require("styled-components")

exports.wrapRootElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <ThemeProvider {...props}>{element}</ThemeProvider>
}
