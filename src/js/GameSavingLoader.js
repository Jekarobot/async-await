import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
    static async load() {
      try { 
        const data = await read();
        const jsonData = await json(data);
        const obj = JSON.parse(jsonData);
        return obj;
    }
    catch (err) {
      throw new Error(err);
    }
  }
}

