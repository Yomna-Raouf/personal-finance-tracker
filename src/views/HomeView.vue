<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
</script>

<template>
  <main class="min-h-screen p-9">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold">Monthly Financial Report</h1>
      <div class="flex gap-2">
        <Button size="icon">
          <Icon icon="lucide:plus" class="size-4" />
        </Button>
      </div>
    </div>

    <Separator orientation="horizontal" class="my-3 h-px" />

    <div class="h-[100vh] flex flex-1 flex-col gap-8 pt-0">
      <div class="grid auto-rows-min gap-4 md:grid-cols-3">
        <div class="rounded-xl bg-muted/100 p-4">
          <h3 class="text-2xl text-slate-600">Net Balance</h3>
          <h1 class="text-4xl font-bold mt-8">$100,000</h1>
        </div>
        <div class="rounded-xl bg-muted/100 p-4">
          <h3 class="text-2xl text-slate-600">Total Expenses</h3>
          <h1 class="text-4xl font-bold mt-8">$100,000</h1>
        </div>
        <div class="rounded-xl bg-muted/100 p-4">
          <h3 class="text-2xl text-slate-600">Total Income</h3>
          <h1 class="text-4xl font-bold mt-8">$100,000</h1>
        </div>
      </div>
      <div class="grid auto-rows-min gap-4 md:grid-cols-2">
        <div class="rounded-xl bg-muted/100 md:min-h-min p-4">efgsf</div>
        <div class="rounded-xl bg-muted/100 md:min-h-min p-4">efgsf</div>
      </div>
    </div>
  </main>
</template>
