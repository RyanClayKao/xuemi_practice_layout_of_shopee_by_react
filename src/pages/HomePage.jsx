import styled from "styled-components";
import { Link } from "react-router-dom";

import DefaultLayout from "../components/layout/DefaultLayout";
import ClearFix from "../components/common/ClearFix";
import { Carousel } from "antd";
import Banner1 from "../images/banner/banner1.jpg";
import Banner2 from "../images/banner/banner2.jpg";
import Banner3 from "../images/banner/banner3.jpg";
import ProductCard from "../components/product/ProductCard";

const BannerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const BannerCarouselContainer = styled.div`
  width: 100%;
  padding: 1px;
  @media (min-width: 769px) {
    width: 66.67%;
  }
`;

const BannerSectionContainer = styled.div`
  width: 100%;
  /* padding: 1px; */
  @media (min-width: 769px) {
    width: 33.33%;
  }
`;

const BannerFeatureContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  padding: 8px 0px;
  border-left: solid 1px rgba(0, 0, 0, 0.1);
  border-right: solid 1px rgba(0, 0, 0, 0.1);
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
`;

const BannerFeatureColumn = styled.div`
  width: 33.33%;
  text-align: center;
`;

const BannerContainer = styled.div`
  width: 100%;
  padding: 1px;
`;

const CustomerContainer = styled.div`
  margin-bottom: 48px;
`;

const ProductCollectionContainer = styled.div`
  margin: 0px -4px 48px -4px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const ProductContainer = styled.div`
  padding: 4px;
  width: 100%;

  @media(min-width: 577px){
    width: 50%;
  }

  @media(min-width: 769px){
    width: 16.66%;
  }
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
    <DefaultLayout fixedHeader="true">
      <ClearFix />
      <BannerBox>
        <BannerCarouselContainer>
          <Carousel autoplay>
            <Link to="/p001">
              <Image height={200} url={Banner1}></Image>
            </Link>
            <Link to="/p001">
              <Image height={200} url={Banner2}></Image>
            </Link>
            <Link to="/p001">
              <Image height={200} url={Banner3}></Image>
            </Link>
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
        <BannerFeatureContainer>
          <BannerFeatureColumn>15天鑑賞期</BannerFeatureColumn>
          <BannerFeatureColumn>退貨無負擔</BannerFeatureColumn>
          <BannerFeatureColumn>假一賠二</BannerFeatureColumn>
        </BannerFeatureContainer>
      </BannerBox>
      <CustomerContainer>
        <Link to="/advertising">
          <Image height={100} url={Banner3} />
        </Link>
      </CustomerContainer>
      <ProductCollectionContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner1} salePrices={[100, 200]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner2} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner3} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner1} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner2} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner3} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner1} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner2} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner3} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner1} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner2} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner3} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner1} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner2} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner3} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard title="foo" coverUrl={Banner1} salePrices={[100, 200]} listPrices={[200, 299]} />
          </Link>
        </ProductContainer>
      </ProductCollectionContainer>
    </DefaultLayout>
  );
}
