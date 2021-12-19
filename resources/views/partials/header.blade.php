<header id="headroom" class="header__main flex justify-between items-center h-[100px] max-w-[1920px] mx-auto px-[50px] fixed top-0 w-full z-50">
  <a class="brand" href="{{ home_url('/') }}">
    Logo
  </a>

  <nav class="nav-primary">
    {!! wp_nav_menu(['menu' => 0, 'menu_class' => 'flex gap-x-[54px]', 'echo' => false]) !!}
  </nav>
</header>
