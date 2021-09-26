import styled from "styled-components";

import Post from "./post";
import { p_20_semibold } from "../styles/textStyles";

const Title = styled.div`
  ${p_20_semibold};
  margin-bottom: 24px;
`;

const PostsWrapper = styled.div`
  > :not(:first-child) {
    margin-top: 20px;
  }
`;

export default function PostList({ title, posts }) {
  return (
    <div>
      {title && <Title>{title}</Title>}
      <PostsWrapper>
        {posts.map((item, index) => (
          <Post key={index} data={item} />
        ))}
      </PostsWrapper>
    </div>
  );
}
