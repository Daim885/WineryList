import React from "react"
import { graphql } from "gatsby"

import Seo from "../../components/seo"

import Layout from "../../components/layout"
import MyLink from "../../components/MyLinks/MyLink"
import MyLinkOutside from "../../components/MyLinks/MyLinkOutside"
import TextWrapper from "../../components/TextWrapper/TextWrapper"

import "./wineDataPage.css"

export const query = graphql`
  query ($id: String) {
    winemagDataJson(id: { eq: $id }) {
      points
      title
      description
      taster_name
      taster_twitter_handle
      price
      designation
      variety
      region_1
      region_2
      province
      country
      winery
      id
    }
  }
`
const WineDataPage = ({ data }) => {
  const wineData = data.winemagDataJson
  return (
    <Layout>
      <Seo title={wineData.title} />
      <div className="centered wine-data-page-title">{wineData.winery}</div>
      <div className="centered">{wineData.title}</div>
      <div>{wineData.description}</div>
      <br />

      <TextWrapper>
        <span className="sub-title">Points: </span>
        <span>{wineData.points}</span>
      </TextWrapper>

      <TextWrapper>
        <span className="sub-title">The price of wine: </span>
        <span>{wineData.price ? wineData.price : <>---</>}</span>
      </TextWrapper>

      <TextWrapper>
        <span className="sub-title">Designation: </span>
        <span>{wineData.designation}</span>
        <br />
        <span className="sub-title">Variety: </span>
        <span>{wineData.variety}</span>
      </TextWrapper>

      <TextWrapper>
        {wineData.region_1 && (
          <div>
            <span className="sub-title">First region: </span>
            <span>{wineData.region_1}</span>
          </div>
        )}
        {wineData.region_2 && (
          <div>
            <span className="sub-title">Second region: </span>
            <span>{wineData.region_2}</span>
          </div>
        )}
      </TextWrapper>

      <TextWrapper>
        <span className="sub-title">Location: </span>
        <span>{wineData.province}, </span>
        <span>{wineData.country}</span>
      </TextWrapper>
      <TextWrapper>
        <span className="sub-title">Taster name: </span>
        <span>{wineData.taster_name}</span>
        <br />
        <span className="sub-title">Twitter: </span>
        <span>
          <MyLinkOutside
            href={`https://twitter.com/${wineData.taster_twitter_handle}`}
          >
            {wineData.taster_twitter_handle}
          </MyLinkOutside>
        </span>
      </TextWrapper>
      <MyLink to="/">Go to list wines</MyLink>
    </Layout>
  )
}

export default WineDataPage
