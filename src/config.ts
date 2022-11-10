export type Submodule = {
  name: string,
  path: string,
  description: string,
};

export type Module = {
  name: string,
  path: string,
  description: string,
  submodules: Submodule[],
};

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem massa, dapibus in commodo vitae, scelerisque id mi. Aliquam at dolor non turpis pharetra porttitor. Proin non iaculis magna. Maecenas venenatis, justo ac cursus tempor, ipsum orci efficitur lacus, at eleifend nibh dui et eros. Nullam sed urna eu arcu finibus convallis eget vitae felis. In hac habitasse platea dictumst. Vivamus orci mauris, ullamcorper quis sapien eget, tempor placerat mauris.';

export const modulesList: Module[] = [
  {
    name: 'Exemplos',
    path: 'examples',
    description,
    submodules: [
      { name: 'Funções básicas', path: 'basics', description },
    ],
  },
  {
    name: 'NodeJS',
    path: 'nodejs',
    description,
    submodules: [
      { name: 'Fundamental', path: 'fundamental', description },
      { name: 'Express', path: 'express', description },
    ],
  },
];
