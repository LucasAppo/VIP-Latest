<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>Prophxcy</q-toolbar-title>
        <q-space />
        <q-input type="search" placeholder="Search Prophxcy" dense filled />
        <q-btn dense flat round icon="notifications" />
        <q-btn dense flat round icon="person" />
        <q-btn dense flat round icon="more_vert" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>

  </q-layout>
</template>
