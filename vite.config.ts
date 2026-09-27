import vinext from 'vinext';
import {defineConfig} from 'vite';
// This portfolio exports static HTML and assets; no server bindings are required.
export default defineConfig({plugins:[vinext()],resolve:{dedupe:['react','react-dom']}});
