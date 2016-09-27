import React, { PropTypes } from "react"

import Content from "../Content"

import styles from "./index.css"

const Banner = (props) => {
  return (
    <div
      className={ styles.container }
      style={ {
        color: "yellow",
        background: `
        linear-gradient(
          179deg,
          rgba(204, 0, 0, 0.8),
          rgba(255, 0, 0, 0.2)
        ),
        url("${ props.image }")  50% 50% / cover`,
      } }
    >
      <Content>
        { props.children }
      </Content>
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
}

export default Banner
