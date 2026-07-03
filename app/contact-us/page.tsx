import CallUs from "@/components/contact-us/CallUs";
import ChatWithUsBox from "@/components/contact-us/ChatWithUsBox";
import EmailUs from "@/components/contact-us/EmailUs";
import Form from "@/components/contact-us/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s | Modimal", default: "Contact Us" },
};

export const revalidate = 0;

export default function ContactUs() {
  return (
    <main className="container space-y-3 lg:space-y-8 mb-12!">
      <h3 className="text-black">Contact Us</h3>
      <section className="bg-primary-25 py-2 px-4 lg:space-y-5">
        <p className="text-black text-body-md">
          We always love hearing from our customers! Please do not hesitate to
          contact us should you have any questions regarding our products and
          sizing recommendations or inquiries about your current order.
        </p>
        <p className="text-black text-body-md">
          Contact our Customer Care team through the contact form below, email
          us at hello@modimal.com or live chat with us via our chat widget on
          the bottom right hand corner of this page.
        </p>
        <p className="text-black text-body-md">
          We will aim to respond to you within 1-2 business days.
        </p>
      </section>
      <section className="w-full lg:w-10/12 mx-auto mb-10 space-y-4">
        <h4 className="text-black">Write Us</h4>
        <h5 className="text-black">Your Information</h5>
        <Form />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mt-20">
        <ChatWithUsBox />
        <CallUs />
        <EmailUs />
      </section>
    </main>
  );
}
