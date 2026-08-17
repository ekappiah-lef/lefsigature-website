/** Renders a JSON-LD structured-data block. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, server-generated content built from siteConfig.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
