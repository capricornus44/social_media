import AddPostForm from "app/components/AddPostForm";
import PostCard from "app/components/PostCard";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <AddPostForm />
      <PostCard />
    </main>
  );
}
