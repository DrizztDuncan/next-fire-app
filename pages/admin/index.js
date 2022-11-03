import AuthCheck from "../../components/AuthCheck";
// create a route
// either create a file with the name of the file
// or directory fold by index file
export default function AdminPostsPage({}) {
  return (
    <main>
      <AuthCheck></AuthCheck>
    </main>
  );
}
