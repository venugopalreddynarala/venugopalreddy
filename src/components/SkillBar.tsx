import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SkillBarProps {
  skill: string;
  level: number;
  color?: string;
  delay?: number;
}

const SkillBar = ({ skill, level, color = "bg-primary", delay = 0 }: SkillBarProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
