import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  variant: 'teal' | 'purple' | 'dark' | 'orange';
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, variant }) => {
  const gradientClasses = {
    teal: 'gradient-teal',
    purple: 'gradient-purple', 
    dark: 'gradient-dark',
    orange: 'gradient-orange'
  };

  const logoSrc = {
    teal: '/assets/crete-space-logo.svg',
    purple: '/assets/crete-academy-logo.svg',
    dark: '/assets/creter-logo.svg',
    orange: '/assets/cretefly-logo.svg'
  };

  return (
    <div className="bg-white rounded-lg border border-(--border-light) border-opacity-50 p-6 space-y-6 min-w-[300px] flex-shrink-0">
      {/* Header with gradient background */}
      <div className={`${gradientClasses[variant]} rounded-lg p-4 flex flex-col items-start gap-2`}>
        <div className="text-white font-semibold text-xl">
          {title}
        </div>
        <div className="w-9 h-1 bg-(--accent-yellow)" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <p className="body-text text-(--text-primary) opacity-70">
          {description}
        </p>
        <button className="text-sm text-(--text-primary) underline hover:no-underline transition-all">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default ProductCard;