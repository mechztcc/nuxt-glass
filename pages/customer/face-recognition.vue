<template>
  <NuxtLayout :name="'admin'">
    <div class="grid grid-cols-6 md:grid-cols-4">
      <div class="col-span-6 col-start-1 md:col-span-2 md:col-start-2 h-screen">
        <div class="h-1/2 relative">
          <video ref="video" autoplay muted class="video"></video>
          <canvas ref="canvas" class="canvas"></canvas>
        </div>

        <div class="h-1/2 mt-20">
          <div
            class="d-flex flex-col justify-center items-center text-center mb-5"
          >
            <h1 class="text-xl">
              Distancia entre os olhos: {{ distanceCm.toFixed(2) }} cm
            </h1>
          </div>

          <DefaultButton label="Executar medição" :fill="true" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
  import * as faceapi from 'face-api.js';
  import { onMounted, onBeforeUnmount, ref } from 'vue';

  const video = ref(null);
  const canvas = ref(null);
  let videoStream = null;
  const distanceCm = ref(0);

  const initCamera = async () => {
    videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.value.srcObject = videoStream;

    video.value.onloadedmetadata = () => {
      video.value.play();
      detectFaces();
    };
  };

  const loadModels = async () => {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
  };

  const detectFaceLandmarks = async (videoElement) => {
    const videoEl = video.value;
    const canvasEl = canvas.value;

    const displaySize = {
      width: videoEl.videoWidth,
      height: videoEl.videoHeight,
    };
    faceapi.matchDimensions(canvasEl, displaySize);

    const detections = await faceapi
      .detectSingleFace(videoElement, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks();

      if (detections) {
        const resizedDetections = faceapi.resizeResults(detections, displaySize);

        // Limpa o canvas antes de desenhar
        const ctx = canvasEl.getContext('2d');
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

        // Desenha as landmarks no canvas
        faceapi.draw.drawFaceLandmarks(canvasEl, resizedDetections);
      }

    return detections?.landmarks;
  };

  const calculateDistance = (landmarks) => {
    const leftEye = landmarks.getLeftEye(); // Ponto médio do olho esquerdo
    const rightEye = landmarks.getRightEye(); // Ponto médio do olho direito

    // Coordenadas médias dos olhos
    const leftEyeCenter = {
      x: (leftEye[0].x + leftEye[3].x) / 2,
      y: (leftEye[0].y + leftEye[3].y) / 2,
    };
    const rightEyeCenter = {
      x: (rightEye[0].x + rightEye[3].x) / 2,
      y: (rightEye[0].y + rightEye[3].y) / 2,
    };

    // Distância euclidiana em pixels
    const distanceInPixels = Math.sqrt(
      Math.pow(rightEyeCenter.x - leftEyeCenter.x, 2) +
        Math.pow(rightEyeCenter.y - leftEyeCenter.y, 2)
    );

    return distanceInPixels;
  };

  const pixelsToCm = (distanceInPixels, referenceCm, referencePixels) => {
    const cmPerPixel = referenceCm / referencePixels;
    return distanceInPixels * cmPerPixel;
  };

  const measureDistance = async () => {
    const landmarks = await detectFaceLandmarks(video.value);

    if (landmarks) {
      const distanceInPixels = calculateDistance(landmarks);

      // Conversão com base em referência (exemplo: 6.3 cm para 100 pixels)
      const referenceCm = 6.3; // Distância interpupilar média
      const referencePixels = 100; // Valor aproximado (ajustável)
      distanceCm.value = pixelsToCm(
        distanceInPixels,
        referenceCm,
        referencePixels
      );
    }
  };

  onMounted(() => {
    loadModels();
    initCamera();

    setInterval(() => {
      measureDistance();
    }, 200);
  });
</script>

<style>
  .video,
  .canvas {
    position: absolute; /* Ambos ocupam a mesma posição dentro do contêiner */
    top: 0;
    left: 0;
    width: 100%; /* Ajusta o tamanho para ocupar todo o espaço do contêiner */
    z-index: 1; /* Garante que o vídeo fique atrás do canvas */
  }

  .canvas {
    z-index: 2; /* Faz o canvas aparecer sobre o vídeo */
    pointer-events: none; /* Evita que o canvas bloqueie interações no vídeo */
  }
</style>
