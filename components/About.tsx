import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-10">
        <BentoGridItem
          id={6}
          title={"Overview"}
          description={
            "Description of the grid item ( displayed below ) ( displayed below )Description of the grid item ( displayed below ) ( displayed below )Description of the grid item ( displayed below ) ( displayed below )Description of the grid item ( displayed below ) ( displayed below )"
          }
          // remove icon prop
          // remove original classname condition
          className={"lg:col-span-6 md:col-span-3 md:row-span-1"}
          img={""}
          imgClassName={""}
          titleClassName={"justify-center md:max-w-full max-w-full text-center"}
          spareImg={""}
        />
      </BentoGrid>
    </section>
  );
};

export default Grid;
