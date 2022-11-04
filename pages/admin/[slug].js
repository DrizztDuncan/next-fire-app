import Metatags from "../../components/Metatags";
import styles from "../../styles/Admin.modules.css";
import { firestore, auth, serverTimestamp } from "../../lib/firebase";

import { useState } from "react";
import { useRouter } from "next/router";

import { useDocumentData } from "react-firebase-hooks/firestore";
import { useForm } from "react-hook-form";
import reactMarkdown from "react-markdown";
import Link from "next/link";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";

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
    <AuthCheck>
      <PostManager />
    </AuthCheck>
  );
}

function PostManager() {
  const [preview, setPreview] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const postRef = firestore
    .collection("users")
    .doc(auth.currentUser.uid)
    .collection("posts")
    .doc(slug);
  const [post] = useDocumentData(postRef);
  return (
    <main className={styles.container}>
      {post && (
        <>
          <section>
            <h1>{post.title}</h1>
            <p>ID: {post.slug}</p>

            <PostForm
              postRef={postRef}
              defaultValues={post}
              preview={preview}
            />
          </section>
        </>
      )}
    </main>
  );
}

function PostFrom({ defaultValues, postRef, preview }) {
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues,
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(updatePost)}>
      {preview && (
        <div className="card">
          <ReactMarkdown>{watch("content")}</ReactMarkdown>
        </div>
      )}
      <div className={preview ? styles.hidden : styles.controls}>
        <textarea name="content" ref={register}></textarea>
        <fieldset>
          <input
            className={styles.checkbox}
            name="published"
            type="checkbox"
            ref={register}
          />
          <label>Published</label>
        </fieldset>

        <button type="submit" className="btn-green">
          Save Changes
        </button>
      </div>
    </form>
  );
}
