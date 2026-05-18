import Banner from "@/components/Banner";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
       <Banner/>
       <Stats/>
       <WhyUs/>
    </div>
  );
}
