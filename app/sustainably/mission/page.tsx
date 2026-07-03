import Button from "@/components/UI/Button";
import Image from "next/image";

function Paragraph({ title, caption }: { title: string; caption: string }) {
  return (
    <div className="space-y-2">
      <h5 className="text-black">{title}</h5>
      <p className="text-black text-body-lg font-light">{caption}</p>
    </div>
  );
}

export default function Sustainably() {
  return (
    <main>
      <div className="relative w-full h-[600]">
        <Image src="/assets/images/pic-sustainability.png" alt="" fill />
        <h2 className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white">
          Elegance in simplicity, Earth’s harmony
        </h2>
      </div>
      <section className="container">
        <div className="space-y-4">
          <h3>sustainability at modimal</h3>
          <p>
            At Modimal, sustainability is at the heart of everything we do. Our
            brand identity, characterized by its simplicity and elegance, is a
            reflection of our commitment to a more sustainable future.
          </p>
          <h4 className="text-black">Our Mission, The Modimal six:</h4>
          <section className="grid grid-cols-2 gap-x-19 gap-y-9">
            <Paragraph
              title="Minimalism"
              caption="  we believe less is more. Our thoughtfully design pieces embrace
                minimalism ensuring that garment becomes a versatile and
                timeless addition to your wardrobe. by choosing quality over
                quantity, we encourage conscious consumption."
            />
            <Paragraph
              title="Circular"
              caption="    Embracing the circular economy, we design with longevity in
                mind. Our pieces are intended to be treasured for years,
                encouraging a shift away from disposable fashion. When you
                invest in our clothing, you are investing in a more sustainable
                future."
            />
            <Paragraph
              title="Ethical"
              caption="  Every stitch tells a story. Our garments are meticulously
                crafted by skilled artisans who share our values of ethical and
                fair labor practices. This dedication to craftsmanship not only
                ensures exceptional quality but also supports a network of
                talented individuals."
            />
            <Paragraph
              title="Transparency"
              caption=" We value openness and transparency. We're on a journey to continuously improve our practices, and we're committed to sharing our progress with you. From sourcing to production, we want you to know the story behind each piece you wear. we are updating all  information very six months."
            />
            <Paragraph
              title="Eco - Freindly Materials"
              caption=" We are dedicated to reducing our environmental impact. Our clothing is made using sustainable materials, carefully sourced to minimize harm to the planet. From organic fabrics to innovative recycled materials, we aim to leave a lighter footprint."
            />
            <Paragraph
              title="Community And Empowerment"
              caption=" Our brand is a part of a community that shares a vision for a better world. Through collaborations and initiatives, we aim to inspire and empower individuals to make conscious choices and contribute to positive change."
            />
          </section>
          <p className="text-justify text-body-xl text-black font-light">
            Guided by our core missions, we intertwine sustainability into every
            thread of our brand, from thoughtfully sourced materials and
            innovative manufacturing process to nurturing product longevity and
            embracing eco-friendly packaging <br /> – all harmonizing to create
            a more meaningful and responsible approach to fashion.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 items-center">
          <figure className="space-y-4">
            <div className="relative w-full h-[533]">
              <Image
                src="/assets/images/sustainably/mission/pic1.png"
                alt="modimal-sustainably"
                objectFit="cover"
                fill
              />
            </div>
            <Button variant="primary" className="w-full py-3">
              Processing
            </Button>
          </figure>
          <figure className="space-y-4">
            <div className="relative w-full h-[852]">
              <Image
                src="/assets/images/sustainably/mission/pic3.png"
                alt="modimal-sustainably"
                objectFit="cover"
                fill
              />
            </div>
            <Button variant="primary" className="w-full py-3">
              Materials
            </Button>
          </figure>
          <figure className="space-y-4">
            <div className="relative w-full h-[852]">
              <Image
                src="/assets/images/sustainably/mission/pic4.png"
                alt="modimal-sustainably"
                objectFit="cover"
                fill
              />
            </div>
            <Button variant="primary" className="w-full py-3">
              Packaging
            </Button>
          </figure>
          <figure className="space-y-4">
            <div className="relative w-full h-[533]">
              <Image
                src="/assets/images/sustainably/mission/pic2.png"
                alt="modimal-sustainably"
                objectFit="cover"
                fill
              />
            </div>
            <Button variant="primary" className="w-full py-3">
              Product Caring
            </Button>
          </figure>
        </div>
        <p className="text-justify text-body-xl text-black font-light">
          &quot;With every step, our quest for sustainability is fortified by
          our trusted suppliers, united in our shared dedication to <br />{" "}
          ethical craftsmanship and a more conscious future.&quot;
        </p>
        <div className="space-y-3">
          <h4 className="text-black">People Beyond Us</h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 min-h-[243]">
            <figure className="relative">
              <Image
                src="/assets/images/sustainably/mission/sustain-ppl-1.png"
                alt=""
                objectFit="cover"
                fill
              />
            </figure>
            <figure className="relative">
              <Image
                src="/assets/images/sustainably/mission/sustain-ppl-2.png"
                alt=""
                objectFit="cover"
                fill
              />
            </figure>
            <figure className="relative col-span-2">
              <Image
                src="/assets/images/sustainably/mission/sustain-ppl-3.png"
                alt=""
                objectFit="cover"
                fill
              />
            </figure>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 min-h-[243]">
            <figure className="relative col-span-5">
              <Image
                src="/assets/images/sustainably/mission/sustain-ppl-4.png"
                alt=""
                objectFit="cover"
                fill
              />
            </figure>
            <figure className="relative col-span-2">
              <Image
                src="/assets/images/sustainably/mission/sustain-ppl-5.png"
                alt=""
                objectFit="cover"
                fill
              />
            </figure>
            <figure className="relative col-span-2">
              <Image
                src="/assets/images/sustainably/mission/sustain-ppl-6.png"
                alt=""
                objectFit="cover"
                fill
              />
            </figure>
            <figure className="relative col-span-3">
              <Image
                src="/assets/images/sustainably/mission/sustain-ppl-7.png"
                alt=""
                objectFit="cover"
                fill
              />
            </figure>
          </div>
          <Button variant="primary" className="mx-auto w-2/5 py-2">
            Our Suppliers
          </Button>
          <p className="text-black text-body-xl font-light">
            With Modimal, you are not just wearing fashion – you are making a
            statement. A statement that elegance and sustainability can coexist,
            shaping a more responsible and beautiful future for us all.
          </p>
        </div>
      </section>
    </main>
  );
}
