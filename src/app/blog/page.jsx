"use client";

import React, { useState } from "react";
import { Posts, Search } from "./components";

const page = () => {
  const [posts, setPosts] = useState(null);
  const [query, setQuery] = useState("");

  return <div>page</div>;
};

export default page;
