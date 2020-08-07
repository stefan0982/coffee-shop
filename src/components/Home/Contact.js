import React from 'react'
import Title from '../Globals/Title'

const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/xzbjondz" method="POST">
            {/* name */ }
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="stefan ciorba"
              />
            </div>
            {/* email */ }
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="stefan@mail.ru"
              />
            </div>
            {/* description */ }
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                cols="30"
                rows={ 5 }
                className="form-control"
                name="description"
                id="description"
                placeholder="your message"
              />
            </div>
            {/*  submit */ }
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >Trimite
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
