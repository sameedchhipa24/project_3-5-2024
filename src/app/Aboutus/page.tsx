import React from "react";
import Mobile from "@/../public/assets/Group1000001975.png";
import globe from "@/../public/assets/globe.png";
import Image from "next/image";
const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto pb-40">
      <div className="flex justify-evenly items-center">
        {/* upper side */}
        <div className="w-[511px]">
          <h1 className="text-gradient1 text-4xl pt-12 ">Get To Know PoliSwap</h1>
          <div className="">
            <h2 className="font-bold text-global pt-10">1. Types data we collect</h2>
            <p className="text-global pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-global pt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-global pt-4">2. Use of your personal data</h2>
            <p className="text-global pt-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-global pt-4">3. Disclosure of your personal data</h2>
            <p className="text-global pt-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
            <p className="text-global pt-4">
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={Mobile}
            alt="DigitalMobile"
            width={532}
            height={611}
            className=""
          />
        </div>
      </div>
      <div className="flex justify-around items-center flex-row-reverse">
        {/* down side */}
        <div className=" w-[511px]">
          <div>
            <h2 className="font-bold text-global pt-4">1. Types data we collect</h2>
            <p className="text-global pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <p className="text-global pt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident
            </p>
          </div>
          <div>
            <h2 className="font-bold text-global pt-4">2. Use of your personal data</h2>
            <p className="text-global pt-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae.
            </p>
            <p className="text-global pt-4">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-global pt-4">3. Disclosure of your personal data</h2>
            <p className="text-global pt-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
            <p className="text-global">
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus.
            </p>
          </div>
        </div>
        <div>
          <Image src={globe} alt="globe" width={569} height={569} />
        </div>
      </div>
    </div>
  );
};

export default page;
