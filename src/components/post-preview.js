import React from "react";
import styled from "styled-components";
import ReadLink from "./ReadLink";
import { Link } from "gatsby";

const Article = styled.article`
  border-bottom: 1px solid #ddd;
  margin-top: 0.75rem;
  padding-bottom: 1rem;
  &:first-of-type {
    margin-top: 1rem;
  }
`;

const PostPreview = ({ post: { title, author, slug, excerpt } }) => {
  return (
    <Article>
      <h3>
        <Link to={slug}>{title}</Link>
      </h3>
      <p>{excerpt}</p>
      <ReadLink to={slug}>Read this post &rarr;</ReadLink>
    </Article>
  );
};
export default PostPreview;
