import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form`
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: inline-block;
  border-radius: 8px;
  margin: 8px;
  padding: 8px;
  text-align: center;
  input,
  button {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
  }
  input.big {
    width: 512px;
    height: 256px;
  }
`

export default () => {
  return (
    <Wrapper>
      <Form action="https://formspree.io/f/xgepdkvd" method="POST">
        <sup>*</sup> = required
        <br />
        <br />
        <label>
          Contact Email<sup>*</sup>:
        </label>
        <input type="email" name="email" required />
        <label>
          Source Code URL<sup>*</sup>:
        </label>
        <input type="url" name="source" required />
        <br />
        <label>
          Ad Title<sup>*</sup>:
        </label>
        <input type="text" name="title" required />
        <label>
          Ad URL<sup>*</sup>:
        </label>
        <input type="url" name="link" required />
        <br />
        <label>
          Ad Body<sup>*</sup>:
        </label>
        <br />
        <input className="big" type="text" name="body" required />
        <br />
        <label>Ad Image URL:</label>
        <input tyle="url" name="image" />
        <br />
        <button>Submit</button>
      </Form>
    </Wrapper>
  )
}
