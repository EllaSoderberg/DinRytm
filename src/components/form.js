import React from 'react';
import { navigate } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Form() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
      <div className="bg-red-600 rounded-lg w-2/3">
      <form
        name="contact"
        method="post"
        action="/tack/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Fyll inte i: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p className="text-white font-bold text-lg px-12 pt-8">
          <label className="">
            Ditt namn:
            <br />
            <input className="text-black" type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p className="text-white font-bold text-lg px-12 pt-8">
          <label>
            Din email:
            <br />
            <input className="text-black" type="email" name="email" onChange={handleChange} />
          </label>
        </p>
        <p className="text-white font-bold text-lg  px-12 pt-8">
          <label>
            Meddelande:
            <br />
            <textarea className="text-black" name="message" rows="4" cols="50" onChange={handleChange} />
          </label>
        </p>
        <p className="text-white font-bold text-lg px-12 pb-8">
          <button className="py-3 px-8 mt-6 rounded bg-red-500 hover:bg-red-400" type="submit">Skicka</button>
        </p>
      </form>
      </div>
  )
}