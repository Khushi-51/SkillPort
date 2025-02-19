import Layout from "../components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const HomePage = () => {
  return (
    <Layout>
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Showcase Your Projects, Connect with Professionals</h1>
        <p className="text-xl mb-8">ProjectHorizon: Where Innovation Meets Opportunity</p>
        <div className="flex justify-center space-x-4">
          <Button>Showcase Your Project</Button>
          <Button variant="outline">Find Talent</Button>
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search projects by tags, tech stack, or categories"
              className="pl-10 pr-4 py-2 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  React
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  Node.js
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default HomePage

