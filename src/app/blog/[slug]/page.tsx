import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";
import { BLOG_POSTS, COMPANY_INFO } from "@/data/company";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | VAYU Tech Insights`,
    description: post.excerpt,
    keywords: post.tags,
  };
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="py-16 lg:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-xs font-mono text-slate-500 hover:text-vayu-600 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Technical Insights</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-6 pb-10 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-vayu-700 font-bold">
              {post.category}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed font-light">
            {post.excerpt}
          </p>

          {/* Author Card */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-vayu-600 font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{post.author.name}</div>
                <div className="text-xs text-vayu-600 font-mono font-medium">{post.author.role}</div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-400 hidden sm:block">
              Bangalore Engineering Practice
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="py-12 prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags & Key Takeaways Card */}
        <div className="my-10 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-vayu-600 font-bold uppercase">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Architecture Takeaway Checklist</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-700 font-medium">
            <li className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Prioritize declarative Infrastructure as Code</span>
            </li>
            <li className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Replace bloated proprietary licenses with open-source</span>
            </li>
            <li className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Enforce Zero Trust verification on every network boundary</span>
            </li>
            <li className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Schedule non-production cloud environments during off-hours</span>
            </li>
          </ul>

          <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600">
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Topic Specific CTA Banner */}
        <div className="my-12 p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-900">
              Need assistance implementing this architecture?
            </h3>
            <p className="text-xs text-slate-500">
              Consult with the VAYU engineering team for a personalized design review.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md transition-all flex items-center space-x-2"
          >
            <span>Consult Our Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Related Articles */}
        <div className="pt-12 border-t border-slate-200 space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Related Technical Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono text-vayu-600 font-bold mb-2">{r.category}</div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-vayu-600 transition-colors line-clamp-2 mb-2">
                    {r.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {r.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{r.readTime}</span>
                  <span className="text-vayu-600 group-hover:translate-x-1 transition-transform font-bold">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}
