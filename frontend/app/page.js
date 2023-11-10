import NavBar from "../components/navbar";
import Carousel from "../components/carousel";
import Sliders from "../components/sliders/sliders";

const getCarouselItems = async () => {
  const env = process.env.NODE_ENV;

  var url;
  if (env === "production")
    url = process.env.SERVER_PROD_URL + "/get-carousel-items";
  else if (env === "development")
    url = process.env.SERVER_DEV_URL + "/get-carousel-items";

  const res = await fetch(url);

  return res.json();
};

export default async function Home() {
  const carouselItems = await getCarouselItems();
  console.log(carouselItems);
  return (
    <div className='min-h-screen bg-[#0A0D12]'>
      <NavBar />
      <Carousel items={carouselItems} />
      <Sliders />
    </div>
  );
}
