import { memo } from "react";

function ProjectCard({ title, desc , link}) {
  return (
    <div className="glass p-4 flex flex-col justify-between min-h-[150px]">
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-emerald-400 text-sm hover:underline"
      >
        詳細 →
      </a>
    </div>
  );
}

export default memo(ProjectCard);
