/**
 * Performance-oriented image wrapper for Vite-bundled assets.
 * Supports LCP priority, lazy loading, and async decode without changing layout classes.
 */
export function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  lazy = true,
  sizes,
  width,
  height,
  ...rest
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? 'eager' : lazy ? 'lazy' : 'eager'}
      decoding="async"
      fetchPriority={priority ? 'high' : undefined}
      {...rest}
    />
  );
}
