export default function About() {
  return (
    <section id="about" className="grid md:grid-cols-2 gap-8 glass p-8">
      <div className="flex items-center justify-center">
        <div className="w-40 h-40 bg-white/10 rounded-full flex items-center justify-center text-gray-500 text-4xl">
          aa
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-300 leading-relaxed">
          <span>高専の機械工学科からソフトウェアエンジニアになりもうした。</span>
          <br/>
          <span>
            ゲームとか何作ろうか考えることがすきです。
          </span>
          <br />
          <span>
            低クオリティと未完成が多いのが悩み
          </span>
        </p>
      </div>
    </section>
  );
}