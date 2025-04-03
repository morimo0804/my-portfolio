import { getWorksDetail, getWorksList } from "@/app/_libs/microcms";
import WorksList from "../_components/WorksList";

export default async function Page() {
  const { contents: works } = await getWorksList();

  return <WorksList works={works} />;
}
