import React from "react";

const dynamicReviewPage = async ({ params }) => {
  const reviewPage = (await params).reviewId;

  return <div className="text-3xl">dynamicReviewPage: {reviewPage}</div>;
};

export default dynamicReviewPage;
