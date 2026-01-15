const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-secondary relative overflow-hidden">
      {/* Cinematic side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        {/* Section header - Movie chapter style */}
        <div className="mb-16">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-light">The Story</span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4 leading-tight">
            Born to Perform
          </h2>
        </div>

        {/* Bio - Cinematic narrative blocks */}
        <div className="space-y-12 text-lg text-muted-foreground leading-relaxed">
          <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed border-l-2 border-gold pl-6">
            Chico Kane — born Terence Kane Petigny Jean-Charles in Montreal, 1994 — has been captivating audiences since the age of two through music, dance, and stage presence.
          </p>
          
          <p>
            Now based in Toronto for nearly two decades, Chico's passion for performance grew through middle school and high school, where his live shows created a buzz and his music was consistently in demand. That early connection with audiences laid the foundation for his artistic purpose today.
          </p>
        </div>

        {/* Mission - Featured callout */}
        <div className="mt-20 p-8 md:p-12 bg-background/50 border border-border rounded-lg relative">
          <div className="absolute -top-3 left-8">
            <span className="bg-gold text-foreground text-xs tracking-widest uppercase px-4 py-1 font-medium">Mission</span>
          </div>
          <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
            To <span className="text-gold font-medium">heal, inspire, and uplift</span> youth facing mental health challenges through music — rooted in authenticity, self-reflection, and lived experience.
          </p>
        </div>

        {/* Musical Journey */}
        <div className="mt-20">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-light">The Sound</span>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-8">Musical Journey</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A songwriter since sixteen, Chico writes, sings, and raps his own material. His sound is shaped by hip-hop, reggae, salsa, Kompa, and more.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Drawing inspiration from Michael Jackson, Chris Brown, Usher, and the lyrical intensity of A$AP Rocky.
              </p>
            </div>
          </div>
        </div>

        {/* Notable Work - Featured tracks */}
        <div className="mt-20">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-light">Featured</span>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-8">Notable Work</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group p-6 bg-background border border-border rounded-lg hover:border-gold transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <span className="text-2xl">🎵</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Meditation Is Key</h4>
                  <p className="text-sm text-muted-foreground">Co-written with J-Mal</p>
                </div>
              </div>
            </div>
            
            <div className="group p-6 bg-background border border-border rounded-lg hover:border-gold transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <span className="text-2xl">🎬</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Microphone Checka</h4>
                  <p className="text-sm text-muted-foreground">1,000+ YouTube views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
