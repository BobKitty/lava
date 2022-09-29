<template>
  <HeaderLayout />
  <WrapperLayout>
    <SectionMain />
    <SectionBusiness />
    <SectionMoney />
    <SectionSteps />
    <SectionPopular />
    <SectionPayments />
    <SectionStart />
    <SectionApp />
  </WrapperLayout>
  <FooterLayout />
</template>

<script>
import HeaderLayout from "../components/HeaderLayout.vue";
import FooterLayout from "../components/FooterLayout.vue";
import WrapperLayout from '../components/WrapperLayout.vue';
import SectionMain from '../components/sections/SectionMain.vue';
import SectionBusiness from '../components/sections/SectionBusiness.vue';
import SectionMoney from '../components/sections/SectionMoney.vue';
import SectionSteps from '../components/sections/SectionSteps.vue';
import SectionPopular from '../components/sections/SectionPopular.vue';
import SectionPayments from '../components/sections/SectionPayments.vue';
import SectionStart from '../components/sections/SectionStart.vue';
import SectionApp from '../components/sections/SectionApp.vue';

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    WrapperLayout,
    SectionMain,
    SectionBusiness,
    SectionMoney,
    SectionSteps,
    SectionPopular,
    SectionPayments,
    SectionStart,
    SectionApp,
  },
}
</script>

<style scoped lang="scss">

</style>