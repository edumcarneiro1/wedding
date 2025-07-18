import { ErrorModule } from "@components/error/error";
import { redirect } from 'next/navigation';

export default async function Home({ params }: { params: Promise<{ locale?: string }> }) {
    const { locale } = await params;
    if (!locale || locale !== 'pt' && locale !== 'en') {
        redirect('/pt');
    }
  
    return <ErrorModule locale={(locale as 'pt' | 'en') ?? 'pt'} />;
}