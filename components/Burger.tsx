import styled from "styled-components";
import { NextPage } from "next";

const StyledBurger = styled.button<{ scrollMenu: boolean; open: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  float: right;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) =>
      props.scrollMenu
        ? props.theme.colors.themeDark
        : props.theme.colors.themeLight};
    border-radius: 0px;
    transition: all 0.25s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger: NextPage<any> = ({ open, setOpen, colorchange }) => {
  return (
    <StyledBurger
      onClick={() => setOpen(!open)}
      scrollMenu={colorchange}
      open={open}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
