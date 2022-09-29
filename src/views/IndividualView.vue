<template>
  <HeaderLayout />
  <WrapperLayout>
    Individual Page
  </WrapperLayout>
  <FooterLayout />
</template>

<script>
import HeaderLayout from "../components/HeaderLayout.vue";
import FooterLayout from "../components/FooterLayout.vue";
import WrapperLayout from '../components/WrapperLayout.vue';

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    WrapperLayout,
  },
}
</script>

<style scoped lang="scss">

</style>