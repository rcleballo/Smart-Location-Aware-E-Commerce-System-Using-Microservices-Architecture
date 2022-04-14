import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { mobile } from '../responsive';
import { register } from "../Redux/ApiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255,255,255,0.5), 
    rgba(255,255,255,0.5)
    ), 
    url('https://i.ibb.co/pRx1Nh5/ecommerce.jpg')
    no-repeat
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 30px 0px
`;

const Button = styled.button`
  width: 40%;
  border: none;
  border-radius: 10px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
  color: #ef233c;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, {name, lastName, username, email, password, confirmPassword});
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input 
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input 
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input 
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input 
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input 
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Agreement>
            By creating an account, I consent to the processing of my personal information
             in accordance with the <b>Privacy Policy</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            CREATE
          </Button>
          {error && <Error>something went wrong</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
