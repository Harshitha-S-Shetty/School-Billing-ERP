"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <nav className="pt-2 pb-3 lg:fixed w-full bg-white transition-all duration-500 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex justify-between items-center">
            <Image
              src="/Logo.png"
              alt="SerPro Logo"
              className="h-16 w-auto fit"
              width={300}
              height={300}
              unoptimized
            />

            <Link href="/Login">
              <Button className="bg-[var(--blue)] text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-[var(--blue)]">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      <section className="lg:pt-20 pt-0 lg:pl-8 h-full">
        <div className="rounded-2xl bg-blue-50 py-5 overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8 lg:rounded-tl-2xl lg:rounded-bl-2xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:gap-14 gap-5 items-center lg:grid-cols-12 lg:gap32">
              <div className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
                <div className="flex items-center text-sm font-medium text-gray-500 justify-center lg:justify-start">
                  <span className="bg-[var(--blue)] py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3">
                    Admin
                  </span>
                  Mangalore, Karnataka
                </div>
                <h1 className="py-8 text-center text-gray-900 font-bold font-manrope md:text-5xl text-4xl  lg:text-left leading-[50px] md:leading-[60px]">
                  Millat School{" "}
                  <span className="text-[var(--blue)]">
                    Financial Management System
                  </span>
                </h1>
                <p className="text-gray-500 text-lg text-center lg:text-left">
                  Streamline your school's financial operations with our
                  tailored billing solution.
                </p>
                <div className="relative p-0 mt-5 mb-5 flex items-center gap-y-4 h-auto md:h-16 flex-col md:flex-row justify-between ">
                  <Link href="/Dashboard">
                    <button className="bg-[var(--blue)] rounded-full py-3 px-7 text-base font-semibold text-white hover:bg-[var(--blue)] cursor-pointer transition-all duration-500 md:w-fit w-full">
                      Go to Dashboard
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-full xl:col-span-7 lg:col-span-6 block">
                <div className="w-full sm:w-auto lg:w-[60.8125rem] xl:ml-16">
                  <Image
                    src="/dashboardImage.jpg"
                    alt="School ERP Dashboard"
                    height={500}
                    width={500}
                    className="md:rounded-l-3xl rounded-md w-full lg:h-auto"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
