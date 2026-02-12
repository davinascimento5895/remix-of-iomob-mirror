import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <Navbar />
        <main className="container py-24 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Artigo não encontrado</h1>
          <Link to="/#blog" className="text-primary font-semibold hover:underline">
            ← Voltar ao Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;

      if (trimmed.startsWith("### ")) {
        return <h3 key={i} className="text-xl font-bold text-foreground mt-8 mb-3">{trimmed.slice(4)}</h3>;
      }
      if (trimmed.startsWith("## ")) {
        return <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">{trimmed.slice(3)}</h2>;
      }
      if (trimmed.startsWith("> ")) {
        return (
          <blockquote key={i} className="border-l-4 border-primary pl-4 italic text-muted-foreground my-2">
            {trimmed.slice(2)}
          </blockquote>
        );
      }
      if (trimmed.startsWith("- **")) {
        const match = trimmed.match(/- \*\*(.+?)\*\*: (.+)/);
        if (match) {
          return (
            <li key={i} className="ml-6 mb-2 text-muted-foreground list-disc">
              <strong className="text-foreground">{match[1]}</strong>: {match[2]}
            </li>
          );
        }
      }
      if (trimmed.startsWith("- ")) {
        return (
          <li key={i} className="ml-6 mb-2 text-muted-foreground list-disc">
            {trimmed.slice(2)}
          </li>
        );
      }

      return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{trimmed}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <div className="bg-foreground text-primary-foreground py-16">
          <div className="container">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">{post.category}</span>
            <h1 className="text-3xl lg:text-5xl font-bold mt-3">{post.title}</h1>
          </div>
        </div>

        {/* Content */}
        <article className="container max-w-3xl py-16">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-primary font-semibold mb-10 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
          </Link>
          <div>{renderContent(post.content)}</div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
