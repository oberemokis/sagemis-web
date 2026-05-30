<template>
  <svg
    class="pointer-events-none block h-full w-full"
    viewBox="0 0 1200 1600"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id="roadFade"
        x1="0"
        y1="1600"
        x2="0"
        y2="200"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#cfe6d4" stop-opacity="0.85" />
        <stop offset="0.6" stop-color="#dcebdf" stop-opacity="0.4" />
        <stop offset="1" stop-color="#e8f1ea" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="lineFade"
        x1="0"
        y1="1600"
        x2="0"
        y2="220"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#7fb992" stop-opacity="0.75" />
        <stop offset="1" stop-color="#7fb992" stop-opacity="0" />
      </linearGradient>
    </defs>

    <path
      d="M360 1600 C420 1480 520 1440 480 1320 C440 1180 320 1180 350 1040 C390 880 660 900 605 760 C560 640 430 600 475 480 C500 380 575 300 595 200 L605 200 C625 300 590 380 565 480 C520 600 760 640 795 760 C840 900 610 880 650 1040 C690 1180 820 1180 880 1320 C920 1440 780 1480 840 1600 Z"
      fill="url(#roadFade)"
    />
    <path
      d="M600 1600 C660 1480 720 1440 680 1320 C640 1180 460 1180 500 1040 C540 880 740 900 700 760 C660 640 480 600 520 480 C545 380 580 300 600 200"
      stroke="url(#lineFade)"
      stroke-width="7"
      stroke-dasharray="30 34"
      stroke-linecap="round"
    />
  </svg>
</template>
