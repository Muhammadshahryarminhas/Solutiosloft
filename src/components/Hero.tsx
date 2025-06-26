import HeroBGBox from "../Assets/HeroBGBox.svg";
import clutchlogo from "../Assets/Clutch.png";
import Button from './Button';
import Header from './Header';
import StatsCards from './StatsCards';

const HeroSection = () => {
  const cardData = [
    {
      title: "Client Trust Us",
      desc: "Project that have been successfully completed",
      stat: (
        <span className="flex items-center gap-2">
          <span className="text-green-400 font-normal text-4xl">↑</span>
          <span>300+</span>
        </span>
      ),
      rotate: "-2",
      colored: false,
      delay: 0.1,
    },
    {
      title: "Years In Business",
      desc: "What a journey it's been! We've made great progress over the years.",
      stat: (
        <span className="flex items-center gap-2">
          <span className="text-green-400 font-normal text-4xl">↑</span>
          <span>13+</span>
        </span>
      ),
      rotate: "6",
      colored: false,
      delay: 0.3,
    },
    {
      title: "Industries Explored",
      desc: "We are experts in various industries like tech, healthcare, finance, and entertainment.",
      stat: (
        <span className="flex items-center gap-2">
          <span className="text-green-400 font-normal text-4xl">↑</span>
          <span>50+</span>
        </span>
      ),
      rotate: "-8",
      colored: false,
      delay: 0.2,
    },
    {
      title: "Eco-Friendly by AI",
      desc: "1 expert = work of 3, less travel, less carbon",
      stat: (
        <div className="flex items-center">
          <span className="text-green-400 text-4xl mr-4 flex flex-col justify-center items-center">
            <span className="text-4xl font-normal">↓</span>
          </span>
          <div className="text-left">
            <div className="flex items-end">
              <span className="text-white font-extrabold text-4xl leading-none">3</span>
              <span className="text-yellow-400 font-extrabold text-4xl leading-none">x</span>
              <span className="text-white font-extrabold text-4xl leading-none ml-2">fewer</span>
            </div>
            <div className="text-white font-extrabold text-4xl leading-tight mt-2">emissions</div>
          </div>
        </div>
      ),
      rotate: "2",
      colored: true,
      delay: 0.6,
    },
  ];

  return (
    <section
      className="mx-4 lg:mx-auto relative overflow-hidden bg-gra text-white lg:h-[90dvh] h-auto"
      style={{
        background: "radial-gradient(55.29% 53.77% at 58.4% 46.88%, #002768 0%, #111827 75%)"
      }}
    >
      <Header />
      <img
        src={HeroBGBox}
        alt="Background Shape"
        className="absolute inset-0 w-full h-full pointer-events-none slow-spin"
      />

      <div className="flex flex-col h-auto justify-center items-center relative text-center max-w-4xl mx-auto my-[8%] gap-6">
        <div className="flex justify-center items-center gap-3">
          <img src={clutchlogo} alt="Clutch Logo" className="h-10 w-10" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-white font-semibold">
              <span className="text-lg">5.0</span>
              <div className="flex gap-[2px] text-red-500 text-lg">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
            <p className="text-base text-gray-300">
              Based on{" "}
              <span className="font-semibold text-white">
                27 Clutch reviews
              </span>
            </p>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Your all-in-one software
          <br />
          development partner.
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-8">
          Your worldwide provider of custom software development and AI
          solutions, helping brands in transforming experiences and driving
          business growth.
        </p>
        <Button variant="solid" />
      </div>

      <StatsCards data={cardData} />
    </section>
  );
};

export default HeroSection;
