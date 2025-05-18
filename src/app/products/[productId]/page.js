import BackButton from "./_components/BackButton";

const ProductByIdPage = async ({ params }) => {
  const productId = (await params).productId;

  return (
    <div>
      <BackButton />
      <h1 className="py-5 text-3xl">Product id is: {productId}</h1>
    </div>
  );
};

export default ProductByIdPage;
