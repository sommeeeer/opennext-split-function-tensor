export default function Home() {
  return (
    <div className="flex flex-col gap-12 items-center">
      {/* <div className="flex flex-col gap-12"> */}
        <h1 className="text-4xl font-bold text-center">Welcome to Open Next!</h1>
        <div className="relative w-96 h-96">
          <img
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50c"
            alt="A beautiful image from Unsplash"
          />
        </div>
        <p className="text-lg text-center">
          This is a simple Next.js app with serverless functions powered by Open Next. It will use @tensorflow/tfjs in a splitted function
        </p>
        <a href="/api/tensor" className="text-xl text-center underline">See the output from tensorflow</a>
    </div>
  );
}
