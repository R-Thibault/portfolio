import { Progress } from "flowbite-react";

export function Skills(Skill) {
  return (
    <div className="w-[20em]">
    <Progress
    progress={Skill.progress}
    labelProgress={true}
    textLabel={Skill.domain}
    labelText={true}
    size="lg"
  />
  </div>
  );
}
