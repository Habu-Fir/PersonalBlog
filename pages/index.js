import Image from "next/image";
import Format from "../layout/format";
import SectionOne from "../components/section-one";
import SectionTwo from "../components/section-two";
import SectiontThree from "../components/section-three";
import SectionFour from "../components/section-four";

export default function Home() {
  return (
    <Format>
      <SectionOne />
      <SectionTwo />
      <SectiontThree />
      <SectionFour />
    </Format>
  );
}
