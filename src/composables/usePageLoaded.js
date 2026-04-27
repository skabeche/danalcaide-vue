import { onMounted, ref } from 'vue'

/**
 * Composable to reactively track the page loading state
 * Watches for changes to the data-page-loaded attribute on the HTML element
 *
 * @returns {Object} - { isPageLoaded: Ref<boolean> }
 */
export function usePageLoaded() {
  const isPageLoaded = ref(false)

  onMounted(() => {
    const html = document.documentElement

    // Function to check and update the reactive state
    const checkPageLoaded = () => {
      const loaded = html.dataset.pageLoaded === 'true'
      isPageLoaded.value = loaded
    }

    // Initial check
    checkPageLoaded()

    // Set up observer for future changes
    const observer = new MutationObserver(checkPageLoaded)
    observer.observe(html, {
      attributes: true,
      attributeFilter: ['data-page-loaded']
    })
  })

  return {
    isPageLoaded
  }
}
