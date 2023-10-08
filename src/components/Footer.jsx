import { styled } from "styled-components";
import {Link} from "react-router-dom"

const Container = styled.div`
  display: flex;
  background-color: black;
  @media (max-width: 390px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 60px;
  border-radius: 50%;

`;

const Description = styled.p`
    margin: 20px 5px;
    color: white;
    text-align: justify;
`;

const SocialContainer= styled.div`
    display: flex;
`;

const SocialIcon= styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    background-color: black;
    color: white;
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.2);
    }
`;

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  flex: 1;
  padding: 20px;
  @media (max-width: 390px) {
    display: none;
  }
`;

const Title = styled.h3`
    margin-bottom: 30px;
    color: white;

`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    color: white;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    color: white;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-content: center;
    color: white;
`;

const Payment = styled.div `

`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src="logo.png"></Logo>
        <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur dolor accusantium quae laudantium repellendus magnam, quaerat ullam, deserunt sint doloremque consectetur dolorum nam a! Odit magni perferendis natus aut.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <a href="https://www.instagram.com/djinit.ai/">
              <i class="fa-brands fa-github"></i>
            </a>
          </SocialIcon>
          <SocialIcon>
            <i class="fa-brands fa-linkedin"></i>
          </SocialIcon>
          <SocialIcon>
            <i class="fa-brands fa-discord"></i>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem><Link to="/">Home</Link></ListItem>
            <ListItem><Link to="/blogs">Blogs</Link></ListItem>
            <ListItem><Link to="/Team">Team</Link></ListItem>
            <ListItem><Link to="/contact">Contact Us</Link></ListItem>
        </List>
      </Center>
      <Right>
        <Title>CONTACT</Title>
        <ContactItem><i class="fa-solid fa-location-dot me-2"></i> Vasai, Palghar, Maharashtra</ContactItem>
        <ContactItem><i class="fa-solid fa-phone me-2"></i> +91 98340 16627</ContactItem>
        <ContactItem><i class="fa-regular fa-envelope me-2"></i> ayush.up105@gmail.com</ContactItem>
        <Payment />
      </Right>
    </Container>
  );
};

export default Footer;
