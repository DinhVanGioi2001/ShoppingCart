import styledComponents from "styled-components";
import { IconButton } from "@mui/material";

export const Wrapper = styledComponents.div`
    margin: 40px;
`;

export const StyledButton = styledComponents(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
`;