<script>
  import Header from './lib/Header.svelte'
  // import MainContent from './lib/MainContent.svelte'
  // import Footer from './lib/Footer.svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="font-barlow min-h-screen flex flex-col">
  <Header />
  <!-- <MainContent /> -->
  <!-- <Footer /> -->
</div>
