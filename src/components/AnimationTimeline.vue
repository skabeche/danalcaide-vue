<template>
  <div ref="refContainer">
    <slot />
  </div>
</template>

<script setup>
  import { onMounted, useTemplateRef } from 'vue'
  import { useAnimationTimeline } from "@/composables/useAnimationTimeline";

  const props = defineProps({
    type: {
      type: String,
      default: 'fade-down'
    },
    delay: {
      type: Number,
      default: .3
    }
  })

  const container = useTemplateRef('refContainer')

  onMounted(() => {
    useAnimationTimeline(container.value, props.type, props.delay);
  });
</script>