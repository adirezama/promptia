import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
        repudiandae? Nihil voluptatem soluta error voluptatum! Laudantium
        distinctio quae magnam ex soluta ipsum nam consectetur voluptas esse!
        Dignissimos maxime quam sint.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
