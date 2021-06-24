import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/About.module.css'

const Path = ({ path }) => {
  return (
    <>
      <div className={styles.container}>
        {/* PATH */}
        <section className={styles.location}>
          <p>
            <span className={styles.path}>블로그 메인</span>
            <span className={styles.arrow} />
            <span className={styles.on}>{path}</span>
          </p>
        </section>
      </div>
    </>
  )
}

Path.propTypes = {
  path: PropTypes.node.isRequired,
}

export default Path
