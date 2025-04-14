// src/sections/HomeSection.tsx
import React from 'react';
import { tools } from '../data/tools';
import ToolCard from '../components/ToolCard';
import styles from './HomeSection.module.css';

const HomeSection: React.FC = () => {
  return (
    <div>
      <h2>Web Tools</h2>
      <div className={styles.toolGrid}>
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default HomeSection;