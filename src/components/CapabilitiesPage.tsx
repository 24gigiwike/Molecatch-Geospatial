import { motion } from 'motion/react';
import { fadeUpVariant } from '../lib/animations';

interface CapabilityItem {
  title: string;
  desc: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    title: "Mapping & Visualization",
    desc: "Dynamic web map interfaces and cartographic deliverables built for absolute clarity under field pressure."
  },
  {
    title: "Location Intelligence",
    desc: "Proximity mapping, catchment analysis, and spatial context analysis for strategic project sourcing."
  },
  {
    title: "Terrain Analysis",
    desc: "Hydrological modeling, line-of-sight analysis, and volumetric slope modeling using accurate elevation grids."
  },
  {
    title: "Asset Inventory Mapping",
    desc: "Spatially indexed inventories for physical utility backbones, transit assets, and public infrastructure."
  },
  {
    title: "Disaster Risk Assessment",
    desc: "Predictive physical modeling for floods, seismic faults, and wildfire corridors to support mitigation plans."
  },
  {
    title: "Environmental Monitoring",
    desc: "Dynamic tracking of crop yields, forest deterioration, sea quality levels, and carbon footprint metrics."
  },
  {
    title: "Urban Planning Support",
    desc: "Smart city digital twins, metropolitan demographic distribution, and public corridor layout simulations."
  },
  {
    title: "Infrastructure Intelligence",
    desc: "Continuous spatial tracking of high-voltage grids, pipeline networks, and telecommunications corridors."
  },
  {
    title: "Survey & Field Data Collection",
    desc: "Rigorous ground-truthing campaigns utilizing high-accuracy GNSS hardware and cellular data sync."
  },
  {
    title: "Decision Support Systems",
    desc: "Integrated geographic software dashboards pairing custom databases with real-time satellite alert feeds."
  }
];

export default function CapabilitiesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex-1 flex flex-col justify-between w-full select-none mt-4 md:mt-0"
      id="capabilities-page-container"
    >
      {/* Top Header */}
      <div className="flex flex-col gap-4 max-w-4xl" id="capabilities-header">
        <motion.p
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          custom={1}
          className="text-xs sm:text-sm font-semibold tracking-widest text-[var(--color-accent)] uppercase"
          id="capabilities-eyebrow"
        >
          Institutional Solutions
        </motion.p>

        <motion.h1
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          custom={2}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-black leading-tight"
          id="capabilities-title"
        >
          Capabilities That Transform Spatial Data into Intelligence
        </motion.h1>
      </div>

      {/* Grid List */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mt-8 md:mt-12 overflow-y-auto max-h-[300px] md:max-h-[450px] pr-2 scrollbar-thin"
        id="capabilities-grid"
      >
        {CAPABILITIES.map((cap, idx) => (
          <motion.div
            key={cap.title}
            variants={fadeUpVariant}
            initial="initial"
            animate="animate"
            custom={3 + idx * 0.08}
            className="p-5 border border-neutral-200 hover:border-[var(--color-accent)] rounded-lg bg-white/40 backdrop-blur-sm transition-all flex flex-col justify-between"
            id={`cap-card-${idx}`}
          >
            <div>
              <span className="text-[10px] tracking-widest font-semibold text-neutral-400 block mb-3">
                0{idx + 1}
              </span>
              <h3 className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-black mb-2 leading-snug">
                {cap.title}
              </h3>
              <p className="text-[10px] sm:text-xs font-medium tracking-wider uppercase text-neutral-600 leading-relaxed">
                {cap.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Concluding Section */}
      <motion.div
        variants={fadeUpVariant}
        initial="initial"
        animate="animate"
        custom={7}
        className="mt-8 pt-6 border-t border-neutral-200 max-w-4xl"
        id="capabilities-concluding-container"
      >
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] leading-relaxed">
          MoleCatch spatial capabilities deliver the precise ground-truth required for secure institutional planning, maximized operational efficiency, and long-term strategic decision-making.
        </p>
      </motion.div>
    </motion.div>
  );
}
