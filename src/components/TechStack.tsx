import React, { useState } from 'react';
import { TechCategory } from '../types/portfolio';
import { techStackData } from '../data/portfolioData';

// Official SVG paths from Simple Icons & brand specs
const SI_PATHS: Record<string, { path: string; color: string }> = {
  siHuggingface: {
    color: '#FFD21E',
    path: 'M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454',
  },
  siLangchain: {
    color: '#7FC8FF',
    path: 'M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z',
  },
  siQdrant: {
    color: '#DC244C',
    path: 'm12 16.5 3.897-2.25v-4.5L12 7.5 8.103 9.75v4.5zM1.607 18 12 24l3.897-2.25v-4.5L12 19.5l-6.495-3.75v-7.5L12 4.5l6.495 3.75v15L22.393 21V6L12 0 1.607 6Z',
  },
  siGooglegemini: {
    color: '#8E75B2',
    path: 'M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81',
  },
  siPinecone: {
    color: '#00C805',
    path: 'M12 2L4.5 9.5 7.33 12.33 12 7.66l4.67 4.67L19.5 9.5 12 2zm0 8.5L7.33 15.17 9 16.84 12 13.84l3 3 1.67-1.67L12 10.5zm0 6.16L10.5 18.16 12 19.66l1.5-1.5L12 16.66z',
  },
};

type IconKind = 'devicon' | 'simpleicon' | 'text';

function getIconKind(item: typeof techStackData[0]): IconKind {
  if (item.deviconClass) return 'devicon';
  if (item.simpleIconKey && SI_PATHS[item.simpleIconKey]) return 'simpleicon';
  return 'text';
}

const TechIcon: React.FC<{ item: typeof techStackData[0] }> = ({ item }) => {
  const kind = getIconKind(item);

  if (kind === 'devicon') {
    return (
      <i
        className={item.deviconClass}
        style={{ fontSize: '22px', lineHeight: 1, display: 'block', flexShrink: 0 }}
        aria-hidden="true"
      />
    );
  }

  if (kind === 'simpleicon' && item.simpleIconKey && SI_PATHS[item.simpleIconKey]) {
    const icon = SI_PATHS[item.simpleIconKey];
    return (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill={icon.color}
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <path d={icon.path} />
      </svg>
    );
  }

  // Clean fallback badge with initials
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 22,
        height: 22,
        flexShrink: 0,
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6875rem',
        fontWeight: 700,
        color: 'var(--emerald)',
        background: 'var(--emerald-dim)',
        borderRadius: '4px',
        letterSpacing: '-0.02em',
      }}
    >
      {item.name.slice(0, 2).toUpperCase()}
    </span>
  );
};

const categories: TechCategory[] = [
  'All',
  'Languages',
  'ML & Deep Learning',
  'Generative AI & Vision',
  'Backend & Web',
  'Databases & Cloud',
];

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>('All');

  const filteredTech =
    selectedCategory === 'All'
      ? techStackData
      : techStackData.filter((item) => item.category === selectedCategory);

  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="section-header center">
          <span className="section-eyebrow">Technologies</span>
          <h2 className="section-title">Tech Stack.</h2>
          <p className="section-desc">
            Languages, frameworks, and tools I work with across projects.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="tech-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Tools */}
        <div className="tech-grid">
          {filteredTech.map((item) => (
            <div key={item.name} className="tech-card">
              <TechIcon item={item} />
              <span className="tech-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
