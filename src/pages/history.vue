<script setup>
import { ref } from 'vue';

defineProps({});

const count = ref(0);
</script>

<template>
  <div class="container">
    <div class="text-6xl font-bold text-gray-900 dark:text-gray-100 my-8">
      Incident History
    </div>
    <!-- ------------------------Today------------------------ -->
    <div class="incidents py-8">
      <h2
        class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
      >
        Today
      </h2>
      <div class="today-incidents">
        <div class="day mt-12">
          <div class="incidents text-gray-500 dark:text-gray-400">
            No incidents reported.
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------Past------------------------ -->
    <div class="incidents py-8">
      <h2
        class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
      >
        Past Incidents
      </h2>
      <div class="past-incidents">
        <div class="day mt-12" x-show="i !== 3 && i !== 5">
          <h4
            class="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300"
          >
            Aug <span x-text="i"></span>, 2020
          </h4>
          <div class="incidents text-gray-500 dark:text-gray-400">
            No incidents reported.
          </div>
        </div>
      </div>
      <div class="day mt-12">
        <h4
          class="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300"
        >
          Aug <span x-text="i"></span>, 2020
        </h4>
        <div class="incidents text-gray-700 dark:text-gray-300">
          <div class="text-blue-700 dark:text-blue-400 text-xl font-semibold">
            Maintenance on the example.com domain
          </div>
          <div class="mt-3">
            <strong class="text-gray-900 dark:text-gray-300">Completed</strong>
            - The scheduled maintenance has been completed.
            <div class="text-gray-500 dark:text-gray-400">Aug 3, 11:07 UTC</div>
          </div>

          <div class="mt-3">
            <strong class="text-gray-900 dark:text-gray-300"
              >In progress</strong
            >
            - Scheduled maintenance is currently in progress. We will provide
            updates as necessary.
            <div class="text-gray-500 dark:text-gray-400">Aug 3, 06:00 UTC</div>
          </div>
          <div class="mt-3">
            <strong class="text-gray-900 dark:text-gray-300">Scheduled</strong>
            - No impact is expected, however if you notice that lookups are
            failing please check that your DNS resolvers are respecting the
            published glue records for the domain.
            <div class="text-gray-500 dark:text-gray-400">Aug 3, 05:33 UTC</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
.monitor {
  border-radius: 0.5rem;
  padding: 1rem;
}
</style>
