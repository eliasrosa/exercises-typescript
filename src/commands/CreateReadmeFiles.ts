/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
import path from 'path';
import { Module, modulesList, Submodule } from '../config';
import {
  isDirectory, listDirectory, mkdir, openFile, writeFile,
} from '../utils/files';
import { capitalizeFirstLetter } from '../utils/string';

const createIndexReadme = async (index: string[]) => {
  // open template and replace
  const templatePath = path.join(__dirname, '..', 'templates', 'readme.md');
  const data = await openFile(templatePath);

  // replace
  const content = data.replace('<! index !>', index.join('\n'));

  // write file
  const filePath = path.join(__dirname, '../../', 'README.md');
  await writeFile(filePath, content);

  // log
  console.log(`${filePath}`);
};

const createModuleReadme = async (module: Module, index: string[]) => {
  // open template and replace
  const templatePath = path.join(__dirname, '..', 'templates', 'modules.md');
  const data = await openFile(templatePath);

  // replace
  const content = data
    .replace('<! title !>', module.name)
    .replace('<! description !>', module.description)
    .replace('<! index !>', index.join('\n'));

  // write file
  const filePath = path.join(__dirname, '../modules', module.path, 'README.md');
  await writeFile(filePath, content);

  // log
  console.log(`${filePath}`);
};

const createSubmoduleReadme = async (module: Module, submodule: Submodule, index: string[]) => {
  // open template and replace
  const templatePath = path.join(__dirname, '..', 'templates', 'submodules.md');
  const data = await openFile(templatePath);

  // replace
  const content = data
    .replace('<! title !>', `${module.name} / ${submodule.name}`)
    .replace('<! description !>', submodule.description)
    .replace('<! index !>', index.join('\n'));

  // write file
  const filePath = path.join(__dirname, '../modules', module.path, submodule.path, 'README.md');
  await writeFile(filePath, content);

  // log
  console.log(`${filePath}`);
};

const main = async () => {
  const modulesIndex: string[] = [];
  for await (const module of modulesList) {
    modulesIndex.push(`- [${module.name}](src/modules/${module.path})`);

    const submoduleIndex: string[] = [];
    for await (const submodule of module.submodules) {
      submoduleIndex.push(`- [${submodule.name}](${submodule.path})`);

      const topicIndex: string[] = [];
      const topicPath = path.join(__dirname, '../modules', module.path, submodule.path);
      const topicList = await listDirectory(topicPath);

      for await (const topicName of topicList) {
        const topicFile = path.join(topicPath, topicName);

        if (await isDirectory(topicFile)) {
          topicIndex.push(`<details><summary>${capitalizeFirstLetter(topicName)}</summary>\n  <ul>`);

          const exercisesPath = path.join(topicFile);
          const exercisesList = await listDirectory(exercisesPath);

          for await (const exerciseName of exercisesList) {
            const exercisePath = path.join(exercisesPath, exerciseName);

            if (await isDirectory(exercisePath)) {
              topicIndex.push(`    <li><a href="${topicName}/${exerciseName}">${exerciseName}</a></li>`);
            }
          }

          topicIndex.push('  <ul>\n</details>\n');
        }
      }

      await createSubmoduleReadme(module, submodule, topicIndex);
    }

    await createModuleReadme(module, submoduleIndex);
  }

  await createIndexReadme(modulesIndex);
};

main();
