const ProductByIdPage = async ({ params }) => {
  console.log(await params);
  const productId = (await params).productId;

  return (
    <div>
      <h1>Product id is: {productId}</h1>
    </div>
  );
};

export default productByIdPage;
