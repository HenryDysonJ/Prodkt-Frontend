import Footer from './section/footer';
import SectionFive from './section/sectionFive';
import SectionFour from './section/sectionFour';
import SectionOne from './section/sectionOne';
import SectionThree from './section/sectionThree';
import SectionTwo from './section/sectionTwo';
import ChatBotSection from './section/uploadSection/components/chatBotSection';
import UploadSectionScreen from './section/uploadSection/uploadSectionScreen';



export default function Home() {
  
  return (
    <div className="bg-custom h-full">
      <div className="p-5">
        <SectionOne />
      </div>
      <UploadSectionScreen />
      <SectionTwo />
      <SectionThree />
      {/* <SectionFour /> */}
      <SectionFive />
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
