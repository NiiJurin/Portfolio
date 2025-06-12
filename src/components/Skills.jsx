const skills = [
  { name: "C#", level: 60 },
  { name: "python", level: 60 },
  { name: "bash", level: 50 },
  { name: "TypeScript", level: 20 },
];

export default function Skills() {
  return (
    <section id="skills" className="glass p-8">
      <h2 className="text-2xl font-semibold mb-6">使用する言語</h2>
      <div className="space-y-4">
        {skills.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between text-sm mb-1">
              <span>{s.name}</span>
              <span>{s.level}%</span>
            </div>
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}