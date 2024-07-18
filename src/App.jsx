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
        <h1 className="text-[75px] leading-none text-center font-montserrat font-medium">
          Lets Bring Your <br />
          <span className="text-[#b00013]">Vision</span> To Life!
        </h1>
        <p className="text-[#9ca3af] text-2xl font-Roboto font-light">
          Software And Web Development Company
        </p>
        <img className="w-[35%]" src="./public/img/asset 1.png" alt="" />
      </div>
      <div className="w-[1150px] mx-auto py-10">
        <h1 className=" font-montserrat text-3xl font-semibold text-center">
          Services
        </h1>
        <div className="flex">
          <Card
            img1="./public/img/asset 2.svg"
            heading="Software Development"
            bgColor="hover:bg-[#7987FF]"
          />
          <Card
            img1="./public/img/asset 4.svg"
            heading="Machine Learning & AI Solutions"
            bgColor="hover:bg-[#006B6C]"
          />
          <Card
            img1="./public/img/asset 5.svg"
            heading="Graphic & UI/UX Design"
            bgColor="hover:bg-[#FF7613]"
          />
          <Card
            img1="./public/img/asset 6.svg"
            heading="DevOps"
            bgColor="hover:bg-[#AC0434]"
          />
          <Card
            img1="./public/img/asset 7.svg"
            heading="Search Engine Optimization"
            bgColor="hover:bg-[#3E21A0]"
          />
        </div>
      </div>
      <div className="bg-[#F3F4F6]">
        <div className="w-[1150px] mx-auto py-10">
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
              img2="./public/img/asset 8.svg"
              heading3="STARTUP"
              subgeading="Launch Your Idea"
            />
            <Processcard
              img2="./public/img/asset 9.svg"
              heading3="MIDSIZE"
              subgeading="Develop Your Solution"
            />
            <Processcard
              img2="./public/img/asset 10.svg"
              heading3="ENTERPRISE"
              subgeading="Scale Your Business"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#EAEAEA]">
        <div className="w-[1100px] mx-auto py-10">
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
          <div className="flex justify-center pt-5 gap-5 flex-wrap ">
            <Portfolio
              ptheading="Bia"
              ptsubheading="Mobile & Web"
              ptimg="./public/img/asset 11.png"
              bgColor="bg-[#174F6A]"
            />
            <Portfolio
              ptheading="Rent Managemnet "
              ptsubheading="Website"
              ptimg="./public/img/asset 13.png"
              bgColor="bg-[#4B3FE8]"
            />
            <Portfolio
              ptheading="Mobitra"
              ptsubheading="Website"
              ptimg="./public/img/asset 15.png"
              bgColor="bg-[#458FE9]"
            />
            <Portfolio
              ptheading="AMS"
              ptsubheading="Mobile & Web"
              ptimg="./public/img/asset 17.png"
              bgColor="bg-[#000000]"
            />
            <Portfolio
              ptheading="CrewDog"
              ptsubheading="Mobile & Web"
              ptimg="./public/img/asset 12.png"
              bgColor="bg-[#2D71C2]"
            />
            <Portfolio
              ptheading="Painel Constru-(Supplier) "
              ptsubheading="Website"
              ptimg="./public/img/asset 14.png"
              bgColor="bg-[#175A6F]"
            />
            <Portfolio
              ptheading="Image Processing"
              ptsubheading="Website"
              ptimg="./public/img/asset 16.png"
              bgColor="bg-[#151629]"
            />
            <Portfolio
              ptheading="Decod54"
              ptsubheading="Website"
              ptimg="./public/img/asset 18.png"
              bgColor="bg-[#C76336]"
            />
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
      <Companyslider/>
      <Footer/>


    </>
  );
}