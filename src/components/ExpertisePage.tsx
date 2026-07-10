import { useState } from 'react';
import { motion } from 'motion/react';
import { fadeUpVariant } from '../lib/animations';

interface ExpertiseItem {
  title: string;
  description: string;
}

const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    title: "Geographic Information Systems (GIS)",
    description: "Enterprise-grade database design, spatial modeling, and vector mapping for multi-layered geographic analysis and operational readiness."
  },
  {
    title: "Remote Sensing",
    description: "Spectral imagery parsing, land cover classification, and temporal analysis of global environmental, resource, and sovereign shifts."
  },
  {
    title: "Satellite Image Analysis",
    description: "Sub-meter resolution panchromatic, multispectral, and SAR intelligence for target detection, baseline verification, and monitoring."
  },
  {
    title: "Drone Mapping & Surveying",
    description: "High-density LiDAR point clouds, digital surface models (DSM), and photogrammetric orthomosaics for extreme topographical precision."
  },
  {
    title: "Spatial Data Analytics",
    description: "Advanced spatial data mining, geoprocessing algorithms, network routing, and predictive density modeling for strategic assessments."
  },
  {
    title: "Environmental & Land Intelligence",
    description: "Deforestation tracking, carbon monitoring, wetland classification, and environmental degradation intelligence for institutional programs."
  },
  {
    title: "Infrastructure Mapping",
    description: "Precision spatial mapping of utility networks, transportation corridors, and critical national assets to support resilient operations."
  },
  {
    title: "Geospatial Consulting",
    description: "Strategic advisory, training, and custom workflow development for security programs, GIS capacity building, and sovereign mapping."
  }
];

export default function ExpertisePage() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex-1 flex flex-col justify-between w-full select-none mt-4 md:mt-0"
      id="expertise-page-container"
    >
      {/* Upper Content: Page Header & Subtext */}
      <div className="flex flex-col gap-4 max-w-4xl" id="expertise-header">
        <motion.p
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          custom={1}
          className="text-xs sm:text-sm font-semibold tracking-widest text-[var(--color-accent)] uppercase"
          id="expertise-eyebrow"
        >
          Institutional Services
        </motion.p>

        <motion.h1
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          custom={2}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-black leading-tight"
          id="expertise-title"
        >
          Geospatial Expertise Built for Critical Decisions
        </motion.h1>

        <motion.p
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          custom={3}
          className="text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase text-neutral-800 leading-relaxed max-w-3xl"
          id="expertise-supporting"
        >
          MoleCatch combines GIS, remote sensing, satellite imagery, drone technology, spatial analytics, and field intelligence to transform complex geographic data into actionable insights.
        </motion.p>
      </div>

      {/* Middle Content: Interactive Splitscreen Explorer */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12 flex-1 items-start"
        id="expertise-split-explorer"
      >
        {/* Left Column: Vertical Interactive list of Expertise Areas */}
        <div className="flex flex-col gap-2 max-h-[250px] md:max-h-[350px] overflow-y-auto pr-2 scrollbar-thin" id="expertise-items-list">
          {EXPERTISE_ITEMS.map((item, idx) => (
            <motion.button
              key={item.title}
              variants={fadeUpVariant}
              initial="initial"
              animate="animate"
              custom={4 + idx * 0.1}
              onClick={() => setSelectedIdx(idx)}
              className={`p-3.5 sm:p-4 text-left border-l-2 transition-all cursor-pointer flex justify-between items-center bg-transparent ${
                selectedIdx === idx
                  ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5 text-black'
                  : 'border-transparent text-neutral-500 hover:text-black hover:bg-neutral-50'
              }`}
              id={`expertise-btn-${idx}`}
            >
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase leading-snug">
                {item.title}
              </span>
              <span className={`text-xs transition-transform duration-300 ${selectedIdx === idx ? 'text-[var(--color-accent)] translate-x-1' : 'text-neutral-400'}`}>
                →
              </span>
            </motion.button>
          ))}
        </div>

        {/* Right Column: Display area for the selected Expertise detail */}
        <motion.div
          key={selectedIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="p-6 sm:p-8 bg-neutral-900 border border-neutral-800 rounded-xl text-white flex flex-col justify-center min-h-[140px] md:min-h-[200px]"
          id="expertise-detail-panel"
        >
          <span className="text-[10px] tracking-widest font-semibold uppercase text-[var(--color-accent)] mb-2 block">
            Core Competency
          </span>
          <h3 className="text-sm sm:text-base font-semibold tracking-widest uppercase mb-3 text-white leading-normal">
            {EXPERTISE_ITEMS[selectedIdx].title}
          </h3>
          <p className="text-xs sm:text-sm font-medium tracking-wide text-neutral-400 uppercase leading-relaxed">
            {EXPERTISE_ITEMS[selectedIdx].description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
