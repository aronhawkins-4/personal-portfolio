import axios from "axios";
import { Project } from "../types/payload-types";
import { WorkCard } from "./WorkCard";
export const WorkSection = async () => {
  const projects: Project[] = (
    await axios.get(`${process.env.PAYLOAD_API_URL}/api/projects`)
  )?.data?.docs;
  if (projects) {
    projects.sort(function (a, b) {
      if (a.order && b.order) {
        return a.order - b.order;
      } else if (a.order && !b.order) {
        return a.order;
      } else if (!a.order && b.order) {
        return b.order;
      } else {
        return 0;
      }
    });
  }

  return (
    <div
      className="w-full max-w-7xl m-auto flex flex-col gap-4 items-start pb-16 self-start px-8 md:px-16"
      id="work"
    >
      <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 via-red-400 to-rose-500 bg-clip-text text-transparent">
        Stuff I&apos;ve Built
      </h2>
      {projects && projects.length > 0 && (
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 w-full gap-8">
          {projects.map((project) => {
            return (
              <WorkCard
                key={project.title}
                title={project.title}
                image={
                  (typeof project.featured_image === "object" &&
                    `${process.env.PAYLOAD_API_URL}${project?.featured_image?.url}`) ||
                  ""
                }
                imageAlt={
                  (typeof project.featured_image === "object" &&
                    project?.featured_image?.alt) ||
                  ""
                }
                description={project.description}
                link={project.link}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
