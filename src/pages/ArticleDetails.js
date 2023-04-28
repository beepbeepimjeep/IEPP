import "./ArticleDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
const ArticleDetails = () => {
  return (
    <div>
      <Header />
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-12">
            {/* Post content */}
            <article>
              {/* <!-- Post header--> */}
              <header class="mb-4">
                {/* <!-- Post title--> */}
                <h1 class="fw-bolder mb-1">Scammers use AI to enhance their family emergency schemes</h1>
                {/* <!-- Post meta content--> */}
                <div class="text-muted fst-italic mb-2">
                  Posted on March 20, 2023 | By Alvaro Puig
                </div>
                {/* <!-- Post categories--> */}
                {/* <a
                  class="badge bg-secondary text-decoration-none link-light"
                  href="#!"
                >
                  Web Design
                </a>
                <a
                  class="badge bg-secondary text-decoration-none link-light"
                  href="#!"
                >
                  Freebies
                </a> */}
              </header>
              {/* <!-- Preview image figure--> */}
              <figure class="mb-4">
                <img
                  class="img-fluid rounded articleImageFormat"
                  // src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"
                  src="./familyscam.png"
                  alt="..."
                />
              </figure>
              {/* <!-- Post content--> */}
              <section class="mb-5">
                <p class="fs-5 mb-4">
                Artificial intelligence is no longer a far-fetched idea out of a
                sci-fi movie. We're living with it, here and now. A scammer
                could use AI to clone the voice of your loved one. All he needs
                is a short audio clip of your family member's voice — which he
                could get from content posted online — and a voice-cloning
                program. When the scammer calls you, he’ll sound just like your
                loved one.
                </p>
                <p class="fs-5 mb-4">
                So how can you tell if a family member is in trouble or if it’s
                a scammer using a cloned voice?
                </p>
                <p class="fs-5 mb-4">
                Don’t trust the voice. Call the person who supposedly contacted
                you and verify the story. Use a phone number you know is theirs.
                If you can’t reach your loved one, try to get in touch with them
                through another family member or their friends.
                </p>
                <p class="fs-5 mb-4">
                Scammers ask you to pay or send money in ways that make it hard to get your money back. If the caller says to wire money, send cryptocurrency, or buy gift cards and give them the card numbers and PINs, those could be signs of a scam.
                </p>
                {/* <h2 class="fw-bolder mb-4 mt-5">
                  I have odd cosmic thoughts every day
                </h2>
                <p class="fs-5 mb-4">
                  For me, the most fascinating interface is Twitter. I have odd
                  cosmic thoughts every day and I realized I could hold them to
                  myself or share them with people who might be interested.
                </p>
                <p class="fs-5 mb-4">
                  Venus has a runaway greenhouse effect. I kind of want to know
                  what happened there because we're twirling knobs here on Earth
                  without knowing the consequences of it. Mars once had running
                  water. It's bone dry today. Something bad happened there as
                  well.
                </p> */}
              </section>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetails;
