import styled from "styled-components";
import type { NextPage } from "next";
import { theme } from "../theme";

import { bool } from "prop-types";

const StyledMenu = styled.div`
  background-color: #010101;
  background-color: ${theme.themeDark};
  heigth: 100vh;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100vw)")};
`;

const Menu: NextPage<{}[]> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Pricing
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
