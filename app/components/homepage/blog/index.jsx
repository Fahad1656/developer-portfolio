import Image from "next/image";
import { blogs } from "@/utils/data/educations";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from "/public/lottie/anm.json";

const BlogItem = ({ title, authors, description, published_at, url }) => (
  <div className="p-3 relative text-white">
    <Image
      src="/blur-23.svg"
      alt="Hero"
      width={1080}
      height={200}
      className="absolute bottom-0 opacity-80"
    />
    <div className="flex items-center gap-x-8 px-3 py-5 relative z-10">
      <div>
        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
          {title}
        </p>
        <p className="text-sm sm:text-base">Authors - [{authors}]</p>
        <p>
          <br />
        </p>
        <p className="text-sm sm:text-base mt-2">Description - {description}</p>
        <p>
          <br />
        </p>
        <p className="text-sm sm:text-base mt-2">
          Date of Publication - {published_at}
        </p>
        <p>
          <br />
        </p>
        <p className="text-sm sm:text-base mt-2">
          {" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-500 hover:underline"
          >
            CLICK HERE TO VISIT
          </a>
        </p>
      </div>
    </div>
  </div>
);

function Blog() {
  return (
    <div
      id="publications"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            PUBLICATIONS
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {blogs.map((blog) => (
                <GlowCard key={blog.id} identifier={`blog-${blog.id}`}>
                  <BlogItem
                    title={blog.title}
                    authors={blog.authors}
                    description={blog.description}
                    published_at={blog.published_at}
                    url={blog.url}
                  />
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
