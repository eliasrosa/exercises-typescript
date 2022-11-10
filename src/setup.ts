/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-unused-vars */

export const customImport = (path: string) => {
  const file = process.env.ANSWERS ? 'answers' : 'exercises';
  return require(`${path}/${file}`);
};
