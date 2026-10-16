export type DeveloperRole = 'Frontend Developer' | 'Backend Developer' | 'Full Stack Developer'

export type RecentWork = {
  title: string
  description: string
}

export type Developer = {
  devId: string
  name: string
  email: string
  phone: string
  role: DeveloperRole
  experience: number // years
  skills: string[]
  recentWorks: RecentWork[]
  image: string
}