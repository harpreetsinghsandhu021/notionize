import { LampContainer } from "@/components/ui/lamp";
import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { FlipWords } from "@/components/ui/flipWords";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/containerScroll";
import { Tabs } from "@/components/ui/tabs";

const MarketingPage = () => {
  return (
    <div className="flex  flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center  justify-center md:justify-start text-center gap-y-8 flex-1 ">
        <Heading />

        <div className="">
          <Image
            src={"/Sally-4.png"}
            alt=""
            width={700}
            className=" absolute -right-32 top-10 w-[700px] h-auto bg-none"
            height={700}
          />
          <Image
            src={"/Saly-3.png"}
            alt=""
            width={800}
            className="absolute bottom-0  -left-40 w-[500px] h-auto bg-none"
            height={800}
          />
          <ContainerScroll>
            <Image
              src={"/mac-hero.webp"}
              alt=""
              width={1000}
              className=" w-[680px] h-auto"
              height={1000}
            />
          </ContainerScroll>
        </div>
      </div>

      <div className="h-[800px] -mt-20 w-[72%] mx-auto ">
        <Tabs
          tabs={[
            {
              title: "Engeering",
              value: "engineering",
              content: <TabSlide src="d1" />,
            },
            {
              title: "Design",
              value: "design",
              content: <TabSlide src="d2" />,
            },
            {
              title: "Product",
              value: "product",
              content: <TabSlide src="d3" />,
            },
            {
              title: "Marketing",
              value: "marketing",
              content: <TabSlide src="d4" />,
            },
            {
              title: "Operations",
              value: "operations",
              content: <TabSlide src="d5" />,
            },
          ]}
        />
      </div>
      <div className="flex flex-col relative items-center  py-40 justify-center md:justify-start text-center gap-y-8 flex-1 ">
        <Heading />
        <Image
          src={"/Saly-7.png"}
          alt=""
          width={700}
          className="w-[250px] absolute left-0 top-10 h-auto bg-none"
          height={700}
        />
        <Image
          src={"/Saly-15.png"}
          alt=""
          width={700}
          className="w-[280px] absolute right-36 top-100 h-auto bg-none"
          height={700}
        />

        <Image
          src={"/Saly-22.png"}
          alt=""
          width={700}
          className="w-[280px] absolute left-40 top-60 h-auto bg-none"
          height={700}
        />

        <Image
          src={"/Saly-34.png"}
          alt=""
          width={700}
          className="w-[280px] absolute -right-10 top-0 h-auto bg-none"
          height={700}
        />
      </div>
    </div>
  );
};

function TabSlide({ src }: { src: string }) {
  return (
    <div className="border rounded-2xl overflow-hidden">
      <Image
        src={`/${src}.webp`}
        alt=""
        className="w-full  h-[640px]"
        width={900}
        height={800}
      />
    </div>
  );
}

export default MarketingPage;
