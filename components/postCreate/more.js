import styled, { css } from "styled-components";

import Input from "components/input";
import DatePicker from "components/datePicker";

const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid #f0f3f8;
  box-shadow: 0px 4px 31px rgba(26, 33, 44, 0.04),
    0px 0.751293px 3.88168px rgba(26, 33, 44, 0.03);
  padding: 40px;
  @media screen and (max-width: 800px) {
    padding: 20px;
    margin: 0 -20px;
  }
  > :not(:first-child) {
    margin-top: 20px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > :not(:first-child) {
    margin-top: 16px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SystemWrapper = styled.div`
  background: #fbfcfe;
  padding: 12px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #1e2134;
  border: 1px solid #e2e8f0;
`;

const Button = styled.div`
  padding: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background: #191e27;
  cursor: pointer;
  text-align: center;
  ${(p) =>
    p.isLoading &&
    css`
      background: #e2e8f0;
      pointer-events: none;
    `}
`;

export default function More({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  height,
  setHeight,
  onPublish,
  isLoading,
}) {
  return (
    <Wrapper>
      <InnerWrapper>
        <TitleWrapper>
          <Title>System</Title>
          <img src="/imgs/icons/action.svg" alt="" />
        </TitleWrapper>
        <SystemWrapper>Single choice voting</SystemWrapper>
      </InnerWrapper>
      <InnerWrapper>
        <TitleWrapper>
          <Title>Period</Title>
          <img src="/imgs/icons/timestamp.svg" alt="" />
        </TitleWrapper>
        <DatePicker
          date={startDate}
          setDate={setStartDate}
          placeholder="Start date"
        />
        <DatePicker
          date={endDate}
          setDate={setEndDate}
          placeholder="End date"
        />
      </InnerWrapper>
      <InnerWrapper>
        <TitleWrapper>
          <Title>Snapshot height</Title>
          <img src="/imgs/icons/block.svg" alt="" />
        </TitleWrapper>
        <Input
          placeholder="0"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </InnerWrapper>
      <Button isLoading={isLoading} onClick={onPublish}>
        Publish
      </Button>
    </Wrapper>
  );
}
