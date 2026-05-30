'use client'

import { useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'
import { portfolioCategories, portfolioCities, portfolioProjects } from '@/data/portfolio'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCity, setSelectedCity] = useState('all')

  const filteredProjects = portfolioProjects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory
    const cityMatch = selectedCity === 'all' || project.city === selectedCity
    return categoryMatch && cityMatch
  })

  return (
    <section className="pb-24 md:pb-36 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-b border-gray-200 pb-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-3">
              {['all', ...portfolioCategories].map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-royo-burgundy text-white shadow-lg'
                      : 'bg-white text-rock-black hover:bg-gray-100'
                  }`}
                >
                  {category === 'all' ? 'All Projects' : category}
                </button>
              ))}
            </div>

            <label className="relative flex items-center gap-3">
              <MapPin className="h-5 w-5 text-royo-burgundy" />
              <select
                value={selectedCity}
                onChange={event => setSelectedCity(event.target.value)}
                className="appearance-none bg-transparent pr-8 text-sm font-semibold text-rock-black outline-none"
              >
                <option value="all">All Cities</option>
                {portfolioCities.map(city => (
                  <option key={city.slug} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-0 h-4 w-4 text-rock-black/60" />
            </label>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-shine-brown">
            {filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'} exhibited
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-cormorant text-3xl text-royo-burgundy">No projects match these filters yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}
