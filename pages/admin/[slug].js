import Metatags from "../../components/Metatags";
// page has one on one relationship - one route points to one component
// but in many cases you many need dynamic route
// while many different routes may point to the same component
// for example in our admin panel user can create and edit a post
// each post has a unique ID
// and user edited it by going to that slug in the browser
// we need a feature like that is a dynamic route
// where you can put a segment of that url as a variable
// in next.js we can add a file like that by wrapping a file name in bracket[] `/admin/[slug].js`
export default function AdminPostEdit({}) {
  return (
    <main>
      <Metatags title="admin page" />
      <h1>Edit post</h1>
    </main>
  );
}
