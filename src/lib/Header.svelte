<script>
  let navIsOpen = false

  const toggleNav = () => {
    navIsOpen = !navIsOpen
  }
</script>

<header class="p-8">
  <!-- Mobile nav -->
  <nav class="flex justify-between items-center relative md:hidden">
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
          ? 'absolute top-14 w-full font-bold uppercase font-barlow-condensed flex flex-col justify-center items-center gap-3 shadow-lg p-5 bg-white z-10'
          : 'hidden'
      }`}
    >
      <li><a href="/#">Product</a></li>
      <li><a href="/#">Features</a></li>
      <li><a href="/#">Pricing</a></li>
      <li
        aria-hidden="true"
        class="w-full h-[1px] bg-cstm-neutral-grayish-blue"
      />
      <li class="text-cstm-neutral-grayish-blue"><a href="/#">Login</a></li>
    </ul>
  </nav>

  <!-- Desktop nav -->
  <nav class="hidden md:block container mx-auto p-10">
    <div class="flex justify-between items-center">
      <img src="/assets/logo.svg" alt="logo" />
      <ul
        class="flex items-center gap-16 font-bold uppercase font-barlow-condensed"
      >
        <li class="hover:underline"><a href="/#">Product</a></li>
        <li class="hover:underline"><a href="/#">Features</a></li>
        <li class="hover:underline"><a href="/#">Pricing</a></li>
        <li
          aria-hidden="true"
          class="w-1.5 h-1.5 bg-cstm-neutral-grayish-blue rounded-full"
        />
        <li class="hover:underline text-cstm-neutral-grayish-blue">
          <a href="/#">Login</a>
        </li>
      </ul>
    </div>
  </nav>
</header>
