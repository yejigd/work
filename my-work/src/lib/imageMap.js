const modules = import.meta.glob('../assets/**/*.{png,jpg,gif,svg}', { eager: true, import: 'default' });

const basename = (path) => path.split('/').pop();

export const imageMap = Object.fromEntries(Object.entries(modules).map(([path, url]) => [basename(path), url]));

export function getImageUrl(filename) {
  return imageMap[filename];
}
