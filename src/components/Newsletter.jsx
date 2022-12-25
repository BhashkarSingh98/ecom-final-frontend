import { Search } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  // background-color: #fcf5f5;
  background-image: linear-gradient(to right,#fcf5f5,black);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius:50px ;

  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  border-radius:50px 0 0 50px ;
  outline:"none";
  

 

`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: white;
  color: black;
  border-radius:0px 50px  50px 0 ;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>iShop</Title>
      <Desc>Find your best products.</Desc>
      <InputContainer>
        <Input placeholder="Search " />
        <Button>
          <Search />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
