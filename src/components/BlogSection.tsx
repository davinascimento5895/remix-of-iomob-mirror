import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-foreground">
          Notícias & Novidades
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="border border-border rounded-xl p-8 hover:shadow-lg transition-shadow group"
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                {post.category}
              </span>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mt-2 mb-4">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-primary font-semibold text-sm uppercase tracking-wider"
              >
                Leia Mais →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
