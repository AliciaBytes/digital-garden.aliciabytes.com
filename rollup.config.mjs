import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
    input: 'api/search.js',
    output: [
        {
            file: 'netlify/functions/search/search.js',
            format: 'cjs',
            plugins: [terser()]
        }
    ],
    plugins: [json()]
};
