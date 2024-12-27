import {generateColorsCore} from '../src/colors/generate-colors-core.js';
import {generateColorsPanda} from '../src/colors/generate-colors-panda.js';
import {generateColorsVanilla} from '../src/colors/generate-colors-vanilla.js';
import {generateColorsVars} from '../src/colors/generate-colors-vars.js';

describe('Color Generator', () => {
  it('generates colors for tailwind and vanilla extract', async () => {
    await generateColorsCore();
  });

  it.skip('generates colors for panda', async () => {
    await generateColorsPanda();
  });

  it.skip('generates colors for vanilla css', async () => {
    await generateColorsVanilla();
  });

  it.skip('generates colors for css variables', async () => {
    await generateColorsVars();
  });
});
