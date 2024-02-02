import BlogPosts from "@/app/[locale]/blog/posts.json";
import { convertToUrl } from "@/app/[locale]/blog/functions";

export default function sitemap() {
  const sitemapEntries = [
    {
      url: "https://joeltaylor.business/en",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://joeltaylor.business/en/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://joeltaylor.business/en/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://joeltaylor.business/es",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://joeltaylor.business/es/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://joeltaylor.business/es/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  // Adding blog post entries to sitemap
  BlogPosts.posts.forEach((post) => {
    const url = `https://joeltaylor.business/en/blog/${convertToUrl(post.title)}`;
    const lastModified = new Date(post.date);

    sitemapEntries.push({
      url,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return sitemapEntries;
}
