import { notFound, redirect } from "next/navigation";

const legacyAreaMap: Record<string, string> = {
  "abdomen-fat-freezing-liverpool": "abdomen",
  "flanks-love-handles-fat-freezing-liverpool": "flanks-love-handles",
  "lower-stomach-lower-pouch-fat-freezing-liverpool": "lower-stomach-pouch",
  "bra-back-fat-freezing-liverpool": "bra-back-fat",
  "inner-thigh-fat-freezing-liverpool": "inner-thighs",
  "outer-thigh-fat-freezing-liverpool": "outer-thighs",
  "upper-arms-bingo-wings-fat-freezing-liverpool": "upper-arms-bingo-wings",
  "double-chin-fat-freezing-liverpool": "double-chin",
};

export default async function LegacyAreaRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const newSlug = legacyAreaMap[slug];

  if (!newSlug) {
    notFound();
  }

  redirect(`/fat-freezing/areas/${newSlug}/`);
}
