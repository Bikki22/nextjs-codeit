import React from "react";

const dynamicReviewPage = async ({ params }) => {
  const reviewPage = (await params).reviewId;

  return <div>dynamicReviewPage: {reviewPage}</div>;
};

export default dynamicReviewPage;
