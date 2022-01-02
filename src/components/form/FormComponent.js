import React from "react";
import { Grid, Form, Segment, Button } from "semantic-ui-react";
import { options } from "../../utils/constants";

const FormComponent = ({ info, setInfo, handleFormSubmit }) => {
  const handleInputChange = (e) => {
    // const name=e.target.name
    // const value=e.target.value
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handleOptionChange = (e, values) => {
    const { name, value } = values;
    setInfo({ ...info, [name]: value.toUpperCase() });
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: 400 }}>
        <div className="ui piled segments">
          <div
            style={{
              backgroundColor: "teal",
              color: "#fff",
              border: "transparent",
              borderRadius: "0px",
            }}
            className="ui segment brand"
          >
            <a
              href="https://github.com/Halityildiz/Halatsar-FireContact"
              className="design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.pinimg.com/564x/e3/f9/c4/e3f9c42f3b449e72123466082ae3eb18.jpg"
                alt="Logo"
                class="logo"
              />
              {/* <code>{"<Clarusway/> "}</code> */}
            </a>
            <span
              style={{ letterSpacing: "3px", fontSize: "32px" }}
              className="design header"
            >
              Halatsar Design
            </span>
          </div>
        </div>
        <h2
          style={{ backgroundColor: "teal", color: "#fff" }}
          className="contact-header"
        >
          Add Contact
        </h2>
        <Form size="large" onSubmit={handleFormSubmit}>
          <Segment stacked style={{ fontSize: "18px" }}>
            <Form.Input
              fluid
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Name"
              value={info.username}
              onChange={handleInputChange}
              required
            />
            <Form.Input
              fluid
              name="phoneNumber"
              icon="phone"
              iconPosition="left"
              placeholder="Phone Number"
              value={info.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <Form.Dropdown
              options={options}
              onChange={handleOptionChange}
              placeholder="Gender"
              name="gender"
              fluid
              selection
              value={info.gender.toUpperCase()}
              required
            />
            <Button
              style={{
                color: "#fff",
                backgroundColor: "teal",
                fontSize: "24px",
              }}
              color="teal"
              fluid
              size="large"
            >
              Add
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default FormComponent;
