import fs from 'node:fs/promises';
import path from 'node:path';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';

const location = path.join(getWorkspaceRoot(), 'assets/colors.json');

type T = {[key: string]: T | string};

let previouslyLoadedColors: T | null = null;

export async function getColors() {
  if (previouslyLoadedColors) return previouslyLoadedColors;
  const contents = await fs.readFile(location, 'utf-8');
  const colors = JSON.parse(contents);
  previouslyLoadedColors = colors;
  return colors;
}
