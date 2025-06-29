<template>
    <button
      :style="{ backgroundColor: backgroundColor }"
      class="btn"
      @click="$emit('click')"
    >
      {{ label }}
    </button>
  </template>
  
  <script>
  export default {
    name: "ActionButton",
    props: {
      backgroundColor: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .btn {
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: transform 0.3s;
  }
  
  .btn:hover {
    transform: scale(1.05);
  }
  </style>
  