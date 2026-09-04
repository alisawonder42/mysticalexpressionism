import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      '.vinext/**',
      'next-env.d.ts',
      'node_modules/**',
    ],
  },
];

export default eslintConfig;
