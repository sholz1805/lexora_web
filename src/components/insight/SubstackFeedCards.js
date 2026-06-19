const FEED_URL = process.env.SUBSTACK_FEED_URL || "https://substack.com/feed";
const MAX_ITEMS = 5;
const SUMMARY_COUNT = 7;

function cleanFeedText(value) {
  return value
    .replace(/<!\[CDATA\[|\]\]>/gi, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim();
}

function trimText(value, length = 70) {
  if (!value) return "";
  return value.length <= length ? value : `${value.slice(0, length).trim()}…`;
}

function parseFeedTag(item, tag) {
  const regex = new RegExp(`<${tag}>([\s\S]*?)<\/${tag}>`, "i");
  const match = item.match(regex);
  return cleanFeedText(match?.[1] ?? "");
}

async function getFeedItems(feedUrl) {
  const response = await fetch(feedUrl, {
    next: { revalidate: 900 },
  });

  if (!response.ok) {
    throw new Error("Unable to load Substack feed");
  }

  const xml = await response.text();
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)]
    .slice(0, MAX_ITEMS)
    .map((match) => {
      const item = match[1];
      return {
        title: parseFeedTag(item, "title") || "Untitled post",
        link: parseFeedTag(item, "link") || feedUrl,
        pubDate: parseFeedTag(item, "pubDate"),
      };
    });

  return items;
}

export const dynamic = "force-dynamic";

export default async function SubstackFeedCards() {
  let posts = [];
  let feedLink = FEED_URL.replace(/\/feed\/?$/i, "");

  try {
    posts = await getFeedItems(FEED_URL);
  } catch (error) {
    console.error("Substack feed load error:", error.message);
    posts = [];
  }

  const previewItems = posts.slice(0, SUMMARY_COUNT);

  return (
    <section id="latest-substack" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <div className="grid gap-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-paper/5 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-signal" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/70">
                Latest from Substack
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {previewItems.map((post, index) => (
                <span key={index} className="rounded-full border border-ink/10 bg-white/90 px-4 py-2 text-sm text-ink/80 shadow-sm">
                  {trimText(post.title, 60)}
                </span>
              ))}
            </div>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post, index) => (
                <a
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[1.75rem] border border-ink/10 bg-white/95 p-7 transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-soft"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-signal">
                    {post.pubDate ? new Date(post.pubDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }) : "New"}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold leading-tight text-ink transition group-hover:text-signal">
                    {post.title}
                  </h3>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:text-signal">
                    Read the full post
                    <span aria-hidden="true">→</span>
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-ink/10 bg-white/95 p-10 text-ink/75">
              <p className="text-base leading-8">
                The latest Substack headlines are currently unavailable. Please check back shortly or visit the archive to review the current commentary.
              </p>
            </div>
          )}

          <div className="mt-8">
            <a
              href={feedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-ink px-8 py-4 text-sm font-semibold text-paper transition-all duration-300 hover:bg-ink/90"
            >
              View the full Substack archive
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
