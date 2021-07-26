import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import MyLink from "../components/MyLinks/MyLink"

export const query = graphql`
  query {
    allWinemagDataJson {
      nodes {
        title
        description
        winery
        id
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const wineList = data.allWinemagDataJson.nodes
  console.log(wineList)

  return (
    <Layout>
      <Seo title="List of Winery" />
      <div className="list-title">
        <span className="list-title__item"> List of winery</span>
      </div>
      <ul className="list-of-wines">
        {wineList.map(wine => (
          <li key={wine.id} className="list-of-wines__item">
            <MyLink to={`/${wine.id}`}>{wine.winery}</MyLink>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
