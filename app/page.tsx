import Hero from "@/components/home/Hero";
import Routes from "@/components/home/Routes";
import Disciplines from "@/components/home/Disciplines";
import Duurzaam from "@/components/home/Duurzaam";
import ProjectSelect from "@/components/home/ProjectSelect";
import Werkwijze from "@/components/home/Werkwijze";
import Onderhoud from "@/components/home/Onderhoud";
import Winkel from "@/components/home/Winkel";
import Timeline from "@/components/home/Timeline";
import Erkenningen from "@/components/home/Erkenningen";
import WerkenBij from "@/components/home/WerkenBij";
import ContactBand from "@/components/home/ContactBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Routes />
      <Disciplines />
      <Duurzaam />
      <ProjectSelect />
      <Werkwijze />
      <Onderhoud />
      <Winkel />
      <Timeline />
      <Erkenningen />
      <WerkenBij />
      <ContactBand />
    </>
  );
}
