import React    from 'react'
import { Link } from 'gatsby'
import Title    from '../Globals/Title'

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis cupiditate debitis doloribus exercitationem, fuga, ipsa
              laboriosam laborum quae quibusdam voluptate voluptates voluptatum?
              Consectetur corporis dolore maiores necessitatibus, quisquam sunt.
              Atque earum porro quibusdam. A adipisci, cum cumque distinctio
              eius eligendi eum illo impedit labore magnam nam nostrum odio quod
              sint!
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Info
