import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "自動クリックtool",
    desc: "画面のクリックしたところを記録し、指定した回数を繰り返しで順番にクリックするツール",
    link: "https://github.com/NiiJurin/Auto_MouthClick",
  },
  {
    title: "Project 2",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    link: "https://github.com/NiiJurin/Project2"
  },
  {
    title: "Project 3",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    link: "https://github.com/NiiJurin/Project3"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="glass p-8">
      <h2 className="text-2xl font-semibold mb-6">作ったもの</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectData.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
