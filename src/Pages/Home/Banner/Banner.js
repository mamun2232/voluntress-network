import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
      return (
            <div className="banner-section">
                  <div className="container ">
                        <h2 className='my-4 text-center'>I GORE HELPING PEOPLE IN NEED</h2>
                        <InputGroup className="mb-3 w-50 m-auto">
                              <FormControl
                                    placeholder="Search Our Voluntrees"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                              />
                              <Button variant="" id="button-addon2">
                              Search
                              </Button>
                        </InputGroup>
                  </div>
            </div>

      );
};

export default Banner;