/* eslint-disable react/prop-types */
import { Card } from "antd";
import styled from "styled-components";
const { Meta } = Card;

const SquareImage = styled.div`
  padding-top: 100%;
  background-position: center;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
`;

const ListPriceLabel = styled.span`
  color: #757575;
  text-decoration-line: line-through;
  margin-right: 4px;
`;

const SalePriceLabel = styled.span`
  color: #ee4c2d;
`;

export default function ProductCard({
  coverUrl,
  title,
  listPrices,
  salePrices,
  discountPercentage,
  salesNumber,
  rating,
  isLiked,
}) {
  return (
    <Card
    hoverable
    // style={{ width: 240 }}
    cover={<SquareImage alt="cover" src={coverUrl} />}
  >
    <Meta title={title} description={
      <div>
        {listPrices && listPrices.length > 0 && <ListPriceLabel>${listPrices[0]}</ListPriceLabel>}
        {salePrices && salePrices.length > 0 && <SalePriceLabel>${salePrices[0]}</SalePriceLabel>}
      </div>
    } />
  </Card>
  )
}

