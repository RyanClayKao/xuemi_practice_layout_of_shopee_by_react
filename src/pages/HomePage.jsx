import styled from "styled-components";

import DefaultLayout from "../components/layout/DefaultLayout";
import ClearFix from "../components/common/ClearFix";
import { Carousel } from "antd";
import Banner1 from "../images/banner/banner1.jpg";
import Banner2 from "../images/banner/banner2.jpg";
import Banner3 from "../images/banner/banner3.jpg";

const BannerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BannerCarouselContainer = styled.div`
  width: 100%;
  padding: 1px;
  @media(min-width: 769px){
    width: 66.67%;
  }
`;

const BannerSectionContainer = styled.div`
  width: 100%;
  /* padding: 1px; */
  @media(min-width: 769px){
    width: 33.33%;
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  padding: 1px;  
`;

const Image = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-size: cover;
`;

export default function HomePage() {
  return (
    <DefaultLayout fixedHeader>
      <ClearFix />
      <BannerBox>
        <BannerCarouselContainer>
          <Carousel autoplay>
            <Image height={200} url={Banner1}></Image>
            <Image height={200} url={Banner2}></Image>
            <Image height={200} url={Banner3}></Image>
          </Carousel>
        </BannerCarouselContainer>
        <BannerSectionContainer>
          <BannerContainer>
            <Image height={100} url={Banner1}></Image>
          </BannerContainer>
          <BannerContainer>
            <Image height={100} url={Banner2}></Image>
          </BannerContainer>
        </BannerSectionContainer>
      </BannerBox>
    </DefaultLayout>
  );
}
