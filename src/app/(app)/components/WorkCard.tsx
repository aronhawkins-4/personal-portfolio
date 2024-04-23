import Link from "next/link";
import Image from "next/image";

interface WorkCardProps {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  link: string | null | undefined;
}
export const WorkCard: React.FC<WorkCardProps> = ({
  title,
  image,
  imageAlt,
  description,
  link,
}) => {
  return (
    <Link
      href={link || ""}
      target="_blank"
      className="  bg-gradient-to-r from-slate-900 to-slate-950 rounded-xl overflow-hidden transition-transform duration-500 hover:scale-105 group"
    >
      <div className="w-full aspect-video relative overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-2 p-8 md:p-12 border-t border-white/50">
        <h3 className="text-2xl md:text-3xl uppercase font-semibold">
          {title}
        </h3>
        <p className="text-lg text-gray-300">{description}</p>
      </div>
    </Link>
  );
};
