<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
let pathOrigin = ref("");

onMounted(() => {
  setTimeout(() => {
    pathOrigin.value = (route.query.pathOrigin as string) || "";
    if (pathOrigin.value && !pathOrigin.value.includes("http")) {
      pathOrigin.value = `http://${pathOrigin.value}`;
    }
  }, 1);
});
</script>

<template>
  <div class="container-fluid">
    <div class="flicker-background"></div>
    <div
      class="row row-container d-flex justify-content-center align-items-center"
    >
      <div class="col-12 text-center">
        <h3 class="title">Página no encontrada</h3>
      </div>
      <div
        v-if="pathOrigin != ''"
        class="col-12 row p-0 m-0 d-flex justify-content-center"
      >
        <a
          :href="pathOrigin + ''"
          class="btn btn-primary col-md-2 col-6"
          target="_parent"
        >
          Regresar al inicio
        </a>
      </div>
      <div class="col-10 row d-flex justify-content-center">
        <img
          class="img-astronauta img-float"
          src="../public/astronauta.png"
          alt="Astronauta flotante"
          srcset=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-primary {
  background-color: #135a72;
  border-color: #55c5eb;
  font-weight: 600;
}

.container-fluid {
  position: relative;
  background-color: #000;
  background-image: url("../public/estrellas.png");
  overflow: hidden;
}

.flicker-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
  animation: flicker 2s infinite;
  z-index: 1;
}

.row-container {
  position: relative;
  height: 100vh;
  z-index: 2;
}

.img-astronauta {
  width: 100%;
  max-width: 500px;
  height: auto;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: #c9c9c9;
}

@keyframes flicker {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.6;
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.img-float {
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}
</style>
