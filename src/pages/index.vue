<script setup>
import { ref } from 'vue';

defineProps({});

const count = ref(0);
</script>

<template>
  <div>
    <div class="container mb-10">
      <div
        class="flex items-center p-5 mt-8 md:mt-24 status font-semibold text-dark-green"
      >
        <svg
          class="mr-4"
          width="29"
          height="29"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3733 0c6.8363 0 12.3734 2.87113 12.3734 6.41593 0 3.5448-5.5371 6.41597-12.3734 6.41597C5.53707 12.8319 0 9.96073 0 6.41593 0 2.87113 5.53707 0 12.3733 0zM0 9.62389c0 3.54481 5.53707 6.41591 12.3733 6.41591 6.8363 0 12.3734-2.8711 12.3734-6.41591v4.94031L23.2 14.4358c-4.0059 0-7.424 2.6306-8.7232 6.3197l-2.1035.0963C5.53707 20.8518 0 17.9806 0 14.4358V9.62389zm0 8.01991c0 3.5448 5.53707 6.4159 12.3733 6.4159H13.92c0 1.6842.4176 3.2722 1.16 4.6516l-2.7067.1604C5.53707 28.8717 0 26.0006 0 22.4558v-4.812zM21.6533 29L17.4 24.1881l1.7941-1.8607 2.4592 2.5343 5.5526-5.7422L29 21.3811 21.6533 29z"
          />
        </svg>
        All Systems Operational
      </div>
    </div>
    <!-- ------------------------Monitors------------------------ -->
    <div class="container">
      <h2
        class="text-xs tracking-wide text-gray-500 dark:text-gray-300 uppercase font-bold mb-8"
      >
        Monitors
      </h2>
      <div class="monitors space-y-6">
        <!-- ------------------------Operational------------------------ -->
        <div class="monitor py-8 bg-green-400 bg-opacity-10">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-2xl text-gray-800 dark:text-gray-100">Website</h3>
            <span class="text-green-600 dark:text-green-400 font-semibold">
              Operational
            </span>
          </div>
          <div class="flex items-center mt-2">
            <div class="h-px w-full bg-green-600"></div>
            <span
              class="pl-2 flex-shrink-0 text-xs font-semibold text-green-600"
              >Today
            </span>
          </div>
        </div>
        <div class="monitor py-8 bg-yellow-500 bg-opacity-10">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-2xl text-gray-800 dark:text-gray-100">
              Mobile Application
            </h3>
            <span class="text-yellow-600 dark:text-yellow-400 font-semibold">
              Degraded Performance
            </span>
          </div>
          <div class="flex items-center mt-2">
            <div class="h-px w-full bg-yellow-600"></div>
            <span
              class="pl-2 flex-shrink-0 text-xs font-semibold text-yellow-600"
              >Today
            </span>
          </div>
        </div>
        <div class="monitor py-8 bg-green-400 bg-opacity-10">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-2xl text-gray-800 dark:text-gray-100">
              Connections
            </h3>
            <span class="text-green-600 dark:text-green-400 font-semibold">
              Operational
            </span>
          </div>
          <div class="flex items-center mt-2">
            <div class="h-px w-full bg-green-600"></div>
            <span
              class="pl-2 flex-shrink-0 text-xs font-semibold text-green-600"
              >Today
            </span>
          </div>
        </div>
        <div class="monitor py-8 bg-yellow-500 bg-opacity-10">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-2xl text-gray-800 dark:text-gray-100">API</h3>
            <span class="text-yellow-600 dark:text-yellow-400 font-semibold">
              Degraded Performance
            </span>
          </div>
          <div class="flex items-center mt-2">
            <div class="h-px w-full bg-yellow-600"></div>
            <span
              class="pl-2 flex-shrink-0 text-xs font-semibold text-yellow-600"
              >Today
            </span>
          </div>
        </div>
        <div class="monitor py-8 bg-red-400 bg-opacity-10">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-2xl text-gray-800 dark:text-gray-100">Webhooks</h3>
            <span class="text-red-600 dark:text-red-400 font-semibold">
              Major Outage
            </span>
          </div>
          <div class="flex items-center mt-2">
            <div class="h-px w-full bg-red-600"></div>
            <span class="pl-2 flex-shrink-0 text-xs font-semibold text-red-600"
              >Today
            </span>
          </div>
        </div>
      </div>
      <div class="monitor py-8 bg-green-400 bg-opacity-10">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-2xl text-gray-800 dark:text-gray-100">Worker</h3>
          <span class="text-green-600 dark:text-green-400 font-semibold">
            Operational
          </span>
        </div>
        <div class="flex items-center mt-2">
          <div class="h-px w-full bg-green-600"></div>
          <span class="pl-2 flex-shrink-0 text-xs font-semibold text-green-600"
            >Today
          </span>
        </div>
      </div>
      <div class="incidents py-16">
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
              <strong class="text-gray-900 dark:text-gray-300"
                >Completed</strong
              >
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
              <strong class="text-gray-900 dark:text-gray-300"
                >Scheduled</strong
              >
              - No impact is expected, however if you notice that lookups are
              failing please check that your DNS resolvers are respecting the
              published glue records for the domain.
              <div class="text-gray-500 dark:text-gray-400">Aug 3, 05:33 UTC</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.status {
  background: linear-gradient(90.19deg, #95e2a9 0%, #95e2a9 100%);
  box-shadow: 0px 0px 40px rgba(27, 226, 155, 0.3);
  border-radius: 12px;
}

.monitor {
  border-radius: 0.5rem;
  padding: 1rem;
}
</style>
