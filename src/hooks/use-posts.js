import React from "react";
import { graphql, useStaticQuery } from "gatsby";
const usePosts = () => {
  const data = useStaticQuery(graphql`
    query posts {
      allMdx {
        posts: nodes {
          excerpt
          frontmatter {
            author
            slug
            title
          }
        }
      }
    }
  `);

  //   console.log(data.allMdx.posts);
  return data.allMdx.posts.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
  }));
};
export default usePosts;
