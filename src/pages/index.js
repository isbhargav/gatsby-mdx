import React from "react";
import Layout from "../components/Layout";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/post-preview";
import { Link } from "gatsby";
const IndexPage = () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Hello World</h1>
      <p>Welcome to Minisiota.</p>
      <Link to="/about">Learn more about me.</Link>
      {posts.map(post => (
        <PostPreview key={post.title} post={post} />
      ))}
    </Layout>
  );
};

export default IndexPage;
