import fs from 'fs/promises';

export async function openFile(file: string) {
  try {
    return await fs.readFile(file, { encoding: 'utf8' });
  } catch (err) {
    throw new Error(`Não foi possível abrir o arquivo: ${file}`);
  }
}

export async function writeFile(file: string, data: string) {
  try {
    return await fs.writeFile(file, data);
  } catch (err) {
    throw new Error(`Não foi possível gravar o arquivo: ${file}`);
  }
}

export async function listDirectory(path: string) {
  try {
    return await fs.readdir(path);
  } catch (err) {
    throw new Error(`Não foi possível listar o diretório: ${path}`);
  }
}

export async function isDirectory(path: string) {
  try {
    return (await fs.lstat(path)).isDirectory();
  } catch (err) {
    throw new Error(`Não foi possível verificar sé o caminho informado é um diretório: ${path}`);
  }
}

export async function mkdir(path: string, params) {
  try {
    return await fs.mkdir(path, params);
  } catch (err) {
    throw new Error(`Não foi possível criar o caminho informado: ${path}`);
  }
}
