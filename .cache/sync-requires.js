const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/huytrinh/Desktop/projects/gatsby-wesbos/gatsby-wes/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/huytrinh/Desktop/projects/gatsby-wesbos/gatsby-wes/src/pages/404.js"))),
  "component---src-pages-beers-js": hot(preferDefault(require("/Users/huytrinh/Desktop/projects/gatsby-wesbos/gatsby-wes/src/pages/beers.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/huytrinh/Desktop/projects/gatsby-wesbos/gatsby-wes/src/pages/index.js"))),
  "component---src-pages-order-js": hot(preferDefault(require("/Users/huytrinh/Desktop/projects/gatsby-wesbos/gatsby-wes/src/pages/order.js"))),
  "component---src-pages-pizzas-js": hot(preferDefault(require("/Users/huytrinh/Desktop/projects/gatsby-wesbos/gatsby-wes/src/pages/pizzas.js"))),
  "component---src-pages-slicemasters-js": hot(preferDefault(require("/Users/huytrinh/Desktop/projects/gatsby-wesbos/gatsby-wes/src/pages/slicemasters.js")))
}

