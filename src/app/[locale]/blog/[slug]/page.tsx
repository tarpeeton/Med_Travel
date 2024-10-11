import MainBlogWithSlug from '@/components/BlogItems/Main'
import type { Metadata } from 'next'


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `${slug}`,
    description: `Eng yangi Xabarlar: ${slug}`,
    keywords: `Med Travel, Songi Xabarlar ${slug}`,
  };
}


export default function Index() {
  return (
    <div>
      <MainBlogWithSlug />
    </div>
  )
}
