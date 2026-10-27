<script setup lang="ts">
import CoverImage from '@/components/CoverImage.vue'
import QrCode from '@/components/QrCode.vue'

// Canonical URL, not window.location - so the QR is correct even if this
// page is ever loaded from localhost/preview.
const PAGE_URL = 'https://radicalreadings.github.io/settlers/'

const settlersCovers = [
  'covers/settlers/Settlers_The_Mythology_of_the_White_Proletariat_(1989).png',
  'covers/settlers/A1t7bjbX-6L._AC_UF1000,1000_QL80_.jpg',
]
</script>

<template>
  <v-container class="hero">
    <h1 class="hero-title">Settlers</h1>
    <p class="hero-subtitle">
      <span>Reading Discussion</span>
      <span>11.10.26</span>
    </p>
  </v-container>

  <v-container class="page-section">
    <v-row>
      <v-col cols="12" md="4">
        <p class="intro-text">
          <b>Welcome to Radical Readings at Fitz.</b> Our second session will be on the controversial
          <em>Settlers: The Mythology of the White Proletariat</em>, by J. Sakai.
        </p>
        <p class="intro-text">
          <b>11.10.2026</b> at <b>6PM</b> at <a href="#location" class="intro-link">Fitz</a>.
        </p>

        <p class="intro-text">Our discussion will focus on a
          <a href="#selected-chapters" class="intro-link">selection of chapters</a>.
        </p>
        <p class="intro-text">
          Please show up for discussion <b>even if you didn't read everything</b>.
          Your presence for discussion is what matters most! We'll cover the text but also the ways
          Settler Colonialism shapes the U.S. today.
        </p>

        <p class="intro-text">
          Here is a free <a href="#audiobook" class="intro-link">audiobook of the selected chapters</a>. <br>
          Pick up your physical copy from <a href="#location" class="intro-link">Fitz</a>!
        </p>
      </v-col>
      <v-col id="audiobook" cols="12" md="8">
        <div class="video-embed">
          <iframe
            src="https://www.youtube-nocookie.com/embed/TODO_VIDEO_ID"
            title="Video audiobook"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="page-section page-section-rule">
    <v-row>
      <v-col cols="12" sm="5" md="4">
        <CoverImage :interval-ms="8000" :sources="settlersCovers" alt="Settlers - cover editions" />
      </v-col>
      <v-col cols="12" sm="7" md="8" class="chapters-col">
        <div class="section-heading">
          <h2>Settlers: The Mythology of the White Proletariat</h2>
          <p class="section-caption">by J. Sakai</p>
        </div>
        <h3 id="selected-chapters" class="chapters-heading">Selected Chapters</h3>
        <ul class="point-list">
          <!-- <li>III. The Contradictions of Nation and Class <i>(10 pages)</i></li> -->
          <li>IV. Settler Trade Unionism <i>(62 pages)</i></li>
          <li>IX. Neocolonial Pacification in the U.S. <i>(68 pages)</i></li>
          <li>XII. The Global Plantation <i>(20 pages)</i></li>
          <li>XIII. Klass Kulture & Kommunity <i>(24 pages)</i></li>
        </ul>
        <p class="note-line"><span class="note-label">Note:</span>Feel free to read the whole book!<br>Our discussion will cover these Selected Chapters.</p>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="page-section page-section-rule">
    <v-row align="end">
      <v-col cols="12" sm="7" md="8">
        <h2 id="location" class="section-heading">Location</h2>
        <p class="location-line"><b>Fitz Books and Waffles</b></p>
        <p class="location-line">1462 Main St. Buffalo, NY</p>
        <p class="location-line location-line-spaced"><b>6PM</b> November 10th, 2026</p>
        <div class="map-embed">
          <iframe
            src="https://www.google.com/maps?q=1462+Main+St,+Buffalo,+NY&output=embed"
            title="Map showing Fitz Books and Waffles, 1462 Main St., Buffalo, NY"
            loading="lazy"
          />
        </div>
      </v-col>
      <v-col cols="12" sm="5" md="4" class="d-flex justify-sm-end">
        <QrCode :value="PAGE_URL" label="QR to this page" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero {
  padding-top: 3rem;
  padding-bottom: 1rem;
}
.hero-title {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 900;
  text-transform: uppercase;
  color: rgb(var(--v-theme-primary));
  font-size: clamp(2.25rem, 7vw, 4.25rem);
  line-height: 1.02;
  letter-spacing: -0.01em;
}
.hero-subtitle {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin: 0.75rem 0 0;
  font-family: var(--font-label);
  font-size: clamp(1.15rem, 4vw, 1.75rem);
  color: rgba(var(--v-theme-on-background), 0.65);
}
.page-section {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.intro-text {
  margin: 0 0 1rem;
  font-size: 1.15rem;
  line-height: 1.5;
  color: rgb(var(--v-theme-on-background));
}
.intro-link {
  color: rgb(var(--v-theme-primary));
  font-weight: 600;
}
.page-section-rule {
  border-top: 1px solid rgba(var(--v-theme-on-background), 0.15);
}
.section-caption {
  margin: 0 0 1rem;
  font-family: var(--font-body);
  font-size: 1.1rem;
  color: rgb(var(--v-theme-on-background));
}
.video-embed {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: var(--border-accent);
}
.video-embed iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.section-heading {
  margin: 0 0 1rem;
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(var(--v-theme-primary));
  font-size: 1.4rem;
}
.chapters-col {
  display: flex;
  flex-direction: column;
}
.chapters-heading {
  margin: 0 0 0.75rem;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 900;
  font-size: 1.5rem;
}
.point-list {
  margin: 0 0 1rem;
  padding-left: 1.25rem;
  font-size: 1.15rem;
}
.point-list li {
  padding: 0.3rem 0;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
}
.point-list li::marker {
  color: rgb(var(--v-theme-primary));
}
.note-line {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: auto;
  margin-bottom: 0;
  font-size: 1.05rem;
  color: rgb(var(--v-theme-on-background));
}
.location-line {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  color: rgb(var(--v-theme-on-background));
}
.location-line-spaced {
  margin-top: 0.75rem;
}
.map-embed {
  position: relative;
  width: 100%;
  aspect-ratio: 6 / 3;
  margin-top: 0.75rem;
  border: var(--border-accent);
}
.map-embed iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.note-label {
  font-weight: 600;
  white-space: nowrap;
}
</style>
