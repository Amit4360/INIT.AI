import { styled } from "styled-components";
import { useState } from "react";
import { sliderData } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Date = styled.h5`
  font-weight: 200;
  padding-top: 10px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  background-color: #F0F0F0;
  cursor: pointer;
`;

const Slider = () => {

  const [slideIndex, setSlideIndex]=useState(0);
  const handleClick = (direction) =>{
      if(direction==="left"){
        setSlideIndex(slideIndex>0 ? slideIndex-1: 2)
      }else{
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
      }
  };


  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <i className="fa-solid fa-arrow-left fa-beat-fade"></i>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderData.map(item=>(
            <Slide bg={item.bg} key={item.id} >
            <ImgContainer>
                <Image src={item.image} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Date>{item.date}</Date>
              <Description>{item.content}</Description>
              <a href={item.link}>
                <Button>Read More</Button>
              </a>
            </InfoContainer>
          </Slide>
        ))};
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <i className="fa-solid fa-arrow-right fa-beat-fade"></i>
      </Arrow>
    </Container>
  );
};

export default Slider;
