export default function Badge({ children, className = '', variant = 'default' }) {
  const baseStyle = 'inline-flex items-center px-2 py-1 rounded-xl text-xs font-medium';
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    outline: 'border border-gray-300 text-gray-800',
  };

  return <span className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</span>;
}
