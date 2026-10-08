export interface SkillGroup {
    group: string
    items: string[]
}

export const skills: SkillGroup[] = [
    {group: "Programmieren", items: ["Java", "TypeScript", "JavaScript"]},
    {group: "Web", items: ["React", "HTML", "CSS"]},
    {group: "Daten und Betrieb", items: ["SQL", "JDBC", "Docker", "Git", "GitHub Actions"]},
    {group: "Schwerpunkt", items: ["Cybersecurity"]}
]
