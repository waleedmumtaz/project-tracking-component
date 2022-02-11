<script>
  let navIsOpen = false

  const toggleNav = () => {
    navIsOpen = !navIsOpen
  }
</script>

<header class="p-8">
  <!-- Mobile nav -->
  <nav class="flex justify-between items-center relative">
    <img src="/assets/logo.svg" alt="logo" />
    <button on:click={toggleNav}>
      <img
        src={`${
          navIsOpen ? '/assets/icon-close.svg' : '/assets/icon-hamburger.svg'
        }`}
        alt="toggle hamburger menu"
      />
    </button>
    <ul
      class={`${
        navIsOpen
          ? 'absolute top-14 w-full font-bold uppercase font-barlow-condensed flex flex-col justify-center items-center gap-3 shadow-lg p-5'
          : 'hidden'
      }`}
    >
      <li><a href="/#">Product</a></li>
      <li><a href="/#">Features</a></li>
      <li><a href="/#">Pricing</a></li>
      <div class="w-full h-[1px] bg-cstm-neutral-grayish-blue" />
      <li class="text-cstm-neutral-grayish-blue"><a href="/#">Login</a></li>
    </ul>
  </nav>
</header>
