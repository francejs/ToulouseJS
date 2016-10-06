import React, { PropTypes } from "react"
import { Link } from "react-router"

import styles from "./index.css"

const PagePreview = ({ __url, title, date }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <Link
      to={ __url }
      className={ styles.link }
    >
      <span className={ styles.title }>{ title }</span>
      {
        pageDate &&
        <time className={ styles.date }>
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
    </Link>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
}

export default PagePreview
