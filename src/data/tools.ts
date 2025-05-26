// src/data/tools.ts
export interface Tool {
    id: string;
    title: string;
    description: string;
    url: string;
    ogImageUrl: string;
  }
  
  export const tools: Tool[] = [
    {
      id: 'tasindex',
      title: 'TASIndex - Spacecraft Thermal Analysis Database',
      description: 'A comprehensive database of spacecraft thermal analysis information and software for flight missions.', 
      url: 'https://tasindex.thermocraft.space/',
      ogImageUrl: 'https://tasindex.thermocraft.space/og-image.svg', 
    },
    {
      id: 'psychroid',
      title: 'Psychroid - Psychrometric Chart Calculator',
      description: 'Interactive psychrometric chart calculator for HVAC engineers. Calculate and visualize air properties, process flows, and energy requirements.', 
      url: 'https://psychroid.thermocraft.space/',
      ogImageUrl: 'https://psychroid.thermocraft.space/og-image.svg',
    },
    {
      id: 'craftbook',
      title: 'Craftbook - Spacecraft Thermal Engineer\'s Notebook',
      description: 'Technical articles on thermal and aerospace engineering topics, featuring mathematical derivations and code examples.', 
      url: 'https://craftbook.thermocraft.space/',
      ogImageUrl: 'https://craftbook.thermocraft.space/og-image.svg',
    }
    // 他のツールもここに追加可能
  ];