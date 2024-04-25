export enum ColorName {
  'primary_001' = 'primary_001',
  'primary_002' = 'primary_002',

  'secondary_001' = 'secondary_001',
  'secondary_002' = 'secondary_002',
  'secondary_003' = 'secondary_003',
  'secondary_004' = 'secondary_004',
  'secondary_005' = 'secondary_005',
}

export type ColorObject = {[key in ColorName]: string};
