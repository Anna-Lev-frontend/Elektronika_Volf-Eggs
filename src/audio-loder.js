export class AudioLoader {
    constructor(audioFiles) {
        this.audioFiles = audioFiles;
        this.audio = {};
    }
    load() {
        const promises = [];// через [] берем или по ключу ил по названия ключа
        for (let name in this.audioFiles) {
            promises.push(this.loadAudio(name, this.audioFiles[name]));
        }
        return Promise.all(promises);
    }
    //делаем метод для загрузки audio, которая будет возвращать promise
    loadAudio(name, src) {
        return new Promise((resolve) => {
            const audio = new Audio(src);
            this.audio[name] = audio;
            resolve(this.audio[name]);

        });
    }
}