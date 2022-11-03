import { getUserWithUsername, postToJSON } from "../../lib/firebase";
import UserProfile from "../../components/UserProfile";
import PostFeed from "../../components/PostFeed";

export async function getServerSideProps({ query }) {
  const { username } = query;
  // console.log(username);
  const userDoc = await getUserWithUsername(username);

  // If no user, short circuit to 404 page
  if (!userDoc) {
    return {
      notFound: true,
    };
  }

  // JSON serializable data
  let user = null;
  let posts = null;

  if (userDoc) {
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection("posts")
      .where("published", "==", true)
      .orderBy("createdAt", "desc")
      .limit(5);

    posts = (await postsQuery.get()).docs.map(postToJSON);
  }
  return {
    props: { user, posts }, // will be passed to the page component as props
  };
}

//any route we index to beyond the route url will go to the user name page
// will not conflict with the enter admin route
// cuz Next.js will prefer the route already existed in a static routes than a dynamic routes
export default function UserProfilePage({ user, posts }) {
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed user={posts} />
    </main>
  );
}
