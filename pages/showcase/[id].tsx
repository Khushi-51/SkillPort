"use client"
import { useRouter } from "next/router"
import Layout from "../../components/layout"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Github, Globe } from "lucide-react"

const ProjectShowcase = () => {
  const router = useRouter()
  const { id } = router.query

  // Placeholder project data
  const project = {
    title: "AI-Powered Task Manager",
    description:
      "An innovative task management application that uses artificial intelligence to prioritize and suggest tasks based on user behavior and deadlines.",
    image: "/placeholder.svg",
    techStack: ["React", "Python", "TensorFlow"],
    githubLink: "https://github.com/example/project",
    liveDemo: "https://example.com/demo",
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 mb-8">
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Button>
          <Button variant="outline">
            <Globe className="mr-2 h-4 w-4" /> Live Demo
          </Button>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Comments & Feedback</h2>
          <Textarea placeholder="Leave your comment or feedback here" />
          <Button className="mt-4">Submit</Button>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Mentor Ratings & Suggestions</h2>
          {/* Placeholder for mentor ratings and suggestions */}
          <p className="text-gray-600 dark:text-gray-300">No mentor ratings or suggestions yet.</p>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectShowcase

