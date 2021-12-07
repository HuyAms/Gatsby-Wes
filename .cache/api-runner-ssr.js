var plugins = [{
      plugin: require('/Users/huytrinh/Desktop/projects/gatsby-wesbos/gatsby-wes/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/huytrinh/Desktop/projects/gatsby-wesbos/gatsby-wes/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"bv1nmzjf","dataset":"production","watchMode":true,"token":"sk9g2XmI8WxX4kuoEP4wpAbAIfCtNy3crnpO1WH6R5ZYFCgDhD22nlPA0iIZyGzxKTLCEt4qEGPZdijaTzYCSbKCasFH2r7P6znGuK8n4hgDWXt703Cp5Wb7QigksIfuZ5YLdwcbSqvbJqoKpBpfwIUezNy82jYjdl4BObhJ3212DY7T5D8g"},
    },{
      plugin: require('/Users/huytrinh/Desktop/projects/gatsby-wesbos/gatsby-wes/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
