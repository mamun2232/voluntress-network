import React, { useState } from 'react';
import { BarLoader, DotLoader, FadeLoader } from 'react-spinners';
import Loader from 'react-spinners/ClipLoader';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const Loading = () => {
      const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  color: red
`;

const [color, setColor] = useState("#ffffff");
      return (
            <div className="lodaing-container w-50 mx-auto">
                  <div className="container">
                        {/* <ClipLoader /> */}
                        {/* <Loader></Loader> */}
                        {/* <BarLoader></BarLoader> */}
                        <DotLoader className="text-danger" css={override}></DotLoader>

                  </div>
            </div>
      );
};

export default Loading;