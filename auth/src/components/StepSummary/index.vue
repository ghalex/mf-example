<template>
  <div>
    <div class="panel-signup items-center flex-col py-16 px-12 text-center">
      <div class="text-4xl leading-none mb-4">Thank <b>you</b></div>
      <p class="text-white text-lg font-light max-w-lg">
        Congrats! Your account was created with success, you can access our platform.
      </p>
    </div>
    <div class="panel p-4 mt-4 sm:p-8 flex-col items-start">
      <h3 class="font-semibold">What next ?</h3>

      <v-button as="a" class="primary my-2" href="/">Go to Platform</v-button>
      <!-- <p>
        If you want to talk about <b>trading journal</b>, trading systems, money management or any subject related to
        trading, join our community.
      </p>
      <a target="_blank" href="https://community.antsignals.com" class="btn btn-primary btn-outlined m-0 my-4">
        <i class="fas fa-comments mr-2"></i>
        Join the Community
      </a> -->
      <p>Start using the platform.</p>
      <p>
        If you want to learn more about what KPI's to track read
        <a href="https://zapant.com/blog">our Blog</a>
      </p>
      <h3 class="font-semibold mt-4">Contact us</h3>
      <p>
        For any questions, you can always send us an email at
        <a href="mailto:hello@zapant.com">hello@zapant.com</a>
      </p>
      <p class="mt-2">
        Thanks, <br />
        ZapAnt Team
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StepSummary',
  props: {},
  components: {},
  methods: {}
})
</script>

<style scoped>
.panel-signup {
  @apply flex rounded-lg overflow-hidden shadow-md bg-purple-700 text-white;
  background-image: url('~@/assets/images/tra-bg-2.png');
  background-repeat: no-repeat;
}
</style>
