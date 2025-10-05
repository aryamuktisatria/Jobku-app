import React from 'react';

export interface HighlightCardProps {
    title: string;
    description: string;
    icon: string;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({ title, description, icon }) => (
  <div className="p-6 rounded-xl bg-card border border-border shadow-sm text-left hover:shadow-md transition-shadow duration-300">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-primary-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default HighlightCard;