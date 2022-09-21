import { Outlet } from "react-router-dom";

import PostForm from "../components/Forms/PostForm";

export default function Home() {
  return (
    <main className="container--600">
      <PostForm />
    </main>
  );
}
