const publicUrl = process.env.PUBLIC_URL || '';
let basePath: string;
try {
  basePath = publicUrl ? new URL(publicUrl).pathname : '';
} catch (e) {
  basePath = '';
}
export default basePath;