<template>
  <a href="#" @click.prevent="openModal">{{ linkText }}</a>
  <dialog ref="dialogRef" @click="closeDialog" class="p-4 md:p-10 w-[95vw] lg:w-fit bg-white border-4 border-black rounded-lg overflow-y-auto" :aria-label="$t('components.dialog.close')">
    <button @click="closeModal" class="absolute top-3 right-4 cursor-pointer hover:text-gray-700 hover:rotate-90 motion-reduce:hover:rotate-0 transition-transform duration-400" aria-label="Close dialog">
      <X :size="36" />
    </button>
    <div class="prose-sm md:prose prose-h1:font-alternateGothic2 prose-h1:text-3xl! prose-h1:uppercase prose-h1:w-[90%] prose-h1:mb-0 prose-a:no-underline text-pretty">
      <slot />
      <a href="#" @click.prevent="closeModal" :aria-label="$t('components.dialog.close')">{{ $t('components.dialog.backLink') }}</a>
    </div>
  </dialog>
</template>

<script setup>
  import { useTemplateRef } from "vue";
  import { X } from 'lucide-vue-next';

  const props = defineProps({
    linkText: {
      type: String,
      required: true
    }
  })

  const dialogRef = useTemplateRef('dialogRef');

  const openModal = () => {
    dialogRef.value.showModal();
  }

  const closeModal = () => {
    dialogRef.value.close();
  }

  const closeDialog = (e) => {
    if (e.target === dialogRef.value) {
      closeModal();
    }
  }
</script>

<style scoped>
  .prose {
    max-width: none;
  }

  dialog {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0;
    transition:
      display 500ms allow-discrete,
      overlay 500ms allow-discrete;
  }

  dialog::backdrop {
    height: 100lvh;
    background-image: url("/images/noise.png");
    clip-path: circle(0% at 50% 50%);
    backdrop-filter: blur(5px);
    transition:
      background-color 500ms ease-out,
      backdrop-filter 500ms ease-out;
  }

  /* Open animation */
  dialog[open] {
    animation: anim-dialog-open 300ms 100ms ease forwards;
  }

  dialog[open]::backdrop {
    animation: anim-backdrop-open 1.2s ease-out forwards;
  }

  /* Close animation - triggered when dialog is closing */
  dialog:not([open]) {
    animation: anim-dialog-close 400ms ease-out forwards;
  }

  dialog:not([open])::backdrop {
    animation: anim-backdrop-close 400ms ease-out forwards;
  }

  @keyframes anim-dialog-open {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95);
      filter: blur(4px);
    }

    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
      filter: blur(0px);
    }
  }

  @keyframes anim-dialog-close {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
      filter: blur(0px);
    }

    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95);
      filter: blur(4px);
    }
  }

  @keyframes anim-backdrop-open {
    0% {
      clip-path: circle(0% at 50% 50%);
    }

    100% {
      clip-path: circle(150% at 50% 50%);
    }
  }

  @keyframes anim-backdrop-close {
    0% {
      clip-path: circle(150% at 50% 50%);
    }

    100% {
      clip-path: circle(0% at 50% 50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    dialog {
      opacity: 1;
    }

    dialog::backdrop {
      clip-path: none;
    }

    dialog,
    dialog::backdrop {
      transition: none;
    }

    dialog[open],
    dialog:not([open]),
    dialog[open]::backdrop,
    dialog:not([open])::backdrop {
      animation: none;
    }
  }
</style>
