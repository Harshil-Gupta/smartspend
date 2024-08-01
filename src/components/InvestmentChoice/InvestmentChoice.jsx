import "./InvestmentChoice.css";
import SimpleBar from 'simplebar-react'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "../../helpers"
import Cover from "../Cover"
import Main from "../Main"

const InvestmentChoice = () => {
  return (
    <div>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <ChakraProvider theme={theme}>
            <Cover />
            <Main />
        </ChakraProvider>
      </SimpleBar>
    </div>
  );
};

export default InvestmentChoice;
