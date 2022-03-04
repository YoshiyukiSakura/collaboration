import styled from "styled-components";

import PostContent from "./postContent";
import PostInfo from "./postInfo";
import PostResults from "./postResults";
import PostVotes from "@/components/postDetail/postVotes";
import PostDiscussion from "@/components/postDetail/postDiscussion";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 22px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const MainWrapper = styled.div`
  flex: 1 1 auto;
  > :not(:first-child) {
    margin-top: 20px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const SiderWrapper = styled.div`
  flex: 0 0 290px;
  max-width: 290px;
  margin-left: 20px;
  > :not(:first-child) {
    margin-top: 20px;
  }
  @media screen and (max-width: 800px) {
    flex-basis: auto;
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    max-width: none;
  }
`;

export default function PostDetail({
  data,
  space,
  votes,
  voteStatus,
  comments,
  defaultPage,
  myVote,
}) {
  return (
    <Wrapper>
      <MainWrapper>
        <PostContent data={data} space={space} />
        <PostVotes
          proposal={data}
          votes={votes}
          myVote={myVote}
          discussionPage={defaultPage?.discussionPage}
        />
        <PostDiscussion proposal={data} comments={comments} space={space} />
      </MainWrapper>
      <SiderWrapper>
        <PostInfo data={data} space={space} />
        <PostResults data={data} voteStatus={voteStatus} space={space} />
      </SiderWrapper>
    </Wrapper>
  );
}
