import React from "react";
import Header from "./Components/Header";
import Card from "./Components/card";
import Processcard from "./Components/Processcard";
import Portfolio from "./Components/Portfolio";
import Teamcard from "./Components/teamcard";
import Companyslider from "./Companyslider";
import Footer from "./Components/Footer";
import OurClients from "./Components/OurClients";

export default function App() {
  return (
    <>
      <Header />
      <div className="bg-[#F6F6F6] flex justify-between flex-col items-center pt-5">
        <h1 className="md:text-[75px] sm:text-5xl text-3xl leading-none text-center font-montserrat font-medium">
          Lets Bring Your <br />
          <span className="text-[#b00013]">Vision</span> To Life!
        </h1>
        <p className="text-[#9ca3af] md:text-2xl text-lg font-Roboto font-light">
          Software And Web Development Company
        </p>
        <img
          className="sm:w-[35%] w-[100%]"
          src="/img/asset 1.png"
          alt=""
        />
      </div>
      <div className="md:w-[1150px] w-[95%] mx-auto py-10">
        <h1 className=" font-montserrat text-3xl font-semibold text-center">
          Services
        </h1>
        <div className="md:flex hidden">
          <Card
            img1="/img/asset 2.svg"
            heading="Software Development"
            bgColor="hover:bg-[#7987FF]"
          />
          <Card
            img1="/img/asset 4.svg"
            heading="Machine Learning & AI Solutions"
            bgColor="hover:bg-[#006B6C]"
          />
          <Card
            img1="/img/asset 5.svg"
            heading="Graphic & UI/UX Design"
            bgColor="hover:bg-[#FF7613]"
          />
          <Card
            img1="/img/asset 6.svg"
            heading="DevOps"
            bgColor="hover:bg-[#AC0434]"
          />
          <Card
            img1="/img/asset 7.svg"
            heading="Search Engine Optimization"
            bgColor="hover:bg-[#3E21A0]"
          />
        </div>
        <div className="md:hidden sm:flex ">
          <div className="flex sm:w-1/2">
            <Card
              img1="/img/asset 2.svg"
              heading="Software Development"
              bgColor="hover:bg-[#7987FF]"
            />
            <Card
              img1="/img/asset 4.svg"
              heading="Machine Learning & AI Solutions"
              bgColor="hover:bg-[#006B6C]"
            />
          </div>
          <div className="flex sm:w-1/2">
            <Card
              img1="/img/asset 5.svg"
              heading="Graphic & UI/UX Design"
              bgColor="hover:bg-[#FF7613]"
            />
            <Card
              img1="/img/asset 6.svg"
              heading="DevOps"
              bgColor="hover:bg-[#AC0434]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F3F4F6]">
        <div className="md:w-[1150px] w-[95%] mx-auto py-10">
          <h1 className=" font-montserrat text-3xl font-semibold text-center">
            Process
          </h1>
          <p className="text-center">
            We take responsibility for the entire lifecycle of a system,
            including Research, Design, Development, Testing, Implementation,
            <br />
            and Integration.
          </p>
          <div className="flex pt-5">
            <Processcard
              img2="/img/asset 8.svg"
              heading3="STARTUP"
              subgeading="Launch Your Idea"
            />
            <Processcard
              img2="/img/asset 9.svg"
              heading3="MIDSIZE"
              subgeading="Develop Your Solution"
            />
            <Processcard
              img2="/img/asset 10.svg"
              heading3="ENTERPRISE"
              subgeading="Scale Your Business"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#EAEAEA]">
        <div className="md:w-[1100px] w-[95%] mx-auto py-10">
          <h1 className=" font-montserrat text-3xl font-semibold text-center ">
            Portfolio
          </h1>
          <p className="tracking-[4px] text-center font-montserrat pt-3">
            Exploring Creations
          </p>
          <p className="text-center font-sans text-lg pt-2">
            Explore our impressive portfolio of Digital Innovations, where ideas
            come to Life & Solutions
            <br /> Transform Businesses.
          </p>
          <div className="sm:flex  hidden justify-center pt-5 gap-5 flex-wrap ">
            <Portfolio
              ptheading="Bia"
              ptsubheading="Mobile & Web"
              ptimg="/img/asset 11.png"
              bgColor="bg-[#174F6A]"
            />
            <Portfolio
              ptheading="Rent Managemnet "
              ptsubheading="Website"
              ptimg="/img/asset 13.png"
              bgColor="bg-[#4B3FE8]"
            />
            <Portfolio
              ptheading="Mobitra"
              ptsubheading="Website"
              ptimg="/img/asset 15.png"
              bgColor="bg-[#458FE9]"
            />
            <Portfolio
              ptheading="AMS"
              ptsubheading="Mobile & Web"
              ptimg="/img/asset 17.png"
              bgColor="bg-[#000000]"
            />
            <Portfolio
              ptheading="CrewDog"
              ptsubheading="Mobile & Web"
              ptimg="/img/asset 12.png"
              bgColor="bg-[#2D71C2]"
            />
            <Portfolio
              ptheading="Painel Constru-(Supplier) "
              ptsubheading="Website"
              ptimg="/img/asset 14.png"
              bgColor="bg-[#175A6F]"
            />
            <Portfolio
              ptheading="Image Processing"
              ptsubheading="Website"
              ptimg="/img/asset 16.png"
              bgColor="bg-[#151629]"
            />
            <Portfolio
              ptheading="Decod54"
              ptsubheading="Website"
              ptimg="/img/asset 18.png"
              bgColor="bg-[#C76336]"
            />
          </div>
          <div className="sm:hidden flex justify-center pt-5 gap-5 flex-wrap ">
           <div className="flex gap-5 w-full">
           <Portfolio
              ptheading="Bia"
              ptsubheading="Mobile & Web"
              ptimg="/img/asset 11.png"
              bgColor="bg-[#174F6A]"
            />
            <Portfolio
              ptheading="Rent Managemnet "
              ptsubheading="Website"
              ptimg="/img/asset 13.png"
              bgColor="bg-[#4B3FE8]"
            />
           </div>
            <div className="flex gap-5 w-full">
            <Portfolio
              ptheading="Mobitra"
              ptsubheading="Website"
              ptimg="/img/asset 15.png"
              bgColor="bg-[#458FE9]"
            />
            <Portfolio
              ptheading="AMS"
              ptsubheading="Mobile & Web"
              ptimg="/img/asset 17.png"
              bgColor="bg-[#000000]"
            />
            </div>
            <div className="flex gap-5 w-full">
            <Portfolio
              ptheading="CrewDog"
              ptsubheading="Mobile & Web"
              ptimg="/img/asset 12.png"
              bgColor="bg-[#2D71C2]"
            />
            <Portfolio
              ptheading="Painel Constru-(Supplier) "
              ptsubheading="Website"
              ptimg="/img/asset 14.png"
              bgColor="bg-[#175A6F]"
            />
            </div>
            <div className="flex gap-5 w-full">
            <Portfolio
              ptheading="Image Processing"
              ptsubheading="Website"
              ptimg="/img/asset 16.png"
              bgColor="bg-[#151629]"
            />
            <Portfolio
              ptheading="Decod54"
              ptsubheading="Website"
              ptimg="/img/asset 18.png"
              bgColor="bg-[#C76336]"
            />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 font text-center">
        <h1 className="font-semibold text-4xl font-montserrat">
          Directorial Duo
        </h1>
        <h1 className=" text-lg font-montserrat tracking-[4px]">
          See Our Leading Pair
        </h1>
      </div>
      <Teamcard />
      <div className="py-10 font text-center">
        <h1 className="font-semibold text-4xl font-montserrat">
          Featured Clients
        </h1>
      </div>
      <Companyslider />
      <Footer />
    </>
  );
}
