import * as faceapi from 'face-api.js';

export default defineNuxtPlugin(async (nuxtApp) => {
    const MODEL_PATH = '/models';

    await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_PATH),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_PATH),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_PATH),
        faceapi.nets.ageGenderNet.loadFromUri(MODEL_PATH),
      ]);
    
      console.log('Modelos do Face API.js carregados com sucesso!');
})
