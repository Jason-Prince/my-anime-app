import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Anime App</title>
      </Head>
      <body>
        <nav>
          <div>Logo</div>
          <div>Search</div>
          <div>
            <button>Shows</button>
            <div>
              <a href="#">All Shows</a>
              <a href="#">Recently Added</a>
              <a href="#">Popular Shows</a>
              <a href="#">Subbed Shows</a>
              <a href="#">Dubbed Shows</a>
            </div>
          </div>
          <div>
            <button>Simulcasts</button>
            <div>
              <a href="#">Simulcasting Now</a>
              <a href="#">Recently Aired</a>
              <a href="#">Simulcast Schedule</a>
            </div>
          </div>
          <div>
            <button>Movies</button>
          </div>
          <div>
            <button>Genres</button>
            <div>
              <a href="#">Action</a>
              <a href="#">Adventure</a>
              <a href="#">Bishonen</a>
              <a href="#">Bishoujo</a>
              <a href="#">Comedy</a>
              <a href="#">Drama</a>
              <a href="#">Fan Service</a>
              <a href="#">Fantasy</a>
              <a href="#">Gaming</a>
              <a href="#">Harem</a>
              <a href="#">Historical</a>
              <a href="#">Horror</a>
              <a href="#">Idol</a>
              <a href="#">Isekai</a>
              <a href="#">Kids</a>
              <a href="#">Magical Girl</a>
              <a href="#">Martial Arts</a>
              <a href="#">Mecha</a>
              <a href="#">Moe</a>
              <a href="#">Mystery</a>
              <a href="#">Offbeat</a>
              <a href="#">Reverse Harem</a>
              <a href="#">Romance</a>
              <a href="#">School</a>
              <a href="#">Sci-Fi</a>
              <a href="#">Shonen</a>
              <a href="#">Slice of Life</a>
              <a href="#">Space</a>
              <a href="#">Sports</a>
              <a href="#">Super Powers</a>
              <a href="#">Supernatural</a>
              <a href="#">Yuri</a>
            </div>
          </div>
          <button>Signup for My Anime</button>
          <button>Sign In</button>
        </nav>
        {/* carousel section */}
        <section>slide show</section>
        {/* carousel section*/}
        <section>
          <div>Simulcats</div>
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
