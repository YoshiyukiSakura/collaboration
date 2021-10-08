import styled from "styled-components";
import moment from "moment";

import { p_16_semibold } from "styles/textStyles";

const Wrapper = styled.div`
  padding: 40px 32px;
  background: #ffffff;
  border: 1px solid #f0f3f8;
  box-shadow: 0px 4px 31px rgba(26, 33, 44, 0.04),
    0px 0.751293px 3.88168px rgba(26, 33, 44, 0.03);
  > :not(:first-child) {
    margin-top: 32px;
  }
  @media screen and (max-width: 800px) {
    padding: 20px;
    margin: 0 -20px;
  }
`;

const TitleWrapper = styled.div`
  ${p_16_semibold};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Divider = styled.div`
  height: 1px;
  background: #f0f3f8;
  margin: 12px 0;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  :not(:first-child) {
    margin-top: 4px;
  }
  > :first-child {
    color: #506176;
    margin-right: 8px;
  }
`;

const TimestampWrapper = styled.div`
  :not(:first-child) {
    margin-top: 4px;
  }
`;

const TimestampItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  > :first-child {
    color: #506176;
  }
`;

const OverflowWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function PostInfo({ data }) {
  return (
    <Wrapper>
      <div>
        <TitleWrapper>
          Information
          <img src="/imgs/icons/info.svg" alt="" />
        </TitleWrapper>
        <Divider />
        <div>
          <InfoItem>
            <div>Strategie(s)</div>
            <div>balance-of</div>
          </InfoItem>
          <InfoItem>
            <div>Snapshot</div>
            <div>{data?.snapshotHeight?.toLocaleString()}</div>
          </InfoItem>
          <InfoItem>
            <div>IPFS</div>
            <OverflowWrapper>{data?.pinHash}</OverflowWrapper>
          </InfoItem>
        </div>
      </div>
      <div>
        <TitleWrapper>
          Timestamp
          <img src="/imgs/icons/timeline.svg" alt="" />
        </TitleWrapper>
        <Divider />
      </div>
      <TimestampWrapper>
        {data?.createdAt && (
          <TimestampItem>
            <div>Created</div>
            <div>{moment(data.createdAt).format("MMM DD, YYYY H:mm")}</div>
          </TimestampItem>
        )}
        {data?.startDate && (
          <TimestampItem>
            <div>Start date</div>
            <div>{moment(data.startDate).format("MMM DD, YYYY H:mm")}</div>
          </TimestampItem>
        )}
        {data?.endDate && (
          <TimestampItem>
            <div>End date</div>
            <div>{moment(data.endDate).format("MMM DD, YYYY H:mm")}</div>
          </TimestampItem>
        )}
      </TimestampWrapper>
    </Wrapper>
  );
}
