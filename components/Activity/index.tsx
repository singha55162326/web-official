import Link from "next/link";
import React from "react";

type Props = {};

const Activity = (props: Props) => {
  return (
    <div>
      <div className="container">
        <h1
          style={{ color: "#464647" }}
          className="text-center text-5xl font-bold"
        >
          ກິດຈະກຳ
        </h1>
        <div className="grid w-full grid-cols-1 gap-4 pt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="mb-4 transform transition-transform hover:scale-110">
            <Link href={"/"}>
              <img
                style={{ width: "100%", height: "auto" }}
                src="images/image 43.png"
                alt="activity"
              />
            </Link>
          </div>

          <div className="mb-4 transform transition-transform hover:scale-110">
            <Link href={"/"}>
              <img
                style={{ width: "100%", height: "auto" }}
                src="images/image 42.png"
                alt="activity"
              />
            </Link>
          </div>

          <div className="mb-4 transform transition-transform hover:scale-110">
            <Link href={"/"}>
              <img
                style={{ width: "100%", height: "auto" }}
                src="images/image 44.png"
                alt="activity"
              />
            </Link>
          </div>

          <div className="mb-4 transform transition-transform hover:scale-110">
            <Link href={"/"}>
              <img
                style={{ width: "100%", height: "auto" }}
                src="images/image 45.png"
                alt="activity"
              />
            </Link>
          </div>

          <div className="mb-4 transform transition-transform hover:scale-110">
            <Link href={"/"}>
              <img
                style={{ width: "100%", height: "auto" }}
                src="images/image 46.png"
                alt="activity"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
