import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "自動クリックtool",
    desc: "画面のクリックしたところを記録し、指定した回数を繰り返しで順番にクリックするツール",
    link: "https://github.com/NiiJurin/Auto_MouthClick",
  },
  {
    title: "Portfolio Website",
    desc: "React + Tailwind CSSで作成したポートフォリオサイト。レスポンシブデザインとモダンなUIを実装。",
    link: "https://github.com/NiiJurin/Portfolio"
  },
  {
    title: "進行中のプロジェクト",
    desc: "新しいアイデアを形にしているところ...もうすぐ公開予定です！",
    link: "https://github.com/NiiJurin"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="glass p-8 slide-up">
      <h2 className="text-2xl font-semibold mb-6">作ったもの</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectData.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
