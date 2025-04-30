import React from "react";

const AllNewsPage = async ({ params }) => {
  const slug = (await params).slug;
  console.log(slug);

  return <div>AllNewsPage</div>;
};

export default AllNewsPage;
