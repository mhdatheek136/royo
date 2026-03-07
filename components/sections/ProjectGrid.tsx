'use client'

import { useState } from 'react'
import { projects, Category, Province } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all')
  const [selectedProvince, setSelectedProvince] = useState<Province | 'all'>('all')

  const categories: { id: Category | 'all'; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'gypsum-art', label: 'Gypsum Art' },
  ]

  const provinces: { id: Province | 'all'; label: string }[] = [
    { id: 'all', label: 'All Locations' },
    { id: 'western', label: 'Western' },
    { id: 'central', label: 'Central' },
    { id: 'southern', label: 'Southern' },
    { id: 'northern', label: 'Northern' },
    { id: 'eastern', label: 'Eastern' },
    { id: 'north-western', label: 'North Western' },
    { id: 'north-central', label: 'North Central' },
    { id: 'uva', label: 'Uva' },
    { id: 'sabaragamuwa', label: 'Sabaragamuwa' },
  ]

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory
    const provinceMatch = selectedProvince === 'all' || project.province === selectedProvince
    return categoryMatch && provinceMatch
  })

  return (
    <div className="py-20 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters Section */}
        <div className="mb-16">
          {/* Category Filters */}
          <div className="mb-8">
            <h3 className="sr-only">Filter by category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-2 font-raleway font-medium text-sm uppercase tracking-wider rounded-full transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? 'bg-royo-burgundy text-off-white'
                      : 'bg-white text-rock-black border-2 border-border hover:border-royo-burgundy'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Province Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="sr-only">Filter by location</h3>
            <div className="flex items-center gap-3">
              <span className="text-sm font-raleway uppercase tracking-wider text-rock-black">
                Location:
              </span>
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value as Province | 'all')}
                className="px-4 py-2 font-raleway text-sm border-2 border-border rounded-none focus:border-royo-burgundy focus:outline-none bg-white text-rock-black"
              >
                {provinces.map((prov) => (
                  <option key={prov.id} value={prov.id}>
                    {prov.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Results count */}
            <p className="text-sm text-shine-brown font-raleway">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-shine-brown font-raleway">
              No projects found matching your criteria.
            </p>
            <p className="text-sm text-shine-brown mt-2">
              Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
