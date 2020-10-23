import Head from "../components/headTitleMeta";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Head />
      <body>
        <Navbar />
        {/* carousel slide show container */}
        <section>
          slide show
          {/* slide container */}
          <div>slide</div>
        </section>
        {/* carousel shelfs container */}
        <section>
          {/* shelf container */}
          <div>
            Simulcats
            {/* shelf card container */}
            <div>shelf card</div>
          </div>
          <div>Trending Now</div>
          <div>Popular Shows</div>
          <div>Recently Added Shows</div>
          <div>Fresh Dubs</div>
          <div>Latest Movies</div>
          <div>Studio Spotlight - Kyoto Animation</div>
          <div>Titles Similar to Akira</div>
          <div>Feel-Good Anime</div>
          <div>Director Spotlight - Akiyuki Shinbo</div>
          <div>Treto Classics</div>
          <div>Idols</div>
          <div>Voice Actor Spotlight - Yoshitsugu Matsuoka</div>
          <div>Movie Tie-ins</div>
          <div>Dragon Ball Collection</div>
          <div>All Dubbed</div>
          <div>All Subbed</div>
          <div>Genres</div>
          <div>All Titles (a-z)</div>
        </section>
        <footer>this is the footer</footer>
      </body>
    </div>
  );
}
