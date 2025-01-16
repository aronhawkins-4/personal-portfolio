import { Project } from '../types/payload-types';
import { WorkCard } from './WorkCard';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
export const WorkSection = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const projects = await payload.find({
    collection: 'projects',
  });
  const projectsDocs = (projects.docs as unknown as Project[]) || undefined;
  if (projectsDocs) {
    projectsDocs.sort(function (a, b) {
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
    <div className='w-full max-w-7xl m-auto flex flex-col gap-4 items-start pb-16 self-start px-8 md:px-16' id='work'>
      <h2 className='text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 via-red-400 to-rose-500 bg-clip-text text-transparent'>Stuff I&apos;ve Built</h2>
      {projectsDocs && projectsDocs.length > 0 && (
        <div className='py-8 grid grid-cols-1 md:grid-cols-2 w-full gap-8'>
          {projectsDocs.map((project) => {
            return (
              <WorkCard
                key={project.title}
                title={project.title}
                image={(typeof project.featured_image === 'object' && `${project?.featured_image?.url}`) || ''}
                imageAlt={(typeof project.featured_image === 'object' && project?.featured_image?.alt) || ''}
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
