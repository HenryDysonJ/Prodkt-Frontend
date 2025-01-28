import CardBellIcon from '../assets/cardBellIcon';
import CardMultiProductsIcon from '../assets/cardMultiProducts';
import CardBotIcon from '../assets/cardSection';

export default function SectionThree() {
  return (
    <div>
      <p className="text-secTwoHeaderColorOne text-[30px] lg:text-secTwoFontSize font-bold pt-[40px] lg:pt-20 pb-[40px] lg:pb-20 text-center">
        Why <span className="text-secTwoHeaderColorTwo">Choose Prodkt?</span>
      </p>
      <div className="px-secTwoPaddingXSm md:px-secTwoPaddingXMd lg:px- xl:px-[204px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 rounded-firstSection">
          <div className="cardStyle">
            <div className="cardIconCircleStyle">
              <CardBotIcon />
            </div>
            <p className="cardHeader">
              Interactive <br />
              Chatbot Support
            </p>
            <p className="cardDescription">
              Our chatbot answers all product-related
              <br />
              questions, including warranties,
              <br />
              maintenance, and more, serving as your
              <br />
              reliable ownership companion.
            </p>
          </div>
          <div className="cardStyle">
            <div className="cardIconCircleStyle">
              <CardBellIcon />
            </div>
            <p className="cardHeader">
              Personalized <br />
              Reminders
            </p>
            <p className="cardDescription">
              Get personalized reminders for
              <br />
              maintenance, warranties, and
              <br />
              updates.
            </p>
          </div>
          <div className="cardStyle">
            <div className="cardIconCircleStyle">
              <CardMultiProductsIcon />
            </div>
            <p className="cardHeader">
              One App, Multiple <br />
              Products
            </p>
            <p className="cardDescription">
              Simplified ownership with a unified
              <br />
              platform. Easily add and manage
              <br />
              multiple products in a user-friendly
              <br />
              interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
