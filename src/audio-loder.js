export class AudioLoader {
    constructor(audioFiles) {
        this.audioFiles = audioFiles;
        this.audio = {};
    }
    load() {
        const promises = [];
        for (let name in this.audioFiles) {
            promises.push(this.loadAudio(name, this.audioFiles[name]));
        }
        return Promise.all(promises);
    }
    //делаем метод для загрузки одной картинки, которая будет возвращать promise
    loadAudio(name, src) {
        return new Promise((resolve) => {
            const audio = new Audio(src);
            this.audio[name] = audio;
            resolve(this.audio[name]);

        });
    }
}