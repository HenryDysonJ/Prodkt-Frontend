import Link from "next/link";
import FooterLogo from "../assets/footerlogo";

export default function Footer() {

  return (
    <div className="bg-black h-footerHeight">
      <div className="lg:w-4/5 md:w-4/5 sm:w-full xs:w-full m-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 px-10 px-10 border-b border-gray-400 pb-2">
          <div className="flex justify-center lg:justify-start pt-logoTop pl-[12px] lg:pl-0 pb-2">
            <FooterLogo className="w-[150px]" />
          </div>
          <div className="lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2  gap-6 flex justify-end">
            <Link href={"/privacyPolicy"}>
              <button type="button"
                className="text-[16px] text-white font-regular text-custom font-poppins pt-logoTop text-end">Privacy policy</button>
            </Link>
            <Link href={"/gdprCompliance"}>
              <button type="button"
                className="text-[16px] text-white font-regular text-custom font-poppins pt-logoTop text-end">GDPR Compliance</button>
            </Link>
          </div>
        </div>
        <div className="p-6">
          <p className="text-[12px] text-white text-custom font-poppins text-center">©The names and logos for Prodkt are trademarks of Crayon’d Digital Pvt Ltd. All other trademarks, brand names, or product names belong to their respective holders. </p>
        </div>
      </div>

    </div>
  );
}
