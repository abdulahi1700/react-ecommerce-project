import about from '../assets/about.jpeg';
function About() {
  return (
    <div className=" text-center text-xl leading-10">
      <h1>
        furms is a global furniture destination for something. we sell
        cutting-edge <br /> furniture and others a wide variety of
        fashion-related content
      </h1>
      <div className=" flex items-center flex-col md:flex-row space-x-3">
        <div className=" space-y-4 mt-5">
          <img src={about} alt="" />
          <h1>OUR STORY</h1>
          <p className=" text-gray-400 text-sm leading-10 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error qui
            dignissimos accusamus temporibus fuga itaque officiis suscipit quas
            eos nesciunt laboriosam natus quis sit molestiae minus unde,
            excepturi laudantium nemo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis quia voluptate, tempora magnam, iste
            quisquam sequi ducimus incidunt neque obcaecati inventore dolores?
          </p>
        </div>
        <div className=" space-y-4 mt-5">
          <img src={about} alt="" />
          <h1>OUR MISSION</h1>
          <p className=" text-gray-400 text-sm leading-10 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error qui
            dignissimos accusamus temporibus fuga itaque officiis suscipit quas
            eos nesciunt laboriosam natus quis sit molestiae minus unde,
            excepturi laudantium nemo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis quia voluptate, tempora magnam, iste
            quisquam sequi ducimus incidunt neque obcaecati inventore dolores?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
