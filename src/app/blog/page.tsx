"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  BookOpen, 
  Clock, 
  ArrowRight, 
  User
} from "lucide-react";
import { BLOG_POSTS } from "@/data/company";

const CATEGORIES = [
  "All Topics",
  "Cloud",
  "Networking",
  "Cyber Security",
  "Open Source",
  "Automation",
  "Endpoint Management"
];

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Topics");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = 
      selectedCategory === "All Topics" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <div className="py-16 lg:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 mb-8">
          <Link href="/" className="hover:text-vayu-600 font-semibold">Home</Link>
          <span>/</span>
          <span className="text-vayu-600 font-bold">Blog & Technical Insights</span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
            <BookOpen className="w-3.5 h-3.5 text-vayu-600" />
            <span>ENGINEERING PAPERS & FINOPS PLAYBOOKS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            VAYU Technology{" "}
            <span className="text-gradient-cyan">Insights</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            In-depth guides, enterprise case studies, FinOps cost-reduction frameworks, and zero trust architectures written directly by our Bangalore engineering leads.
          </p>
        </div>

        {/* Featured Post Spotlight */}
        {featuredPost && (
          <div className="mb-16">
            <div className="p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden group">
              <div className="max-w-3xl space-y-4 relative z-10">
                <div className="flex items-center space-x-3 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-sky-50 text-vayu-700 border border-sky-200 font-bold uppercase">
                    Featured Insight
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-600 font-medium">{featuredPost.category}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{featuredPost.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 group-hover:text-vayu-600 transition-colors leading-tight">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                  <div className="flex items-center space-x-3 text-xs text-slate-700">
                    <User className="w-4 h-4 text-vayu-600" />
                    <span className="font-semibold">{featuredPost.author.name}</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500 font-mono">{featuredPost.date}</span>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-sm transition-all"
                  >
                    <span>Read Full Playbook</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-vayu-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles & tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-vayu-500 font-mono"
            />
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 transition-all flex flex-col justify-between group shadow-sm hover:shadow-card-hover hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-sky-50 border border-sky-100 text-vayu-700 font-bold">
                      {post.category}
                    </span>
                    <span className="text-slate-400 flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-vayu-600 transition-colors mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-50 text-[10px] font-mono text-slate-600 border border-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="font-mono text-[11px]">
                    <div className="font-bold text-slate-700">{post.author.name}</div>
                    <div className="text-slate-400">{post.date}</div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-vayu-600 hover:text-vayu-700 font-bold flex items-center space-x-1 group/btn"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 p-8 rounded-3xl bg-white border border-slate-200 space-y-3">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No articles match your search criteria</h3>
            <p className="text-xs text-slate-500">Try adjusting your keyword or reset the category filter.</p>
            <button
              onClick={() => { setSelectedCategory("All Topics"); setSearchQuery(""); }}
              className="px-4 py-2 rounded-xl bg-vayu-600 text-white text-xs font-bold font-mono"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
