import React, { PropTypes } from "react"

import Page from "../Page"

const Post = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null
  return (
    <Page
      { ...props }
      header={
        <header>
        {
          pageDate &&
          <time>
            {
              pageDate
              .toLocaleString("fr-fr", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            }
          </time>
        }
        </header>
      }
    />
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
