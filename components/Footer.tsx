import Social from "./Social";
import TextInput from "./UI/TextInput";
import ArrowRightIcon from "../public/assets/icons/arrow_right.svg";
import { FooterMenuList } from "./FooterMenuList";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8 px-5 lg:px-20 lg:py-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-40">
      <div className="space-y-5">
        <h5 className="text-white font-bold">
          Join our club, get 15% off for your Birthday
        </h5>
        <TextInput
          label=""
          placeholder="Enter Your Email Addess"
          value=""
          EndComponent={
            <ArrowRightIcon color="#D1D9CF" width={20} height={20} />
          }
        />
        <div className="space-y-7 mt-24 max-lg:hidden">
          <Social />
          <span className="text-white font-light text-caption-md">
            C 2023 modimal. All Rights Reserved.
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="space-y-3">
          <h5 className="text-white font-bold">About Modimal</h5>
          <FooterMenuList
            itemList={[
              { title: "Collection", href: "" },
              { title: "Sustainability", href: "" },
              { title: "Privacy Policy", href: "" },
              { title: "Support System", href: "" },
              { title: "Terms & Condition", href: "" },
              { title: "Copyright Notice", href: "" },
            ]}
          />
        </div>
        <div className="space-y-3">
          <h5 className="text-white font-bold">Help & Support</h5>
          <FooterMenuList
            itemList={[
              { title: "Orders & Shipping", href: "" },
              { title: "Returns & Refunds", href: "" },
              { title: "Contact Us", href: "contact-us" },
            ]}
          />
        </div>
        <div className="space-y-3">
          <h5 className="text-white font-bold">Join Up</h5>
          <FooterMenuList
            itemList={[
              { title: "Modimal Club", href: "" },
              { title: "Careers", href: "" },
              { title: "Visit Us", href: "" },
              { title: "", href: "" },
              { title: "", href: "" },
            ]}
          />
        </div>
      </div>
      <div className="space-y-7 mt-10 lg:hidden">
        <Social />
        <span className="text-white font-light text-caption-md">
          C 2023 modimal. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
