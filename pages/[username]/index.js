import UserProfile from "../../components/UserProfile";
import PostFeed from "../../components/PostFeed";

//any route we index to beyond the route url will go to the user name page
// will not conflict with the enter admin route
// cuz Next.js will prefer the route already existed in a static routes than a dynamic routes
export default function UserProfilePage({}) {
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed user={posts} />
    </main>
  );
}
