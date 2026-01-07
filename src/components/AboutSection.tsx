const AboutSection = () => {
  const singles = [
    { title: "Meditation Is Key", year: "2021" },
    { title: "Not With This Team", year: "2022" },
    { title: "Haffi Know", year: "2023" },
    { title: "SPILLIN MY TRUTH (Radio Edit)", year: "2025" },
  ];

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About</h2>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </div>

        {/* Bio */}
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
          <p>
            <span className="text-foreground font-semibold">Chico Kane</span> (Terence Kane Petigny Jean-Charles) 
            is an independent hip-hop and rap artist releasing original music across major digital platforms.
          </p>
          <p>
            Known for his <span className="text-gold font-medium">raw expression</span>, 
            <span className="text-gold font-medium"> reflective lyrics</span>, and 
            <span className="text-gold font-medium"> authentic storytelling</span>, 
            Chico Kane uses his music to speak truth, growth, and lived experience.
          </p>
          <p>
            His work reflects independence, persistence, and dedication to building his brand organically. 
            Chico Kane actively connects with his audience through social media, sharing music, visuals, 
            and moments from his creative journey.
          </p>
        </div>

        {/* Singles showcase */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Featured Singles (2021-2025)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {singles.map((single) => (
              <div
                key={single.title}
                className="bg-background border border-border p-4 rounded-lg text-center hover:border-gold transition-colors"
              >
                <div className="w-full aspect-square bg-gradient-to-br from-gold/20 to-gold-dark/20 rounded-md mb-3 flex items-center justify-center">
                  <span className="text-4xl">🎵</span>
                </div>
                <p className="font-medium text-foreground text-sm leading-tight">{single.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{single.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
