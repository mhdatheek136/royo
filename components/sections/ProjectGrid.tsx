'use client'

import { useState } from 'react'
import { projects, Category, Province } from '@/data/projects'
import { MapPin, ChevronDown } from 'lucide-react'
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
    <div className="pb-24 md:pb-36 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-gray-200">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-2.5 font-raleway font-semibold text-xs md:text-sm tracking-tight rounded-full transition-all duration-300 ${selectedCategory === cat.id
                      ? 'bg-royo-burgundy text-white shadow-lg'
                      : 'bg-gray-100 text-rock-black hover:bg-gray-200'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Province Filter */}
            <div className="relative flex items-center gap-3">
              <MapPin className="w-5 h-5 text-rock-black opacity-60" />
              <div className="relative group">
                <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value as Province | 'all')}
                  className="appearance-none font-raleway font-semibold text-xs md:text-sm text-rock-black pr-8 py-2 bg-transparent focus:outline-none cursor-pointer"
                >
                  {provinces.map((prov) => (
                    <option key={prov.id} value={prov.id} className="bg-white">
                      {prov.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-rock-black opacity-60 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Results count (Subtle) */}
          <div className="mt-6 flex justify-end">
            <p className="text-[10px] md:text-xs text-shine-brown font-raleway uppercase tracking-widest opacity-60 italic">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} exhibited
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
