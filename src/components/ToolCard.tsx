// src/components/ToolCard.tsx
import React from 'react';
import { Tool } from '../data/tools'; // dataからTool型をインポート
import styles from './ToolCard.module.css';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <a href={tool.url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
      <div className={styles.card}>
        {tool.ogImageUrl && (
          <img src={tool.ogImageUrl} alt={`${tool.title} OG Image`} className={styles.cardImage} loading="lazy" />
        )}
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{tool.title}</h3>
          <p className={styles.cardDescription}>{tool.description}</p>
        </div>
      </div>
    </a>
  );
};

export default ToolCard;