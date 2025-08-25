/* 줄바꿈 처리 */
export const normalizeDesc = (s) => s.replace(/<br\s*\/?>/gi, '\n');

/* Image Map */
const modules = import.meta.glob('../assets/**/*.{png,jpg,gif,svg,mp4}', { eager: true, import: 'default' });
const basename = (path) => path.split('/').pop();

export const imageMap = Object.fromEntries(Object.entries(modules).map(([path, url]) => [basename(path), url]));

export const getImageUrl = (filename) => {
  return imageMap[filename];
};
