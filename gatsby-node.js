exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    query {
      allWinemagDataJson {
        nodes {
          id
        }
      }
    }
  `)

  const wineDataTemplate = require.resolve(
    "./src/templates/wineDataTemplate/wineDataPage.js"
  )

  data.allWinemagDataJson.nodes.forEach(node => {
    const id = node.id
    createPage({
      path: `/${id}`,
      component: wineDataTemplate,
      context: { id },
    })
  })
}
