# Getting started

1. Install all dependencies with `npm install -D`
2. Use `npm run develop` to run the project

# Folder Structure

- Any `.js` file inside `Pages` folder will be a route which can be access by file name exmaple: `/about`
- There are different gatsbay config files which runs different stages example node,browser etc
-

# GraphQL

Gatsby uses graphQL to use load data. You can go to `localhost:8000/__graphql` to play with GraphiQl environment thats provided by gatsby. Allways use this this to write and check your queries and then paste it into your project.
This is the most common workflow that every devlopers use

Example of fetching site meta data using graphql

```js
import { graphql, useStaticQuery } from "gatsby";

const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    query sitemetadata {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
```

# MDX

MDX dosent actually stands for anything. MDX allows you to use react components inside markdown documents
[Link to Gatsby Docs](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/)

Dependencies

- `gatsby-plugin-mdx` - this requires configuration in gatsby config.
- `@mdx-js/mdx`
- `@mdx-js/react`

gatsby-config

```js
 {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js"),
        },
      },
    },
```

NOTE: if you get sharp module error run the following command `rm -rf node_modules/sharp && yarn install --check-files`

## Reading files form file system

Dependicies

- `gatsby-source-filesystem` : use local files as part of graphql data layer

```js
{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
}
```
