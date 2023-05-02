import { Progress } from "flowbite-react";

export function Skills(Skill) {
  return (
    <div className="md:w-[20em] w-[15em]">
    <Progress
    progress={Skill.progress}
    labelProgress={true}
    textLabel={Skill.domain}
    labelText={true}
    size="xl"
  />
  </div>
  );
}
