import React from "react"
import { graphql } from "gatsby"
import { Layout, Hero, About, Projects, Survey, Slider } from "../components"

const HomePage = ({ data }) => {
  // destructure graphql data and alias/rename to projects
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Layout>
      <Hero projects={projects} />
      <About />
      <Projects projects={projects} title="latest projects" />
      <Survey />
      <Slider />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 3
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
