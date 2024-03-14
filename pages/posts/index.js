import { Fragment } from "react";
import AllPost from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-ult";

import Head from "next/head";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list all programming-related tutorials and posts"/>
      </Head>
      <AllPost posts={props.posts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;

// const DUMMY_POSTS = [
//     {
//       slug: "getting-started-with-nextjs",
//       title: "Getting Started with next js1",
//       image:'getting-started-nextjs.png' ,
//       excerpt:'Next js is a react js framework for the productions1' ,
//       date: '2022-05-06',
//     },
//     {
//       slug: "getting-started-with-nextjs2",
//       title: "Getting Started with next js2",
//       image:'getting-started-nextjs.png' ,
//       excerpt:'Next js is a react js framework for the productions2' ,
//       date: '2022-02-06',
//     },
//     {
//       slug: "getting-started-with-nextjs3",
//       title: "Getting Started with next js3",
//       image:'getting-started-nextjs.png' ,
//       excerpt:'Next js is a react js framework for the productions3' ,
//       date: '2022-06-06',
//     },
//     {
//       slug: "getting-started-with-nextjs4",
//       title: "Getting Started with next js4",
//       image:'getting-started-nextjs.png' ,
//       excerpt:'Next js is a react js framework for the productions4' ,
//       date: '2022-10-06',
//     }
//   ];
