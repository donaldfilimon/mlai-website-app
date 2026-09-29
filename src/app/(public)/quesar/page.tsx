import type { Metadata } from "next";
import { QuesarLanding } from "@/components/quesar-pages";

export const metadata: Metadata = {
  title: "Quesar — the large model",
  description:
    "Quesar is the large model that trains and improves Abbey, Aviva, and the other assistants. This website does not host the model, run training, or host assistant sessions.",
};

export default function Page() {
  return <QuesarLanding />;
}
