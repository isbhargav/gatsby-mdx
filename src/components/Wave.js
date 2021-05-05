import React, { useState } from "react";
import { css } from "styled-components";

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const greeting = ` 👋 ${waves} Waves`;
  return (
    <button
      css={css`
        background: rebeccapurple;
        border: none;
        color: white;
        font-size: 1.25rem;
      `}
      onClick={e => setWaves(waves + 1)}
    >
      {greeting}
    </button>
  );
};

export default Wave;
