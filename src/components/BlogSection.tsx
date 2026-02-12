const posts = [
  {
    date: "10/07/2019",
    title: "The Future of Enterprise API Development",
    excerpt:
      "The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal...",
  },
  {
    date: "20/06/2019",
    title: "How To Make Your iOS 13 Compatible?",
    excerpt:
      "The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal...",
  },
  {
    date: "12/05/2019",
    title: "The Next Big Challenge for Content Marketer",
    excerpt:
      "The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal...",
  },
  {
    date: "24/05/2018",
    title: "Tackling the Changes of Retail Industry",
    excerpt:
      "The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal...",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-foreground">
          Notícias & Novidades
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="border border-border rounded-xl p-8 hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <p className="text-sm text-muted-foreground mb-3">{post.date} • iomob • 0 Comments</p>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Learn More →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
