let instance = null;
class ConfigureVals {
  constructor(config) {
    this.xpoint = config.xpoint || 0;
    this.ypoint = config.ypoint || 0;
    this.shape = config.shape || null;
  }
  static getConfiguration(config) {
    if (!instance) {
      instance = new ConfigureVals(config)
    }
    return instance;
  }
}

const configure = ConfigureVals.getConfiguration({ xpoint: 8, ypoint: 9, shape: 'rectangle' });
const configure2 = ConfigureVals.getConfiguration({ xpoint: 8, ypoint: 12, shape: 'square' });

console.log(configure === configure2)
console.log(configure)